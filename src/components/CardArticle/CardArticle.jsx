import { useState } from 'react';
import { Card, Button, Image, Offcanvas, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useListCommentsMutation } from '../../services/apiSPA';

// eslint-disable-next-line react/prop-types
const CardArticle = ({ props }) => {
    //console.log(props);
    // eslint-disable-next-line react/prop-types
    const id = props.id;
    // eslint-disable-next-line react/prop-types
    const title = props.title;
    // eslint-disable-next-line react/prop-types
    const body = props.body;

    const [comments, setComments] = useState(false);
    const [getListComments] = useListCommentsMutation();

    const navigate = useNavigate();
    //let listComments = [];

    const showComments = () => {
        console.log(id);
        /*  getListComments(id).then((data) => {
            listComments = data.data;
            console.log(listComments);
        });*/

        const { data: listComments, isLoading } = getListComments(id);
        const isEmpty = !isLoading && !listComments?.length;
        setComments(comments ? false : true);
    };

    const pageUser = () => {
        navigate('/user');
    };

    const handleClose = () => {
        setComments(false);
    };

    return (
        <Card key={id} className="m-3" style={{ width: '22rem' }}>
            <Image
                src="https://koshka.top/uploads/posts/2021-12/1638599322_29-koshka-top-p-kotiki-na-avatarku-32.jpg" //"https://otkritkis.com/wp-content/uploads/2022/06/peukx.jpg"
                thumbnail
                width={350}
                onClick={pageUser}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Button variant="outline-secondary" onClick={showComments}>
                    Comments
                </Button>
                {comments && (
                    <Offcanvas show={comments} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{title}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {isEmpty ? (
                                <div>No comments...</div>
                            ) : isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                <ListGroup>comments</ListGroup>
                            )}
                        </Offcanvas.Body>
                    </Offcanvas>
                )}
            </Card.Body>
        </Card>
    );
};

export default CardArticle;

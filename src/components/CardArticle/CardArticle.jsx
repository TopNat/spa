import { useState } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import { useListCommentsMutation } from '../../services/apiSPA';
import Comments from '../Comments/Comments';

const CardArticle = ({ props }) => {
    const id = props.id;

    const title = props.title;

    const body = props.body;

    const userId = props.userId;

    const [comments, setComments] = useState(false);

    const navigate = useNavigate();

    const showComments = () => {
        setComments(comments ? false : true);
    };

    const pageUser = (id) => {
        navigate('/user/' + id);
    };

    return (
        <Card key={id} className="m-3" style={{ width: '22rem' }}>
            <Image
                src="https://koshka.top/uploads/posts/2021-12/1638599322_29-koshka-top-p-kotiki-na-avatarku-32.jpg" //"https://otkritkis.com/wp-content/uploads/2022/06/peukx.jpg"
                thumbnail
                width={350}
                onClick={() => pageUser(userId)}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Button variant="outline-secondary" onClick={showComments}>
                    Comments
                </Button>
                {comments && (
                    <Comments
                        title={title}
                        id={id}
                        comments={comments}
                        setComments={setComments}
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default CardArticle;

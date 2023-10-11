import { Button, ListGroup, Offcanvas, Spinner } from 'react-bootstrap';
import { useListCommentsQuery } from '../../services/apiSPA';

const Comments = ({ id, title, comments, setComments }) => {
    //let isEmpty = false;
    // setTimeout(() => {
    const { data: listComments, isLoading } = useListCommentsQuery(id);

    const isEmpty = !isLoading && !listComments?.length;
    //  }, 1000);
    // console.log(listComments);

    const handleClose = () => {
        setComments(false);
    };
    return (
        <Offcanvas show={comments} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {isEmpty ? (
                    <div>No comments...</div>
                ) : isLoading ? (
                    <div>
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                    </div>
                ) : (
                    <ListGroup>
                        {listComments.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <div className="fw-bold">{item.name}</div>
                                {item.body}
                                <div className="fw-bold">{item.email}</div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Comments;

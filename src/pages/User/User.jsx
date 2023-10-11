import { Button, Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {
    useListPostsAllQuery,
    useSetUserInfoQuery,
} from '../../services/apiSPA';
import CardArticle from '../../components/CardArticle/CardArticle';

const User = () => {
    const params = useParams();
    const id = params.id;
    //console.log('id=' + id);

    const { data: userInfo, isLoading } = useSetUserInfoQuery(id);
    const isEmpty = !isLoading && !userInfo?.id;

    const { data: listPostsAll, isLoading: loadingPosts } =
        useListPostsAllQuery();
    const isEmptyPosts = !loadingPosts && !listPostsAll?.length;
    let listPostsUser = [];
    if (!isEmptyPosts && !loadingPosts) {
        listPostsUser = listPostsAll.filter(
            (item) => String(item.userId) === id
        );
        console.log(listPostsUser);
    }

    //console.log(listPostsAll);
    // console.log(loadingPosts);

    return (
        <Card>
            {isEmpty ? (
                <div>No user info...</div>
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
                <Card.Body>
                    <Card.Title>
                        {userInfo.username}({userInfo.name})
                    </Card.Title>
                    <span className="fw-bold">Web site:</span>{' '}
                    {userInfo.website}
                    <br></br>
                    <span className="fw-bold">E-mail: </span>
                    {userInfo.email}
                    <br></br>
                    <span className="fw-bold">Company: </span>
                    {userInfo.company.name}
                </Card.Body>
            )}
            {isEmptyPosts ? (
                <div>No posts...</div>
            ) : loadingPosts ? (
                <div>Loading...</div>
            ) : (
                <div className="d-flex flex-wrap">
                    {listPostsUser.map((item, index) => (
                        <CardArticle
                            key={index}
                            props={{
                                id: item.id,
                                title: item.title,
                                body: item.body,
                                userId: item.userId,
                            }}
                        />
                    ))}
                </div>
            )}
        </Card>
    );
};
export default User;

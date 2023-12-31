//import { useNavigate } from 'react-router-dom';
import {
    useListPostsQuery /*,
    useSetUserInfoMutation,*/,
} from '../../services/apiSPA';
import { Col, Row, Pagination } from 'react-bootstrap';
import { useState } from 'react';
import { clickPage, getListPages } from '../../utils/utils';
import CardArticle from '../../components/CardArticle/CardArticle';

const COUNT_USERS_PAGE = 8;

const Main = () => {
    const [page, setPage] = useState(1);

    let countPages = 0;
    // const [setUserName] = useSetUserInfoMutation();
    //console.log(setUserName);

    const { data: listPosts, isLoading } = useListPostsQuery({
        page: page,
        limit: COUNT_USERS_PAGE,
    });

    const isEmpty = !isLoading && !listPosts?.length;

    //функция для нахождения ника пользователя по id в списке статей
    /* const addNameUser = (id) => {
        setUserName(id).then(
            (data) => {
                return data;
            } //listPosts[index]['nameUser'] = data
        );
    };*/

    // console.log(addNameUser);
    if (listPosts?.length) {
        //let newListPosts = listPosts;
        countPages = Math.ceil(/*listPosts.length*/ 100 / COUNT_USERS_PAGE);

        /*const listPostsNameUser = newListPosts.map((item) => {
            setUserName(item.userId).then((data) => {
                return { ...item, nameUser: data };
            });
        });*/

        //console.log(listPostsNameUser);
    }

    const listPages = getListPages(countPages, page);

    return (
        <Row>
            <Row>
                {/*навигация*/}
                <Pagination>
                    {listPages.map((pageItem) => (
                        <Pagination.Item
                            key={pageItem}
                            onClick={() => clickPage(pageItem, setPage)}
                        >
                            {pageItem}
                        </Pagination.Item>
                    ))}
                </Pagination>
                {/*навигация*/}
            </Row>
            <Row>
                <Col className="d-flex flex-wrap">
                    {isEmpty ? (
                        <div>No posts...</div>
                    ) : isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        listPosts.map((item, index) => (
                            <CardArticle
                                key={index}
                                props={{
                                    id: item.id,
                                    title: item.title,
                                    body: item.body,
                                    userId: item.userId,
                                }}
                            />
                        ))
                    )}
                </Col>
            </Row>
        </Row>
    );
};

export default Main;

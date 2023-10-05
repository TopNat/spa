export const getListPages = (countPages, page) => {
    const listPages = [];
    if (countPages > 0) {
        // если страниц много, то выводим только 10 соседних с текущей страницей или все 10 если текущая страница - начальная
        if (countPages >= 10) {
            const minPage = page - 5;
            let beginPage = minPage;
            for (let i = 0; i < 10; i++) {
                if (beginPage > 0) {
                    listPages[i] = beginPage;
                    beginPage++;
                    if (listPages[i] === countPages) {
                        break;
                    }
                } else {
                    listPages[i] = i + 1;
                }
            }
        } else {
            for (let i = 0; i < countPages; i++) {
                listPages[i] = i + 1;
            }
        }
    }
    return listPages;
};

export const clickPage = (pageNumber, setPage) => {
    setPage(pageNumber);
};

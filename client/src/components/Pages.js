import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {coin} = useContext(Context)
    const pagesCount = Math.ceil(coin.coinsCount / 9)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <Pagination className="Pages">
            {pages.map(page =>
                <Pagination.Item
                    className="Page"
                    key={page}
                    active={coin.page === page}
                    onClick={() => coin.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
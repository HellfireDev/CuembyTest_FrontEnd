import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { config } from "../../../config/config";
import { useFetchPlayers } from "../../../hooks/useFetchPlayers";
import { ErrorScreen } from "../../common/errorScreen/ErrorScreen";
import { LoadingScreen } from "../../common/loadingScreen/LoadingScreen";
import { Scroll } from "../../common/scroll/Scroll";
import './Players.css';

export const Players = memo(() => {

    const [pageState, setPageState] = useState({
        apiEndPoint: config.playersEndPoint,
        search: '',
        order: 'desc',
        page: 1
    });

    const { apiEndPoint, search, order, page } = pageState;

    const { data, loading, error } = useFetchPlayers(apiEndPoint, search, order, page);
    const { totalPages } = !!data && data;

    const handlePageClick = ({ selected }) => {
        setPageState({
            ...pageState,
            page: selected + 1
        })
    }

    return (
        <>
            {
                error
                    ?
                    (
                        <ErrorScreen />
                    )
                    :
                    (
                        <Scroll>
                            {
                                loading
                                    ?
                                    (
                                        < LoadingScreen />
                                    )
                                    :
                                    (
                                        <pre>{JSON.stringify(data, null, 3)}</pre>
                                    )
                            }
                        </Scroll>
                    )
            }
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages || 0}
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                previousLinkClassName={"prev-pag"}
                nextLinkClassName={"next-pag"}
                disabledClassName={"disabled-pag"}
                activeClassName={'active-pag'}
            />
        </>
    )
});
import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { config } from "../../../config/config";
import { useFetchPlayers } from "../../../hooks/useFetchPlayers";
import { ErrorScreen } from "../../common/errorScreen/ErrorScreen";
import { LoadingScreen } from "../../common/loadingScreen/LoadingScreen";
import { Scroll } from "../../common/scroll/Scroll";
import { SortBy } from "../../common/SortBy";
import './Players.css';
import { PlayerCard } from "../../common/playerCard/PlayerCard";

export const Players = memo(() => {

    const [pageState, setPageState] = useState({
        apiEndPoint: config.playersEndPoint,
        search: '',
        order: 'asc',
        page: 1
    });

    const { apiEndPoint, search, order, page } = pageState;

    const { data, loading, error } = useFetchPlayers(apiEndPoint, search, order, page);
    const { totalPages, itemsInPage, players } = !!data && data;

    const handlePageClick = ({ selected }) => {
        setPageState({
            ...pageState,
            page: selected + 1
        })
    }

    const setOrder = (event) => {
        setPageState({
            ...pageState,
            order: event.target.defaultValue
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
                        <>
                            <SortBy setOrder={setOrder} itemsInPage={itemsInPage} />
                            <Scroll>
                                {
                                    loading
                                        ?
                                        (
                                            < LoadingScreen />
                                        )
                                        :
                                        (
                                            <div
                                                className='card-columns row justify-content-around
                                                animate__animated animate__fadeIn'
                                            >
                                                {
                                                    players.map(player => (
                                                        <PlayerCard
                                                            key={player.id}
                                                            player={player}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        )
                                }
                            </Scroll>
                        </>
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
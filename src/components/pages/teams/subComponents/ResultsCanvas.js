import { Scroll } from "../../../common/scroll/Scroll";
import { ErrorScreen } from "../../../common/errorScreen/ErrorScreen";
import { LoadingScreen } from "../../../common/loadingScreen/LoadingScreen";


export const ResultsCanvas = ({ players, pageState, loading, error }) => {
    return (
        <div className='col-6 ms-3 mt-3'>
            <div className='d-flex align-middle'>
                <h4 className='m-1'>Results</h4>
                <div
                    className='text-success ms-auto me-1'
                    style={{ fontSize: 'xx-small' }}
                >
                    {
                        !!players.length &&
                        <div>Showing <b>{players.length}</b> players <br /> for '{pageState.search}'</div>
                    }
                </div>
            </div>
            <hr />
            <Scroll >
                {
                    error
                        ?
                        (
                            <ErrorScreen />
                        )
                        :
                        (
                            loading
                                ?
                                (
                                    < LoadingScreen />
                                )
                                :
                                (
                                    !!!(players.length)
                                        ?
                                        (
                                            <div
                                                className='alert alert-info m-3 animate__animated animate__fade'
                                            >
                                                {(pageState.search === '012345') ? 'No search yet' : `No results for '${pageState.search}'`}
                                            </div>
                                        )
                                        :
                                        (
                                            players.map(player => (
                                                <div
                                                    key={player.id}
                                                    className="alert alert-dark m-3 animate__animated animate__fadeInUp"
                                                >
                                                    {player.name}
                                                </div>
                                            ))
                                        )

                                )
                        )
                }

            </Scroll>
        </div>
    );
}
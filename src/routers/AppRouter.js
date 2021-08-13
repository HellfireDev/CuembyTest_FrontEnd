import { Navbar } from '../components/common/navbar/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Players } from '../components/pages/players/Players';
import { Teams } from '../components/pages/teams/Teams';
import { PlayerDetails } from '../components/common/playerDetails/PlayerDetails';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />

                <Switch>
                    <Route exact path='/players' component={Players} />
                    <Route exact path='/players/:playerId' component={PlayerDetails} />
                    <Route exact path='/teams' component={Teams} />

                    <Redirect to='/players' />
                </Switch>

            </>
        </Router >
    );
}
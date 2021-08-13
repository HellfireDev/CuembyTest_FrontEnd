import { memo } from "react";
import { useLocation } from "react-router-dom";
import './PlayerDetails.css';

export const PlayerDetails = memo(({ history }) => {

    const location = useLocation();
    const { player } = location.state;
    const { name, position, team, nation } = player;

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <div className='row mt-5 player-details'>
            <div className='col-5' align='center'>
                <img
                    src={'../assets/football-player.png'}
                    alt='player'
                    className='img-thumbnail player-thumbnail m-3 
                    animate__animated animate__lightSpeedInLeft animate__fast'
                />
            </div>

            <div className='col-6'>
                <h2 className='p-3 m-3'>{name}</h2>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-info m-1'>
                        <img src={'../assets/tactics.png'} alt='position' className='me-3 position-icon' />
                        <b className='me-3'>Position:</b>{position}
                    </li>
                    <li className='list-group-item bg-warning m-1'>
                        <img src={'../assets/team.png'} alt='team' className='me-3 team-icon' />
                        <b className='me-3'>Team:</b>{team}
                    </li>
                    <li className='list-group-item bg-success m-1'>
                        <img src={'../assets/flag.png'} alt='nation' className='me-3 nation-icon' />
                        <b className='me-3'>Nation:</b>{nation}
                    </li>

                </ul>

                <button
                    className='btn btn-outline-info mt-3'
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>

        </div>
    );
});
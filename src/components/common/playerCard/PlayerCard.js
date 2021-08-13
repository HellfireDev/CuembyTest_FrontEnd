import { memo } from 'react';
import { Link } from 'react-router-dom';
import './PlayerCard.css';

export const PlayerCard = memo(({ player }) => {

    return (
        <div className='card m-3 bg-info player-card'>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src='./assets/football-player.png'
                        className='card-img p-4 m-3 bg-light player-pic'
                        alt='player' />
                </div>
                <div className='col-md-8 p-2'>
                    <div className='card-body'>
                        <h3 className='card-title'>{player.name}</h3>
                        <p className='card-text fs-2 text-secondary'>{player.position}</p>
                        <Link to={{
                            pathname: `./players/${player.id}`,
                            state: {
                                player
                            }
                        }}
                        >
                            Details...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
});
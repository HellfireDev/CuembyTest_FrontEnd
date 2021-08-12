
export const PlayerCard = ({ player }) => {

    return (
        <div className='card ms-3 m-3 bg-info' style={{ maxWidth: '30rem' }}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src='./assets/football-player.png' className='card-img p-4 m-2 bg-light' alt='player' />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'>{player.name}</h3>
                        <p className='card-text fs-2 text-secondary'>{player.position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
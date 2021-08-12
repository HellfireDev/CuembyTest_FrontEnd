import './ErrorScreen.css';

export const ErrorScreen = () => {
    return (
        <div className='d-flex w-100 justify-content-center'>
            <img className='error-image mt-5' src='./assets/something-went-wrong.png' alt='error' />
        </div>
    );
}
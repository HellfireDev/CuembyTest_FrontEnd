
export const Scroll = props => {
    return (
        <div
            style={{
                overflowY: 'scroll',
                border: '1px solid purple',
                height: '75vh',
                scrollbarWidth: 'thin'
            }}>
            {props.children}
        </div>
    );
}
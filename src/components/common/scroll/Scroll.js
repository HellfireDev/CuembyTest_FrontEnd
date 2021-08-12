
export const Scroll = props => {
    return (
        <div
            style={{
                overflowY: 'scroll',
                border: '1px solid black',
                height: '70vh',
                scrollbarWidth: 'thin'
            }}>
            {props.children}
        </div>
    );
}
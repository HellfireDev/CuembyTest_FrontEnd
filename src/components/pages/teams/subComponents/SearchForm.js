
export const SearchForm = ({ handleSubmit, searchText, handleInputChange }) => {
    return (
        <div className='col-4 ms-3 mt-3'>
            <h4 className='m-1'>Search</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Write a team name...'
                    className='form-control m-1'
                    name='searchText'
                    autoComplete='off'
                    value={searchText}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className='btn m-1 btn-outline-primary w-100'
                >
                    Go!
                </button>
            </form>
        </div>
    )
}
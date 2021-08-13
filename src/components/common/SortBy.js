import { memo } from "react";
import PropTypes from 'prop-types';

export const SortBy = memo(({ setOrder, itemsInPage }) => {

    return (
        <div className='d-flex w-80 align-items-center align-content-start bg-secondary' onChange={setOrder}>
            <div className='text-center fw-bold ms-1 me-1'>Sort by:</div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="asc" defaultChecked />
                <label className="form-check-label" style={{ fontSize: 'small' }} htmlFor="inlineRadio1">Ascending</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="desc" />
                <label className="form-check-label" style={{ fontSize: 'small' }} htmlFor="inlineRadio2">Descending</label>
            </div>
            <div className='text-white-50 ms-auto me-1' style={{ fontSize: 'xx-small' }}>Showing <b>{itemsInPage}</b> records</div>
            <hr />
        </div>
    );
});

SortBy.propTypes = {
    setOrder: PropTypes.func.isRequired,
    itemsInPage: PropTypes.number
}
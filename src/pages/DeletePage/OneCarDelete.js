import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeCarFromAPI } from '../../redux/reducers/cars';
import { toast } from 'react-toastify';
import './delete.css';

const OneCarDelete = ({
  id, carModel, carPhoto 
}) => {
  const dispatch = useDispatch();

  const carRemove = () => {
    dispatch(removeCarFromAPI(id));
    toast.success('Car deleted successfully');
  };

  return (
    <section className="delete-container" id={id}>
      <div className="car-delete-photo">
      <img alt="Car" src={carPhoto} />
      </div>
      <div className="delete-name">
        <h2 className="car-delete-name">{carModel}</h2>
      </div>
      <div className="car-btn">
        
          <button type="button" onClick={carRemove} className="delete-button">
            Delete
          </button>
        
      </div>
    </section>
  );
}
OneCarDelete.propTypes = {
  id: PropTypes.number.isRequired,
  carModel: PropTypes.string.isRequired,
  carPhoto: PropTypes.string.isRequired,
  car: PropTypes.objectOf.isRequired,
}

export default OneCarDelete;

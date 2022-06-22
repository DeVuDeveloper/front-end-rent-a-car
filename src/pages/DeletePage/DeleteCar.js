import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';
import { removeCarFromAPI } from '../../redux/reducers/cars';
import './delete.css';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeCarFromAPI(id));
    window.location.reload();
  };

  return (
    <section className="Delete-page">
      <Hamburger />
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="delete-container">
        {cars.map((car) => (
          <div key={car.id} className="contain">
            <img className="img" src={car.carImg} alt="delete" />
            <div className="model">{car.carModel}</div>
            <button className="delete-btn" onClick={() => handleDelete(car.id)} type="button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeleteCar;

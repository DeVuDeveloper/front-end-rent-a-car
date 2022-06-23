import React from 'react';
import { useSelector } from 'react-redux';
import OneCarDelete from './OneCarDelete';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';

const DeleteCar = () => {
  const carsArr = useSelector((state) => state.cars);
  return (
    <section className="delete-car-wrapper">
      <Hamburger pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="car-loop">
        {carsArr.map((car) => (
          <OneCarDelete
            car={car}
            key={car.id}
            carPhoto={car.carImg}
            carModel={car.carModel}
            id={car.id}
          />
        ))}
      </div>
    </section>
  );
};
export default DeleteCar;


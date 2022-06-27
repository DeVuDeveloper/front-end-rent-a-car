import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleCar from './SingleCar';
import Hamburger from '../components/navigation/Hamburger';
import Sidebar from '../components/navigation/Sidebar';
import './home.css';

const Cars = () => {
  const carsArr = useSelector((state) => state.cars);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1240, min: 765 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="car-container">
      <Hamburger pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="one-car-container">
        <header className="header-carousel">
          <h1>This is Our Models for Rent</h1>
          <h4>Please Select One Model</h4>
        </header>

        <Carousel
          className="carousel"
          responsive={responsive}
          infinite={true}
          swipeable={false}
          autoPlaySpeed={100}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
        >
          {carsArr.map((car) => (
            <SingleCar
              key={car.id}
              carModel={car.carModel}
              carImg={car.carImg}
              carDescription={car.carDescription}
              id={car.id}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default Cars;

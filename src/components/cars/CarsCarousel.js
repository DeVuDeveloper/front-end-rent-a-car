import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paginate from './Paginate';
import insta from '../../assets/images/insta-icon-home.png';
import twitter from '../../assets/images/twitter-icon-home.png';
import facebook from '../../assets/images/fb-icon-home.png';

const social = [
  { icon: facebook },
  { icon: twitter },
  { icon: insta },
];

const CarsCarousel = () => {
  const cars = useSelector((state) => state.cars);
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 3;
  const pageVisited = pageNumber * carsPerPage;
  const displayCars = cars.slice(pageVisited, pageVisited + carsPerPage);
  const pageCount = Math.ceil(cars.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex flex-col gap-4 mt-16 lg:flex-row">
      {displayCars.map((item) => (
        <div className="flex flex-col items-center w-80" key={item.id}>
          <Link to={`/CarDetails/${item.id}`}>
            <img src={item.carImg} alt="car" className="car rounded-full w-60 h-60 m-auto blob" />
            <h2 className="text-center">{item.carModel}</h2>
            <hr className="border-t-2 border-dashed border-gray-100 w-32 mt-4 m-auto" />
            <p className="text-gray-400 text-center font-semibold mt-4">
              {item.carDescription}
            </p>
          </Link>
          <div className="flex gap-4 mt-2">
            {social.map((item) => (
              <a href="/" key={item.icon}><img src={item.icon} alt="social" className="w-8" /></a>
            ))}
          </div>
        </div>
      ))}
      <Paginate pageCount={pageCount} changePage={changePage} />
    </div>
  );
};

export default CarsCarousel;

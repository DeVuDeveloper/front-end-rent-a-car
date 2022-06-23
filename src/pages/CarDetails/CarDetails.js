import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { RiArrowRightSFill } from 'react-icons/ri';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { carId } from '../../redux/reducers/reservations/carId';
import style from './Detail.module.scss';

const CarDetails = () => {
  const { Id } = useParams();
  const [car, setCar] = useState({});
  const fetchCar = async () => {
    const res = await fetch(`https://final-capstone-back.herokuapp.com/api/v1/cars/${Id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const data = await res.json();
    setCar(data);
  };
  useEffect(() => {
    fetchCar();
  }, []);

  const dispatch = useDispatch();

  const setCarId = () => {
    dispatch(carId(car.id));
  };

  return (
    <section className={style.show_container}>
      <div className={style.show_img}>
        <div className={style.img_div}>
          <img alt="Car" src={car.photo} />
        </div>
      </div>

      <div className={style.show_content}>
        <div className={style.show_header}>
          <h2>{car.car_model}</h2>
          <p>-$200 deposit upon any Rental Purchase!</p>
        </div>

        <div className={style.show_details}>
          <div className={style.car_details}>
            <p className={style.details}>{car.description}</p>
          </div>
          <div className={style.car_detail}>
            <p className={style.details}>Rent daily cost</p>
            <p className={style.details}>
              $
              {
                car.price_per_day
                }
            </p>
          </div>
          <div className={style.car_details}>
            <p className={style.details}>Car type</p>
            <p className={style.details}>{car.car_type}</p>
          </div>
          <div className={style.car_detail}>
            <p className={style.details}>Transmission</p>
            <p className={style.details}>{car.transmission}</p>
          </div>
          <div className={style.show_discount}>
            <p>
              <span className={style.dis_amt}>
                {car.price_per_day / 10}
                % APR
              </span>
              <span className={style.dis_text}>representative</span>
            </p>
          </div>
        </div>

        <div className={style.more_cars}>
          <NavLink
            to={{
              pathname: '/home',
            }}
            className={style.d_flex}
          >
            <span className={style.discover}>DISCOVER MORE CARS</span>
            <RiArrowRightSFill className={style.success} style={{ fontSize: 40 }} />
          </NavLink>
        </div>

        <NavLink
          to={{
            pathname: `/add_reservations/${car.id}`,
          }}
          className={style.btn_container}
        >
          <button
            type="button"
            className={style.btn}
            onClick={
                 () => setCarId(car.id)
                }
          >
            <span>Reserve</span>
            {' '}
            <HiChevronDoubleRight style={{ fontSize: 30 }} />
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default CarDetails;

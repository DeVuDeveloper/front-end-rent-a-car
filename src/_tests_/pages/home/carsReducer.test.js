import carsReducer from '../../../redux/reducers/cars';

test('if load data to state', () => {
  const previousState = [];
  const mock = [
    {
      id: 1,
      carModel: 'FormData',
      carDescription: 'some-text',
      carType: 'Middle',
      carImg: 'car.jpg',
      carTransmission: 'auto',
      rentPrice: 54,
    },
  ];
  expect(
    carsReducer(previousState, {
      type: 'carStore/cars/GET_CARS',
      payload: mock,
    }),
  ).toEqual(
    [
      {
        id: 1,
        carModel: 'FormData',
        carDescription: 'some-text',
        carType: 'Middle',
        carImg: 'car.jpg',
        carTransmission: 'auto',
        rentPrice: 54,
      },
    ],
  );
});

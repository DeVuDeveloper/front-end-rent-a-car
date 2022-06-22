import reservationsReducer from '../../../redux/reducers/reservations/reservations';

test('if load data to state', () => {
  const previousState = [];
  const mock = [
    {
      user_id: 1,
      car_id: 1,
      pick_up_day: Date.today,
      return_day: '2022-08-06',
      pick_up_city: 'Lagos',
      return_city: 'Abuja',
    },
  ];
  expect(
    reservationsReducer(previousState, {
      type: 'reservations/GET_RESERVATIONS',
      payload: mock,
    }),
  ).toEqual(
    [
      {
        user_id: 1,
        car_id: 1,
        pick_up_day: Date.today,
        return_day: '2022-08-06',
        pick_up_city: 'Lagos',
        return_city: 'Abuja',
      },
    ],
  );
});

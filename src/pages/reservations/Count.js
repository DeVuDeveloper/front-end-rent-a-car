const DaysOfRental = (PickUpDay, ReturnDay) => {
  let count = 0;
  const date1 = new Date(PickUpDay);
  const date2 = new Date(ReturnDay);

  const dayDifference = Math.ceil(
    (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24),
  );
  if (dayDifference === 0) {
    count += dayDifference + 1;
  } else {
    count += dayDifference;
  }
  return count;
};

export default DaysOfRental;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCarsFromAPI } from './redux/reducers/cars';
import Splash from './pages/splashcreen/SplashScreen';
import Home from './pages/Home';
import Reserve from './pages/reservations/Reserve';
import AddReservation from './pages/reservations/AddReservation';
import Reservations from './pages/reservations/Reservations';
import AddCar from './components/cars/AddCar';
import DeleteCar from './pages/DeletePage/DeleteCar';
import withAuth from './components/auth/withAuth';
import CarInfo from './pages/CarDetails/CarInfo';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsFromAPI());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/home" component={withAuth(Home)} />
          <Route path="/reserve" component={withAuth(Reserve)} />
          <Route path="/add_reservations" component={withAuth(AddReservation)} />
          <Route path="/reservations" component={withAuth(Reservations)} />
          <Route path="/add_car" component={withAuth(AddCar)} />
          <Route path="/delete" component={withAuth(DeleteCar)} />
          <Route path="/CarDetails/:Id" component={withAuth(CarInfo)} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;

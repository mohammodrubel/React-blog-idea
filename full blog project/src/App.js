import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import BookingInfo from './Pages/BookingInfo/BookingInfo';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NOtFound/NotFound';
import Blog from './Pages/Blog/Blog';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
        <AuthProvider> 
        
        <BrowserRouter>
        <Header></Header>
            <Switch>


                <Route exact path="/">
                    <Home></Home>
                </Route>

                <Route exact path="/home">
                    <Home></Home>
                </Route>


                <PrivateRoute exact path="/service/:information">
                    <BookingInfo></BookingInfo>
                </PrivateRoute>

                <PrivateRoute exact path="/blog">
                    <Blog></Blog>
                </PrivateRoute>

                <Route exact path="/login">
                    <Login></Login>
                </Route>

                <Route exact path="*">
                    <NotFound></NotFound>
                </Route>

                

            </Switch>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;

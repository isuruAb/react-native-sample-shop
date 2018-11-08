import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Single from './components/Single';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NewUser from './components/NewUser';
import Signup from './components/Signup';
import Home from './components/Home';

const Navigation = createStackNavigator({
    HomeScreen: { screen: Home },
    NewUserScreen: { screen: NewUser },
    SignupScreen: {screen: Signup},
    DashboardScreen: { screen: Dashboard },
    SingleScreen: { screen: Single },
    CartScreen: { screen: Cart },
    CheckoutScreen: { screen: Checkout },
    LoginScreen: { screen: Login },

});

export default Navigation;
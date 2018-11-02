import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Single from './components/Single';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NewUser from './components/NewUser';

const Navigation = createStackNavigator({

    DashboardScreen: { screen: Dashboard },
    SingleScreen: { screen: Single },
    CartScreen: { screen: Cart },
    CheckoutScreen: { screen: Checkout },
    NewUserScreen: { screen: NewUser },
    LoginScreen: { screen: Login },
});

export default Navigation;
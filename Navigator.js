import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Single from './components/Single';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const Navigation = createStackNavigator({
    LoginScreen: { screen: Login },
    DashboardScreen: { screen: Dashboard },
    SingleScreen: { screen: Single },
    CartScreen: { screen: Cart },
    CheckoutScreen: { screen: Checkout }
});

export default Navigation;
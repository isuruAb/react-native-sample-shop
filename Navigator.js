import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Single from './components/Single';

const Navigation = createStackNavigator({
    LoginScreen: { screen: Login },
    DashboardScreen: { screen: Dashboard },
    SingleScreen: { screen: Single }

});

export default Navigation;
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Navigation = StackNavigator({
    LoginScreen: { screen: Login },
    DashboardScreen: { screen: Dashboard },
});

export default Navigation;
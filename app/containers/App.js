import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../pages/Home';
import Community from '../pages/Community';
import Activity from '../pages/Activity';
import Mine from '../pages/Mine';
import OneActivoty from '../pages/OneActivity';
import OneCommunity from '../pages/OneCommunity';
import OneUser from '../pages/OneUser';

const TabContainer = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '首页',
            },
        },
        Community: {
            screen: Community,
            navigationOptions: {
                tabBarLabel: '组织',
            },
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarLabel: '活动',
            },
        },
        Mine: {
            screen: Mine,
            navigationOptions: {
                tabBarLabel: '我的',
            },
        },
    },
    {
        initialRouteName: 'Mine',
        lazy: true,
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#91B1C2',
            inactiveTintColor: '#444444',
            showIcon: true,
            style: {
                backgroundColor: '#fff',
                elevation: 0,//Android
                shadowOpacity: 0,//iOS
            },
            indicatorStyle: {
                opacity: 0,
            },
            tabStyle: {
                padding: 0,
            },
            labelStyle: {
                fontSize: 10
            }
        }
    }
);


const App = StackNavigator(
    {   
        OneUser:{
            screen:OneUser,
        },
        OneCommunity:{
            screen:OneCommunity,
        },
        OneActivoty:{
            screen:OneActivoty,
        },
        Main: {
            screen: TabContainer,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 18,
                alignSelf: 'center'
            },
            headerTintColor: '#fff'
        }
    }
);
const prevGetStateForAction = App.router.getStateForAction;
App.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    if (state && action.type === 'BcakToCurrentScreen') {
        function findDateInArr(arr, propertyName, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][propertyName] == value) {
                    return i;
                }
            }
            return -1;
        }
        var i = findDateInArr(state.routes, 'routeName', action.routeName);
        if (i != -1) {
            var routes = state.routes.slice(0, i + 1);
        }
        return {
            ...state,
            routes,
            index: routes.length - 1,
        }
    }
    return prevGetStateForAction(action, state);
};

export default App;
import *  as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
const Stack = createStackNavigator()

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName= "Splash"
            screenOptions = {{
                headerShown: false,
                animationEnabled: true,
            }}>
                <Stack.Screen name='Splash' component = {Splash}/>
                <Stack.Screen name="Login" component ={Login}/>
                <Stack.Screen name="Home" component= {Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;
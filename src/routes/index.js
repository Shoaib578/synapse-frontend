import React from 'react'
import{View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/splash';
import GetStart from '../screens/auth/getstart';
import Signup from '../screens/auth/signup';
import Signin from '../screens/auth/signin';
import Home from '../screens/main/home';


const Stack = createStackNavigator()
export default class Routes extends React.Component{
    authStack = ()=>{
        return <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
            <Stack.Screen name='getstart' options={{headerShown:false,}} component={GetStart}/>
            <Stack.Screen name='signup' options={{headerTitle:"",headerTintColor:"#C900FF",headerTransparent:true}} component={Signup}/>
            <Stack.Screen name='signin' options={{headerTitle:"",headerTintColor:"#C900FF",headerTransparent:true}} component={Signin}/>

        </Stack.Navigator>
    }
    render(){
        return <NavigationContainer >
        <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:'horizontal', cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,}}>
          <Stack.Screen name="splash" component={Splash} options={{ headerShown:false }} />

            <Stack.Screen name='auth' options={{headerShown:false}} component={this.authStack}/>
            <Stack.Screen name='home' options={{headerStyle:{backgroundColor:'#21004B'},headerTintColor:"white"}} component={Home}/>

        </Stack.Navigator>
      </NavigationContainer>
    }
}
import React from 'react'
import{View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import GetStart from '../screens/auth/getstart';
import Signup from '../screens/auth/signup';
import Signin from '../screens/auth/signin';


const Stack = createNativeStackNavigator()
export default class Routes extends React.Component{
    authStack = ()=>{
        return <Stack.Navigator>
            <Stack.Screen name='getstart' options={{headerShown:false}} component={GetStart}/>
            <Stack.Screen name='signup' options={{headerShown:false}} component={Signup}/>
            <Stack.Screen name='signin' options={{headerShown:false}} component={Signin}/>

        </Stack.Navigator>
    }
    render(){
        return <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="splash" component={Splash} options={{ headerShown:false }} />

            <Stack.Screen name='auth' options={{headerShown:false}} component={this.authStack}/>

        </Stack.Navigator>
      </NavigationContainer>
    }
}
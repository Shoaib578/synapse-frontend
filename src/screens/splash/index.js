import React from 'react'
import {View,Text,Image} from 'react-native'
import splash_styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component{

  
    isLoggedIn = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        console.log(parse)
        if(parse != null){
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'home' }]
            });
        }else{
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'auth', screen: 'getstart' }]
            });
        }
        
    }
    componentDidMount(){
        setTimeout(()=>{
            this.isLoggedIn()

        },500)
    }
    render(){
        return <View style={splash_styles.container}>
            <Image resizeMode='cover' source={require('../../assets/Synapse.png')}/>
        </View>
    }
}
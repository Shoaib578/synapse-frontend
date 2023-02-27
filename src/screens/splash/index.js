import React from 'react'
import {View,Text,Image} from 'react-native'
import splash_styles from './style'

export default class Splash extends React.Component{

  
    isLoggedIn = ()=>{
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'auth', screen: 'getstart' }]
        });
    }
    componentDidMount(){
        this.isLoggedIn()
    }
    render(){
        return <View style={splash_styles.container}>
            <Image resizeMode='cover' source={require('../../assets/Synapse.png')}/>
        </View>
    }
}
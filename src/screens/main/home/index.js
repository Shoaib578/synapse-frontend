import React from 'react'
import {View,Text, Image,TouchableOpacity,Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import home_styles from './styles';
import CatImage from '../../../assets/cat.png'

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo:''
        }
        this.getUserDetails()
    }
    

    getUserDetails = async()=>{
        const user = await AsyncStorage.getItem('user')
        const parse = JSON.parse(user)
        this.setState({userInfo:parse})
        console.log(parse)
    }

    Signout = async()=>{
            try{
                await GoogleSignin.signOut()
               
               
                 await AsyncStorage.removeItem('user')
                 this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'auth', screen: 'getstart' }]
                });
                console.log('User sign-out successfully!');
            }catch(err){
                Alert.alert(err)
            }
           
        
    }
    render(){
        return(
            <View style={home_styles.container}>
                <Image source={this.state.userInfo != ''?{uri:this.state.userInfo.photo}:require('../../../assets/cat.png')} style={home_styles.avatar_image}/>

                <Text style={{fontSize:15,color:"white",marginTop:20}}>{this.state.userInfo != ''?this.state.userInfo.name:'loading....'}</Text>
                <Text style={{fontSize:12,color:"white",marginTop:5}}>{this.state.userInfo != ''?this.state.userInfo.email:'loading....'}</Text>

                <TouchableOpacity onPress={this.Signout}  style={home_styles.signout_button}>
                 <Text style={home_styles.signout_button_text}>SIGN OUT</Text>
             </TouchableOpacity>

            </View>
        )
    }
}
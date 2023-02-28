import React from 'react'
import {View,Text, TextInput,TouchableOpacity,Image,ScrollView,Dimensions,Alert} from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
    webClientId: '1060778654030-pegmbg2ddvhj1cburnaacdgsbks2fo67.apps.googleusercontent.com',
  });
  
import signup_styles from './styles'
const height = Dimensions.get('window').height

export default class Signup extends React.Component{
    signup_with_google = async()=>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            await AsyncStorage.setItem('user',JSON.stringify(userInfo.user))
            this.props.navigation.reset({
              index: 0,
              routes: [{ name: 'home' }]
          });
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
                console.log(error.message)
              // some other error happened
            }
          }
    }
    render(){
        return <View style={signup_styles.container}>
            <ScrollView style={{width:'100%'}}>

            <Text style={{fontSize:20,color:"white",fontWeight:"bold",marginTop:height/8,textAlign:"center"}}>Create Account</Text>
            <TextInput placeholder='Email' placeholderTextColor="gray" style={signup_styles.textInput}/>

            <TextInput placeholder='Password' placeholderTextColor="gray" style={signup_styles.textInput}/>
            <TextInput placeholder='Confirm Password' placeholderTextColor="gray" style={signup_styles.textInput}/>


            <TouchableOpacity onPress={this.signup_with_google} style={{alignSelf:"center",marginTop:height/12}}>
             <Image source={require("../../../assets/google_big_icon.png")}/>

            </TouchableOpacity>
            <TouchableOpacity   style={signup_styles.signup_button}>
                 <Text style={signup_styles.signup_button_text}>SIGN UP</Text>
             </TouchableOpacity>

             <View style={signup_styles.already_have_account}>
                <Text style={{color:"#F9B4F6",fontSize:12}}>Already have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("signin")} style={{left:3}}>

                <Text style={{color:"#C900FF",fontSize:12}}>Sign in</Text>
                </TouchableOpacity>


            </View>

             </ScrollView>


        </View>
    }
}
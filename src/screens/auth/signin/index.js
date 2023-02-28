import React from 'react'
import {View,Text,ScrollView,TouchableOpacity,Image,TextInput,Dimensions, Alert} from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: '1060778654030-pegmbg2ddvhj1cburnaacdgsbks2fo67.apps.googleusercontent.com',
  });
  
import signin_styles from './styles'
const height = Dimensions.get('window').height

export default class Signin extends React.Component{
    signin_with_google = async()=>{
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
           Alert.alert(userInfo.user.name)
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
        return<View style={signin_styles.container}>
        <ScrollView style={{width:'100%'}}>

        <Text style={{fontSize:20,color:"white",fontWeight:"bold",marginTop:height/8,textAlign:"center"}}>Login to your accountt</Text>
        <TextInput placeholder='Email' placeholderTextColor="gray" style={signin_styles.textInput}/>

        <TextInput placeholder='Password' placeholderTextColor="gray" style={signin_styles.textInput}/>
     


        <TouchableOpacity onPress={this.signin_with_google} style={{alignSelf:"center",marginTop:height/7}}>
         <Image source={require("../../../assets/google_big_icon.png")}/>

        </TouchableOpacity>
        <TouchableOpacity  style={signin_styles.signin_button}>
             <Text style={signin_styles.signin_button_text}>SIGN IN</Text>
         </TouchableOpacity>

         <View style={signin_styles.dont_have_account}>
                <Text style={{color:"#F9B4F6",fontSize:12}}>Dont have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("signup")} style={{left:3}}>

                <Text style={{color:"#C900FF",fontSize:12}}>Sign up</Text>
                </TouchableOpacity>


            </View>
         </ScrollView>


    </View>
    }
}
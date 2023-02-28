import React from 'react'
import {View,Text,Image,TouchableOpacity,Dimensions,Alert} from 'react-native'
import getstart_styles from './style'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
    webClientId: '1060778654030-pegmbg2ddvhj1cburnaacdgsbks2fo67.apps.googleusercontent.com',
  });
  

const height = Dimensions.get('window').height
export default class GetStart extends React.Component{

    continue_with_google = async()=>{
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
        return <View style={getstart_styles.container}>
            <Image source={require('../../../assets/Synapse.png')}  style={{marginTop:height/8}}/>

            <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"Corbel",color:"white",marginTop:20}}>The future of nightlife</Text>
            <Text style={{fontSize:15,fontWeight:"bold",fontFamily:"Corbel",color:"white"}}>begins here</Text>


            <TouchableOpacity onPress={this.continue_with_google} style={getstart_styles.continue_with_google_button}>
                <Image source={require('../../../assets/google.png')} />
            <Text style={getstart_styles.continue_with_google_button_text}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("signup")} style={getstart_styles.continue_with_email_button}>
             
            <Text style={getstart_styles.continue_with_email_button_text}>Continue with email</Text>
            </TouchableOpacity>



            <View style={getstart_styles.already_have_account}>
                <Text style={{color:"#F9B4F6",fontSize:12}}>Already have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("signin")} style={{left:3}}>

                <Text style={{color:"#C900FF",fontSize:12}}>Sign in</Text>
                </TouchableOpacity>


            </View>



            <View style={getstart_styles.policy_text_container}>
                <Text style={{color:"#FFFFFF",fontSize:9}}>By continuing you indicate you've read and agree to our </Text>
                <TouchableOpacity>
                    <Text style={{color:"#FFFFFF",fontSize:9,textDecorationLine:"underline"}}>Terms </Text>
                </TouchableOpacity>
                <Text style={{color:"#FFFFFF",fontSize:9,}}> & </Text>
                <TouchableOpacity>
                    <Text style={{color:"#FFFFFF",fontSize:9,textDecorationLine:"underline"}}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>


        </View>
    }
}
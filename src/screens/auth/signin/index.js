import React from 'react'
import {View,Text,ScrollView,TouchableOpacity,Image,TextInput} from 'react-native'
import signin_styles from './styles'
export default class Signin extends React.Component{
    render(){
        return<View style={signin_styles.container}>
        <ScrollView style={{width:'100%'}}>

        <Text style={{fontSize:20,color:"white",fontWeight:"bold",marginTop:"20%",textAlign:"center"}}>Login to your accountt</Text>
        <TextInput placeholder='Email' placeholderTextColor="gray" style={signin_styles.textInput}/>

        <TextInput placeholder='Password' placeholderTextColor="gray" style={signin_styles.textInput}/>
     


        <TouchableOpacity style={{alignSelf:"center",marginTop:70}}>
         <Image source={require("../../../assets/google_big_icon.png")}/>

        </TouchableOpacity>
        <TouchableOpacity  style={signin_styles.signup_button}>
             <Text style={signin_styles.signup_button_text}>SIGN IN</Text>
         </TouchableOpacity>

         <View style={signin_styles.dont_have_account}>
                <Text style={{color:"#F9B4F6"}}>Dont have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("signup")} style={{left:3}}>

                <Text style={{color:"#C900FF"}}>Sign up</Text>
                </TouchableOpacity>


            </View>
         </ScrollView>


    </View>
    }
}
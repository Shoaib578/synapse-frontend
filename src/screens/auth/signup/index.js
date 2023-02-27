import React from 'react'
import {View,Text, TextInput,TouchableOpacity,Image,ScrollView} from 'react-native'

import signup_styles from './styles'

export default class Signup extends React.Component{
    render(){
        return <View style={signup_styles.container}>
            <ScrollView style={{width:'100%'}}>

            <Text style={{fontSize:20,color:"white",fontWeight:"bold",marginTop:"20%",textAlign:"center"}}>Create Account</Text>
            <TextInput placeholder='Email' placeholderTextColor="gray" style={signup_styles.textInput}/>

            <TextInput placeholder='Password' placeholderTextColor="gray" style={signup_styles.textInput}/>
            <TextInput placeholder='Confirm Password' placeholderTextColor="gray" style={signup_styles.textInput}/>


            <TouchableOpacity style={{alignSelf:"center",marginTop:70}}>
             <Image source={require("../../../assets/google_big_icon.png")}/>

            </TouchableOpacity>
            <TouchableOpacity  style={signup_styles.signup_button}>
                 <Text style={signup_styles.signup_button_text}>SIGN UP</Text>
             </TouchableOpacity>

             <View style={signup_styles.already_have_account}>
                <Text style={{color:"#F9B4F6"}}>Already have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("signin")} style={{left:3}}>

                <Text style={{color:"#C900FF"}}>Sign in</Text>
                </TouchableOpacity>


            </View>

             </ScrollView>


        </View>
    }
}
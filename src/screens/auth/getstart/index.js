import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import getstart_styles from './style'

export default class GetStart extends React.Component{

 
    render(){
        return <View style={getstart_styles.container}>
            <Image source={require('../../../assets/Synapse.png')}  style={{marginTop:'25%'}}/>

            <Text style={{fontSize:18,fontWeight:"bold",fontFamily:"Corbel",color:"white",marginTop:30}}>The future of nightlife</Text>
            <Text style={{fontSize:18,fontWeight:"bold",fontFamily:"Corbel",color:"white"}}>begins here</Text>


            <TouchableOpacity style={getstart_styles.continue_with_google_button}>
                <Image source={require('../../../assets/google.png')} />
            <Text style={getstart_styles.continue_with_google_button_text}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("signup")} style={getstart_styles.continue_with_email_button}>
             
            <Text style={getstart_styles.continue_with_email_button_text}>Continue with email</Text>
            </TouchableOpacity>



            <View style={getstart_styles.already_have_account}>
                <Text style={{color:"#F9B4F6"}}>Already have an account?</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("signin")} style={{left:3}}>

                <Text style={{color:"#C900FF"}}>Sign in</Text>
                </TouchableOpacity>


            </View>



            <View style={getstart_styles.policy_text_container}>
                <Text style={{color:"#FFFFFF",fontSize:11}}>By continuing you indicate you've read and agree to our </Text>
                <TouchableOpacity>
                    <Text style={{color:"#FFFFFF",fontSize:11,textDecorationLine:"underline"}}>Terms </Text>
                </TouchableOpacity>
                <Text style={{color:"#FFFFFF",fontSize:11,}}> & </Text>
                <TouchableOpacity>
                    <Text style={{color:"#FFFFFF",fontSize:11,textDecorationLine:"underline"}}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>


        </View>
    }
}
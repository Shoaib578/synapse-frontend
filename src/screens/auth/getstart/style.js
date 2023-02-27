import {StyleSheet} from 'react-native'

 const getstart_styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#21004B"
    },
    continue_with_google_button:{
        width:"85%",
        padding:15,
        borderRadius:30,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:'35%'
        
    },
    continue_with_google_button_text:{
        color:"black",
        fontWeight:"bold",
        left:20
    },
    continue_with_email_button:{
        width:"85%",
        padding:15,
        borderRadius:30,
        backgroundColor:"#C900FF",
        justifyContent:"center",
        alignItems:"center",
       
        marginTop:20
    },
    continue_with_email_button_text:{
        color:"black",
        fontWeight:"bold",
        
    },
    already_have_account:{
        alignSelf:'center',
        flexDirection:"row",
        marginTop:30    
    },
    policy_text_container:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:"17%"
    }
})

export default getstart_styles
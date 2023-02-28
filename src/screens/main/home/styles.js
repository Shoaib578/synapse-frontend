import {StyleSheet} from 'react-native'

const home_styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#21004B"
    },
    avatar_image:{
        width:100,
        height:100,
        borderRadius:100,
        marginTop:20
    },
    signout_button:{
        width:"70%",
        padding:12,
        borderRadius:30,
        backgroundColor:"#C900FF",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:30
    },
    signout_button_text:{
        color:"black",
        fontWeight:"bold",
        fontSize:13
        
    },
})

export default home_styles
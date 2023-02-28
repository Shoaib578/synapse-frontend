import {StyleSheet,Dimensions} from 'react-native'
const height = Dimensions.get('window').height

const signup_styles = StyleSheet.create({
    container:{
        flex: 1,
        
        alignItems: 'center',
        backgroundColor: '#21004B',
    },
    textInput:{
        padding:10,
        borderColor:"#550ead",
        borderWidth:1,
        backgroundColor:"#550ead",
        color:"white",
        borderRadius:5,
        width:"85%",
        marginTop:30,
        alignSelf:"center",
        fontSize:13

    },
    signup_button:{
        width:"70%",
        padding:12,
        borderRadius:30,
        backgroundColor:"#C900FF",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:30
    },
    signup_button_text:{
        color:"black",
        fontWeight:"bold",
        fontSize:13
        
    },
    already_have_account:{
        alignSelf:'center',
        flexDirection:"row",
        marginTop:30 
    }
})

export default signup_styles
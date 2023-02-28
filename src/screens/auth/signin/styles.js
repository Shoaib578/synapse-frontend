import {StyleSheet,Dimensions} from 'react-native'
const height = Dimensions.get('window').height
const signin_styles = StyleSheet.create({
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
        fontSize:12

    },
    signin_button:{
        width:"70%",
        padding:12,
        borderRadius:30,
        backgroundColor:"#C900FF",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:30
    },
    signin_button_text:{
        color:"black",
        fontWeight:"bold",
        fontSize:13

        
    },
    dont_have_account:{
        alignSelf:'center',
        flexDirection:"row",
        marginTop:60    
    }
})

export default signin_styles
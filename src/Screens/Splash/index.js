import React from 'react'
import {View, Text, ActivityIndicator,Image,ImageBackground} from 'react-native'

class Splash extends React.Component{
    render(){
        setTimeout(() => {
            this.props.navigation.replace('Login');
        }, 5000);
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>
              
                <Image 
                style = {{width:80,height:80,resizeMode:'center'}}
                source = {require('../../../src/Assets/notify.png')}
                />

                <Text style={{fontWeight:'bold', fontSize: 40,}}>ようこそ</Text>
                <ActivityIndicator size='large' color='green'/>
          
            </View>
        )
    }
}
export default Splash;
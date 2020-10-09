import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';

class Login extends React.Component {
  state = {
    visible : true,
    ユーザー名: '',
    パスワード: '',
    UsernameDefault: 'a',
    PasswordDefault: 'b',
  };
  lihat = () => {
    this.setState({visible: !this.state.visible})
  }
  Login = () => {
    if (
      this.state.ユーザー名 == this.state.UsernameDefault &&
      this.state.パスワード == this.state.PasswordDefault
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('ユーザー名 dan パスワード anda salah ');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../Assets/gambar/malam.jpg')}>
          <View style={styles.header}>
            <Image
            style = {{}}
            source/>
            <View>
              <Text style={styles.title}>お入りください</Text>
            </View>
            <View style={styles.boxinput}>
              <TextInput
                placeholder="ユーザー名"
                style={styles.input}
                value={this.state.ユーザー名}
                onChangeText={teks => this.setState({ユーザー名: teks})}
              />
            </View>
            <View style = {styles.boxinput}>
                <TextInput
                placeholder = 'パスワード'
                style={styles.input}
                secureTextEntry = {this.state.visible}
                value={this.state.パスワード}
                onChangeText={teks => this.setState ({パスワード : teks})}
                />
            </View>
          </View>
          <View>
            <Text
              style={{color: 'white', fontSize: 15,marginLeft:310,}}
              onPress={() => this.lihat()}>
              lihat
            </Text>
          </View>
          <View style={styles.list}>
            <Button title="リ ス ト" onPress={() => this.Login()} />
          </View>
          <Text>masuk tanpa login guys </Text>
          <View style = {styles.pindah}>
           
          <Button title = 'ホームページを移動する' onPress={() => this.props.navigation.navigate('Home')}/>
           
          
          </View>
      
        </ImageBackground>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    backgroundColor: 'white'
  },
  header: {
    height: '45%',
    width : '100%',
    justifyContent : 'flex-end',
    alignItems:'center',
    // backgroundColor:'red'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white'
  },
  boxinput: {
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:15,
  },
  input :{
      height:50,
      width:'80%',
      backgroundColor:'#999A86',
      borderRadius:15,
      opacity:0.6,
      
  },
  list : {
    height:40,
    marginBottom:40,
   
  

  },
  pindah : {
    flexDirection:'row'
  }
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  ImageBackground
} from 'react-native';

class Home extends React.Component {
  state = {
    data: {},
    input: '',
  };
  addData = () => {
    const data = this.state.input;
    this.state.data.push(data);
    this.setState({data: this.state.data});
    this.setState({input: ''});
  };
  render() {
    return (
      <View style={styles.container}>
    <ImageBackground>
        <View style={styles.header}>
          <Text style={styles.textHeader}> あなたのやることリスト</Text>
        </View>
     
        <View>
          <TextInput
            placeholder="あなたのデータを入れてください"
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
          />
          <Button title="書いてください" onPress={() => this.addData()} />
        </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
 
});
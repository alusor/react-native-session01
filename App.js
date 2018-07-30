import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground, FlatList } from 'react-native';

const datos = [
    {comic: 'comic1'},
    {comic: 'comic2'},
    {comic: 'comic3'},
    {comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},{comic: 'comic3'},

];

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nombre: 'React Native',
    };
    this.clickHandlres = this.cambiarText.bind(this);
  }
  componentDidMount() {

  }
  cambiarText(){
      this.setState({
          nombre: 'React con expo'
      });
  }
  keyExtractor = (item, index) => index;
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.uno}></View>
          <View style={styles.dos}>
            <FlatList
              data={datos}
              renderItem={({item}) => <Titulo texto={item.comic}/>}
              numColumns={2}
              keyExtractor={this.keyExtractor}
            />
          </View>
          <View style={[ styles.tres, { backgroundColor: 'green'} ]}></View>

      </View>
    );
  }

}

const Titulo = (props) => (
    <Text style={{fontSize: 30, padding: 5, flex: 1, backgroundColor: 'gray'}}>{props.texto}</Text>
);

const Contenedor = (props) => (
    <View stype={styles.container}>
        {props.children}
    </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
    content: {
    backgroundColor: 'blue', flex: 1
    },
    uno: {
      height: 30,
      backgroundColor: 'black'
    },
    dos: {
      width: '100%',
        flex: 1,
        backgroundColor: 'red',

    },
    tres: {
        height: 30,
        width: '100%',
    }
});

export default  App;

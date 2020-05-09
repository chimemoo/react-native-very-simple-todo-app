import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
const { Navigation } = require('react-native-navigation');
import Textarea from 'react-native-textarea';
class WriteTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : '',
      subtitle : ''
    }
    this.props = props;
  }

  onChangeTitle = (text) => {
    this.state.title = text;
    console.log(this.state.title)
  }
  
  onChangeSubtitle = (text) => {
    this.state.subtitle = text;
    console.log(this.state.subtitle)
  }

  saveTodo = () => {
    this.props.handler({
      title:this.state.title,
      subtitle:this.state.subtitle
    });
    Navigation.dismissModal(this.props.componentId);
  }
  
  render(){
    return(
        <View style={styles.container}>
            <View style={{flex:20, paddingHorizontal:20, justifyContent:'center'}}>
              <TextInput
                style={styles.titleText}
                placeholder='Title'
                defaultValue={this.state.title}
                onChangeText={this.onChangeTitle}
                />
            </View>
            <View style={{flex:60, paddingHorizontal:20}}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.subtitleText}
              onChangeText={this.onChangeSubtitle}
              defaultValue={this.state.subtitle}
              maxLength={120}
              placeholder={'Write something'}
              underlineColorAndroid={'transparent'}
            />
            </View>
            <View style={{flex:20, justifyContent:'flex-end'}}>
                <TouchableOpacity 
                  style={styles.buttonSave} 
                  onPress = { this.saveTodo }>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
  
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      backgroundColor: '#fff',
      height: 60
    },
    textareaContainer: {
      height: 180,
      backgroundColor: '#fff',
    },
    titleText:{
      color: '#00000d',
      fontSize : 25,
    },
    subtitleText:{
      marginTop:18,
      color: '#00000d',
      fontSize : 20,
    },
    buttonSave:{
      height:60,
      backgroundColor:'#65cf9f',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText:{
      fontSize:20,
      color:'#fff',
      fontWeight:'bold'
    }
  
  });

  export default WriteTodo;
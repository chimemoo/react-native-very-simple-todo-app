import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import Todolist from './Todolist';
const { Navigation } = require('react-native-navigation');


class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
        todo : [
          {
            title: 'Learn React Native',
            subtitle: 'Do something hooks',
            checked:false
          }
        ],
        date : ''
    };
  }

  componentDidMount() {
    var that = this;
    that.setState({
      date: moment().format('MMMM D, Y')
    })
  }

  handler(newTodo) {
    console.log(newTodo.title);
    this.setState({
      todo: [
        ...this.state.todo,newTodo
      ]
    })
  }

  render(){
    return(
        <View style={styles.container}>
        <View style={{flex:80}}>
          <View style={styles.header}>
            <Text style={styles.dateText}>{this.state.date}</Text>
            <Text style={styles.haiText}>Apa yang akan kamu lakukan hari ini?</Text>
          </View>
          <View style={{flex:60}}>
            <ScrollView>
              <Todolist list={this.state.todo}/>
            </ScrollView>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity 
            style = {styles.buttonAdd}
            onPress={() => Navigation.showModal({
                stack: {
                    children: [{
                      component: {
                        name: 'Write',
                        passProps: {
                          handler : this.handler
                        },
                        options: {
                          topBar: {
                            title: {
                              text: 'Write To Do'
                            },
                            
                          }
                        }
                      }
                    }]
                  }
            })}
            >
            <Icon
                name="plus"
                size={30}
                color="#65cf9f"
              />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      backgroundColor: '#65cf9f',
    },
    header:{
      flex:40, 
      backgroundColor: '#65cf9f',
      padding:20
    },
    dateText:{
      color: '#f4f6fa',
      fontSize : 25,
    },
    haiText:{
      marginTop:18,
      color: '#fff',
      fontSize : 40,
      fontWeight: 'bold'
    },
    buttonAdd :{
      height:80,
      width:80,
      borderRadius:50,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      margin:20,
      shadowColor: 'rgba(0,0,0, .9)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1,
    },
    buttonArea:{
      flex:10, 
      justifyContent:'flex-end', 
      alignItems:'flex-end'
    }
  
  });
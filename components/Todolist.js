import React, {useState} from 'react';
import { ListItem, Overlay, Button } from 'react-native-elements';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { disableTodo } from './Database';
var width = Dimensions.get('window').width; 

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            key:null
        }
        this.props = props;
    }

    toggleModal = (key) => {
        this.setState({modalVisible:!this.state.modalVisible, key:key});
    };

    closeModal = () => {
        this.props.disabledTodo(this.state.key);
        console.log(this.state.key);
        this.setState({modalVisible:false});
    }

    render(){
        return(
            <View>
                {
                    this.props.list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.title}
                        subtitle={l.subtitle}
                        bottomDivider
                        style = {styles.list}
                        disabled = {l.checked}
                        disabledStyle = {styles.itemDisabled}
                        onLongPress={() => this.toggleModal(l.id)}
                    />
                    ))
                }
                <Overlay overlayStyle={styles.modal} isVisible={this.state.modalVisible} onBackdropPress={this.toggleModal}>
                    <View>
                        <Text style={styles.modalText}>Apakah kamu sudah menyelesaikan Hal ini?</Text>
                        <Button
                            title="Ya"
                            buttonStyle={{
                                backgroundColor: '#65cf9f'
                            }}
                            onPress={this.closeModal}
                        />
                    </View>
                </Overlay>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    list :{
        paddingHorizontal:20,
        paddingVertical:5
    },
    itemDisabled:{
        backgroundColor:'#ddd'
    },
    modal :{
        width:width-40,
        
    },
    modalText:{
        color: '#888888',
        fontSize : 25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:40
    },
});

export default Todolist;
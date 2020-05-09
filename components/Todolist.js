import React, {useState} from 'react';
import { ListItem, CheckBox } from 'react-native-elements'
import {View, StyleSheet} from 'react-native';


class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.props = props;
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
                    />
                    ))
                }
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    list :{
        paddingHorizontal:20,
        paddingVertical:5
    }
});

export default Todolist;
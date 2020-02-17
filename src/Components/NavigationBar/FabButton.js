import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

export default class FabButton extends Component {
    render() {
        const { name = "book", size = 16, color = 'white', containerStyle, onPress2 } = this.props;
        return (
            <TouchableOpacity style={[styles.containerStyle1, containerStyle]} onPress={onPress2}>
                <Icon name={name} size={size} color={color} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle1: {
        height: 48,
        width: 48,
        backgroundColor: '#FF0034',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    }
})


// {/* <FabButton containerStyle={styles.fabContainerStyle} color='#FF0034' /> */}

// fabContainerStyle: {
//     backgroundColor: 'transparent',
//     borderWidth:1,
//     borderColor:'#FF0034'
// }
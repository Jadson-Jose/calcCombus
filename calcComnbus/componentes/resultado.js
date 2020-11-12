import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default props => {
    return (
        <View style={estilos.bloco}>
            <Text>Melhor combustivel:</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom: 10
    },
});
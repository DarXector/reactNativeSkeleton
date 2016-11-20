import React from 'react';
import { Text, View } from 'react-native';

const Header = ( { headerText } ) =>
{
    const { textStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle } refreshing>
            <Text style={ textStyle }>{ headerText }</Text>
        </View>
    );
};

const styles =
{
    viewStyle:
    {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        elevation: 4,
        position: 'relative'
    },
    textStyle:
    {
        fontSize: 20
    }
};


export { Header };
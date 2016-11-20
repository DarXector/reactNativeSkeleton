import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from '../common';

const AlbumDetail = ( { album } ) =>
{
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnail, headerTextContent, thumbnailContainer, headerTextTitle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={ thumbnailContainer }>
                    <Image style={ thumbnail }
                           source={ { uri: thumbnail_image } } />
                </View>
                <View style={ headerTextContent }>
                    <Text style={ headerTextTitle }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={ imageStyle } source={ { uri:image } } />
            </CardSection>

            <CardSection>
                <Button onPress={ () => { Linking.openURL(url) } }>BUY NOW</Button>
            </CardSection>
        </Card>
    );
};

var styles =
{
    headerTextContent:
    {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextTitle:
    {
        fontSize: 18
    },
    thumbnail:
    {
        height: 50,
        width: 50
    },
    thumbnailContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:
    {
        height: 300,
        flex: 1,
        width: null
    },
};

export default AlbumDetail;

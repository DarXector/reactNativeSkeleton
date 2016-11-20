import React,  { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';

import * as actions from '../../actions';

class ListItem extends Component
{
    componentWillUpdate()
    {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }

    renderDescription()
    {
        const { item, expanded } = this.props;

        if(expanded)
        {
            return (
                <CardSection>
                    <Text style={ { flex: 1 } }>{ item.description }</Text>
                </CardSection>
            )
        }
    }

    render()
    {
        const { titleStyle } = styles;
        const { title, id } = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={ titleStyle }>{ title }</Text>
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles =
{
    titleStyle:
    {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) =>
{
    return {
        expanded: state.selectedLibraryID === ownProps.item.id
    }
};

export default connect(mapStateToProps, actions)(ListItem);
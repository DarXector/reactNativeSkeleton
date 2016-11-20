import React,  { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';

import { connect } from 'react-redux';

import {emailChanged, passwordChanged, loginUser } from '../../actions/';

class LoginForm extends Component
{
    renderButton() {
        if(this.props.loading) return <Spinner size="large" />;

        return (
            <Button onPress={ this.onLogInPress.bind(this) }>
                Log In
            </Button>
        );
    }

    onLogInPress()
    {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    onEmailChange(email)
    {
        this.props.emailChanged(email);
    }

    onPasswordChange(password)
    {
        this.props.passwordChanged(password);
    }

    render()
    {
        return (
            <Card>
                <CardSection>
                    <Input  label="Email"
                            value={ this.props.email }
                            placeholder='user@mail.com'
                            onChangeText={ this.onEmailChange.bind(this) }/>
                </CardSection>

                <CardSection>
                    <Input  label="Password"
                            value={ this.props.password }
                            placeholder='password'
                            secure
                            onChangeText={ this.onPasswordChange.bind(this) }/>
                </CardSection>

                <Text style={ styles.errorTextStyle }>{ this.props.error }</Text>

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }

}

const styles =
{
    errorTextStyle:
    {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    successTextStyle:
    {
        fontSize: 20,
        alignSelf: 'center',
        color: 'green'
    }
};

const mapStateToProps = ({ auth }) =>
{
    const { email, password, error, loading } = auth;
    return { email, password, error, loading}
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
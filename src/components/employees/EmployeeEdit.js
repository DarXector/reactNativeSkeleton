import _ from 'lodash';
import Communications from 'react-native-communications'

import React, { Component } from 'react';
import { CardSection, Card, Button, Confirm } from '../common/'

import { connect } from 'react-redux';

import EmployeeForm from './EmployeeForm';

import { employeeSave, employeeUpdate, employeeDelete } from '../../actions/'

class EmployeeEdit extends Component
{
    state = {
        showModal: false
    };

    componentWillMount()
    {
        //noinspection JSUnresolvedVariable
        _.each(this.props.employee, (value, prop) =>
        {
            //noinspection JSUnresolvedFunction
            this.props.employeeUpdate({ prop, value });
        })
    }

    onButtonPress()
    {
        const {name, phone, shift } = this.props;

        //noinspection JSUnresolvedFunction
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress()
    {
        const { phone, shift } = this.props;
        Communications.text(phone, `Hi ${name}, Your upcoming shift is on ${shift}`)
    }

    onFirePress()
    {
        this.setState({
            showModal: true
        });
    }

    onDecline()
    {
        this.setState({
            showModal: false
        });
    }

    onAccept()
    {
        this.setState({
            showModal: false
        });

        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    render()
    {
        return (
            <Card>
                <EmployeeForm { ...this.props }/>

                <CardSection>
                    <Button onPress={ this.onButtonPress.bind(this) }>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={ this.onTextPress.bind(this) }>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={ this.onFirePress.bind(this) }>Fire Employee</Button>
                </CardSection>

                <Confirm onAccept={ this.onAccept.bind(this) }
                         onDecline={ this.onDecline.bind(this) }
                         visible={ this.state.showModal }>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>
{
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeSave, employeeUpdate, employeeDelete })(EmployeeEdit);
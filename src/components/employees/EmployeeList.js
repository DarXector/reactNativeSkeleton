import React, { Component } from 'react';
import { ListView } from  'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import EmployeeListItem from './EmployeeListItem'

import { emplyeesFetch } from '../../actions/'

class EmployeeList extends Component
{
    componentWillMount()
    {
        this.props.emplyeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps)
    {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees })
    {
        const ds = new ListView.DataSource(
            {
                rowHasChanged: (r1, r2) => r1 !== r2
            }
        );

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow()
    {
        return <EmployeeListItem employee={ employee } />;
    }

    render()
    {
        return (
            <ListView   enableEmptySections
                        dataSource={ this.dataSource }
                        renderRow={ this.renderRow }/>
        )
    }
}

const mapStateToProps = (state) =>
{
    const employees = _.map(state.employees, (val, uid) =>
    {
       return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { emplyeesFetch })(EmployeeList);
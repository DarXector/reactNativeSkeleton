import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

//import { MainDrawer } from './components/common/';

import LoginForm from './components/auth/LoginForm';
import AlbumList from './components/album/AlbumList';
import LibraryList from './components/techstack/LibraryList';
import EmployeeList from './components/employees/EmployeeList';
import EmployeeCreate from './components/employees/EmployeeCreate';
import EmployeeEdit from './components/employees/EmployeeEdit';


const RouterComponent = () =>
{
    return (
        <Router sceneStyle={{ paddingTop: 55 }}>
            <Scene key="auth">
                <Scene key="login" component={ LoginForm } title="Please Login" initial />
            </Scene>
            <Scene key="main" tabs={false} >
                <Scene initial
                    key="employeeList"
                    component={ EmployeeList }
                    title="Employees"
                    rightTitle="Add"
                    onRight={ () => Actions.employeeCreate() }/>
                <Scene key="employeeCreate" component={ EmployeeCreate } title="Create Employee" />
                <Scene key="employeeEdit" component={ EmployeeEdit } title="Edit Employee" />
                <Scene key="albums" component={ AlbumList } title="Albums" />
                <Scene key="techStack" component={ LibraryList } title="Tech Stack" />
            </Scene>

        </Router>
    )

};

export default RouterComponent;
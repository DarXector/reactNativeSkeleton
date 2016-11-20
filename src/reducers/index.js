import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers(
    {
        libraries: LibraryReducer,
        selectedLibraryID: SelectionReducer,
        auth: AuthReducer,
        employeeForm: EmployeeFormReducer
    });
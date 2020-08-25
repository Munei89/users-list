import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Avatar from '../Avatar';

const tableIcons: any = {
    Add: forwardRef((props, ref: any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref: any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref: any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref: any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref: any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref: any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref: any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref: any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref: any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref: any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref: any) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref: any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref: any) => <ViewColumn {...props} ref={ref} />),
};

interface Props {
    data?: any;
    userClick?: any;
}

const UserList: React.FC<Props> = ({ data, userClick }) => {
    return (
        <div style={{ padding: 10 }}>
            <MaterialTable
                icons={tableIcons}
                columns={[
                    {
                        title: 'Avatar',
                        field: 'picture',
                        render: rowData => <img src={rowData.picture} alt={'name'} />,
                        filtering: false,
                    },
                    { title: 'Name', field: 'name', filtering: false },
                    { title: 'Email', field: 'email', filtering: false },
                    { title: 'Phone', field: 'phone', filtering: false },
                    { title: 'Age', field: 'age', type: 'numeric' },
                    { title: 'Gender', field: 'gender' },
                    { title: 'City', field: 'city', filtering: false },
                ]}
                data={data}
                title="Active Users"
                options={{
                    filtering: true,
                    actionsColumnIndex: -1,
                }}
                actions={[
                    {
                        icon: tableIcons.NextPage,
                        tooltip: 'Go to details',
                        onClick: (event, rowData: any) => userClick(rowData),
                    },
                ]}
            />
        </div>
    );
};

export default UserList;
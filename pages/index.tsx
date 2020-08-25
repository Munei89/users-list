import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { fetchUsers, selectUser } from '../redux/actions/Users';
import UserList from '../components/UserList';

interface Props {
    loader?: boolean;
    usersList?: Array<any>;
    fetchUsers?: any;
    router?: any;
    selectUser?: any;
}

const Home = ({ loader, usersList, fetchUsers, router, selectUser }: Props) => {
    React.useEffect(() => {
        fetchUsers();
    }, []);
    let userData = [];
    if (usersList && usersList.length) {
        userData = usersList.map(e => ({
            ...e,
            picture: e.picture?.large,
            name: `${e.name?.first} ${e.name?.last}`,
            age: e.dob?.age,
            city: e.location?.city,
        }));
    }
    const userClick = (data: any) => {
        selectUser(data);
        router.push({
            pathname: '/details',
            query: { id: data.id?.value },
        });
    };
    return <UserList data={userData} userClick={userClick} />;
};

const mapStateToProps = ({ users }: any) => {
    const { loader, usersList } = users;
    return { loader, usersList };
};

export default withRouter(
    connect(mapStateToProps, {
        fetchUsers,
        selectUser,
    })(Home)
);

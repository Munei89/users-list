import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import UserCard from '../components/UserCard';

interface Props {
    router?: any;
    selectedUser?: any;
}

const Details = ({ router, selectedUser }: Props) => {
    return <>{selectedUser ? <UserCard data={selectedUser} /> : null}</>;
};

const mapStateToProps = ({ users }: any) => {
    const { selectedUser } = users;
    return { selectedUser };
};

export default withRouter(connect(mapStateToProps, null)(Details));

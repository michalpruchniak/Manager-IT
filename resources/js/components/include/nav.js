import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import React from "react";
const Nav = ({ user }) => {
    return(
        <ul>
            {!user.user.id ? <li><Link to="login">Login</Link></li> : ''}
            <li><Link to="all-tasks">Wszystkie taski</Link></li>
            <li><Link to="all-users">Wszyscy userzy</Link></li>
        </ul>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Nav);
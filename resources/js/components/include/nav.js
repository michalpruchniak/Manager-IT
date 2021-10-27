import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import React, { useEffect } from "react";
const Nav = ({ user }) => {
    var obj =[1, 2];
    useEffect(() => console.log('test', Object.keys(user)));
    return(
        <ul>
            <li><Link to="all-tasks">Wszystkie taski</Link></li>
            <li><Link to="all-users">Wszyscy userzy</Link></li>
        </ul>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Nav);
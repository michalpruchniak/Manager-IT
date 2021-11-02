import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import React, { useEffect } from "react";
const Nav = ({ user }) => {
    let userid = null;

    useEffect(() => {
        try {
            userid = user.user.id;
        } catch(err) {
            console.log(err);
        }

    });
    try {
        userid = user.user.id;
    } catch(err) {
        userid = null;
    }
    return(
        <ul>
            {userid !== null ?< li><Link to="login">Zaloguj</Link></li> : '' }
            <li><Link to="all-tasks">Wszystkie taski</Link></li>
            <li><Link to="all-users">Wszyscy userzy</Link></li>
        </ul>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Nav);
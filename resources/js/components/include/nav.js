import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import React, { useEffect } from "react";
const Nav = ({ user }) => {
    let userid = null;
    try {
        userid = user.user.id;
    } catch(err) {
        userid = null;
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    {userid === null ?
     <li className="nav-item">
        <Link className="nav-link" to="login">Zaloguj</Link>
      </li>
      : ''}
      <Link className="nav-link" to="all-tasks">Wszystkie taski</Link>
      <Link className="nav-link" to="all-users">Wszyscy userzy</Link>
    </ul>
  </div>
</nav>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Nav);
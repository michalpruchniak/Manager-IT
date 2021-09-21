import React, { useEffect } from 'react'
import { connect } from "react-redux"

const UsersContainer = ({ users }) => {
    return (
        <div>
            <ul className="tasks">
                {users.list.map(user =>
                    <li >{user.name}</li>
                )}
            </ul>
        </div>
    )
    
}
const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, null)(UsersContainer);
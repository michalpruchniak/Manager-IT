import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getAllUsers } from '../operations'

const UsersContainer = ({ users, getAllUsers }) => {
    useEffect(() => {getAllUsers()}, [])
    return (
        <div>
            <ul className="tasks">
                {users.list.map(user =>
                    <li >{user.email}</li>
                )}
            </ul>
        </div>
    )
    
}
const mapStateToProps = state => ({
    users: state.users
})
const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
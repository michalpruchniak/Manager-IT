import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getAllUsers } from '../operations'
import AddUser from './addUser'

const UsersContainer = ({ users, getAllUsers }) => {
    useEffect(() => {getAllUsers()}, [])
    return (
        <div>
            <ul className="tasks">
                {users.list.map(user =>
                    <li >{user.email}</li>
                )}
            </ul>
                <AddUser />
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
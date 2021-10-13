import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getAllUsers } from '../operations'
import AddUser from './addUser'

const UsersContainer = ({ users, getAllUsers }) => {
    useEffect(() => {getAllUsers()}, [])
    return (
        <React.Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">rola</th>
                </tr>
            </thead>
            <tbody>
                {users.list.map(user => 
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                           <div className="form-group">

                            <form>
                                    <select>
                                        <option value="user">Użytkownik</option>
                                        <option value="moderator">Moderator</option>
                                    </select>

                            </form>
                            </div>

                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        <AddUser />
        </React.Fragment>
    )
    
}
const mapStateToProps = state => ({
    users: state.users
})
const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
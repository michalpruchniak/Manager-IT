import SelectRole from './selectRole';

const SingleUser = ({user}) => {
    return(
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email} </td>
            <td>
                <SelectRole user={user} />
            </td>
        </tr>
    );
}

export default SingleUser;
import { changeUserRole } from '../operations'
import { toast } from 'react-toastify'
import displayToat from '../../include/toast'


const SelectRole = ({user}) => {
    const selectChange = (role, id) => {
        try {
            changeUserRole(role, id);
            displayToat('success', 'Rola została zmieniona prawidłowo');
        } catch (err) {
            displayToat('error', err);
        }
    }
    return(
        <div className="form-group">

            <form>
                <select onChange={(e) => selectChange(e.target.value, user.id)} defaultValue={user.role}>
                    <option value="1">Użytkownik</option>
                    <option value="2">Moderator</option>
                    <option value="3">Admin</option>
                </select>

            </form>
        </div>
    )
}
export default SelectRole;
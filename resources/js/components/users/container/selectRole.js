import { changeUserRole } from '../operations'
import  OptionRole  from './optionRole'
import { toast } from 'react-toastify'


const SelectRole = ({user}) => {
    const options = [
  { value: 'C++', label: 'C++' },
  { value: 'JAVA', label: 'JAVA' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'Python', label: 'Python' },
  { value: 'Swift', label: 'Swift' }
];
    const selectChange = (role, id) => {
        try {
            changeUserRole(role, id);
            toast.success('Rola została zmieniona prawidłowo', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (err) {
            toast.error(err, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
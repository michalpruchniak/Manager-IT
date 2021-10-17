import { useEffect } from "react";

const OptionRole = ({ userRole, role, name}) => {
    useEffect(() => {
        console.log(user.role);
    })
    if(userRole == role){
        return <option value={name} selected>{name}</option>
    } else {
        return <option value={name}>{name}</option>
    }
}

export default OptionRole;
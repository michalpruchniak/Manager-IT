import { useEffect } from "react";

const OptionRole = ({ userRole, role, value, name}) => {
    if(userRole == role){
        return <option value={value}>{name}</option>
    } else {
        return <option value={value}>{name}</option>
    }
}

export default OptionRole;
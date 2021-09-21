import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }

})
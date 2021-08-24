import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }

})
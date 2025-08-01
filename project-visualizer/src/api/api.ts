import axios from 'axios';

const getFolders = () => {
    axios.get('http://localhost:5000/')
        .then(res => console.log(res.data));
}

export default getFolders;

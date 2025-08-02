import axios from 'axios';

const ROOT = window.location.origin + "\\public\\";

const getFolders = () => {
    console.log(ROOT);
    axios.get('http://localhost:5000/folders')
        .then(res => console.log(res.data));
}

export default getFolders;

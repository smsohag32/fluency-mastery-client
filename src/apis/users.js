import axios from "axios"

const saveUser = async(user)=>{

    const email = user.email;
    const userInfo = {
        name: user.displayName,
        email: user.email,
        image: user.displayURL,
        role: 'student'
    }
    const res = await axios.put(`http://localhost:5000/users/${email}`, userInfo);
    const data = res.data;
    return data;
}

export default saveUser;
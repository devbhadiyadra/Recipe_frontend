import axios from "axios";
const URL="http://localhost:8085"

class Authservice{
    registeruser(data){
        return axios.post(URL+"/registration/adduser",data)
    }

    ded
}

export default new Authservice
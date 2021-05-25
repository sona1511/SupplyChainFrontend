import axios from 'axios'
const Res_API_BASE_URL ="http://localhost:9095/Admin";

class AdminService {

    getRes(){
        return axios.get(Res_API_BASE_URL);
    }


    getResById(aid){
        return axios.get(Res_API_BASE_URL + '/profile/' + aid);
    }

    updateRes(res,aid){
        return axios.put(Res_API_BASE_URL + '/update/' +aid, res)
    }

    deleteRes(aid){
        return axios.delete(Res_API_BASE_URL + '/delete/' +aid);
    }

}

export default new AdminService()
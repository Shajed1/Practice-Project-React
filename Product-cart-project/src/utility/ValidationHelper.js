class ValidationHelper {
    static islogin(){
       let token=sessionStorage.getItem('token')
        if (token !== null) {
            return true;
        } else {
            return false;
        }

    }

    static isEmpty(value){
        return value.length===0
    }

    static API_BASE(){
        return "https://cart-api.teamrabbil.com/api"
    }
    static API_BASE_two(){
        return "http://localhost:5090/api"
    }
}

export default ValidationHelper;
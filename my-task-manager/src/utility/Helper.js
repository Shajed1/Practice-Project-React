class Helper {

  static islogin() {
    const token = localStorage.getItem("token");

    // backward compatible (true/false logic support)
    return token ? true : false;
  }

  static loginSet(token) {
    localStorage.setItem("token", token);
  }


  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("otp");
  }

  static BASE_API() {
    return "http://localhost:5000/api";
  }
}

export default Helper;
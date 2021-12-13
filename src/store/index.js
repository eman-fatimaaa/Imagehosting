import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({


  state: {
    email: "",
    token: "",
    refresh: "",
    Snackbar: false,
    snackbarErrorMsg: "",
    authenticated: false,
  },

  getters: {
    getSnackbarStutes(state) {
      return state.Snackbar;
    },
    getSnackbarErrorMsg(state) {
      return state.snackbarErrorMsg;
    }

  },

  mutations: {
    auth(state, authData) {
      state.email = authData.email;
      state.token = authData.idToken;
      state.refresh = authData.refreshToken
    },
    SET_SNACKBAR(state, Snackbar) {
      state.Snackbar = Snackbar;
    },
    SET_SNACKBAR_ERRORMSG(state, snackbarErrorMsg) {
      state.snackbarErrorMsg = snackbarErrorMsg;
    }
  },

  actions: {
    // updateSnackBarStatus({ commit }) {
    //   commit("SET_SNACKBAR", false)
    // },

    //////// response from signup database
    Signup({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://image-hosting-sharing-service.herokuapp.com/api/register', {
        ...payload,
        returnSecureToken: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'text/html; charset=utf-8'
        }
      })
        .then(response => {
          localStorage.setItem("users", JSON.stringify(response.data.data.user));
          console.log(response);
          // commit("SET_SNACKBAR", true)
          // commit("SET_SNACKBAR_ERRORMSG", response.data.data.message)
        })
        .catch(error => {
          console.log(error)
          // commit("SET_SNACKBAR", true)
          // commit("SET_SNACKBAR_ERRORMSG", error.response.data.data.message)
        })
    },



    //////// response from Login database
    Login({
      commit
    }, payload) {
      console.log(commit)

      axios.post('http://image-hosting-sharing-service.herokuapp.com/api/login', {
        ...payload,
        returnSecureToken: true,

        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,

          'Content-Type': 'Application/json; charset=utf-8',

        }
      })
        .then(response => {
          localStorage.setItem("Token", JSON.stringify(response.data.data.token));
          //setAuthHeader(response.data.Token)
          console.log(response.data.data.token);
          // commit("SET_SNACKBAR", true)
          // commit("SET_SNACKBAR_ERRORMSG", response.data.data.message)

        })
        .catch(error => {
          console.log(error)
          // commit("SET_SNACKBAR", true)
          // commit("SET_SNACKBAR_ERRORMSG", error.response.data.data.message)
        })
    },





    /////////////// User Profile
    getProfile({
      commit
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.get("http://image-hosting-sharing-service.herokuapp.com/api/users/myprofile")
        .then(response => {
          localStorage.setItem("userProfile", JSON.stringify(response.data.data));

          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },





    //////////////// Update Profile
    Profile_updation({
      commit
    }, payload) {

      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)


      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.post("http://image-hosting-sharing-service.herokuapp.com/api/users/update", {
        ...payload,
      })
        .then(response => {
          localStorage.setItem("userProfile", JSON.stringify(response.data.data));
          console.log(response)
        })

        .catch((error) => {
          console.log(error.response)
        })

    },




    //Listing Images
    List_All_Images({ commit }, payload) {
      console.log(commit)
      var get_token = JSON.parse(localStorage.getItem('Token'))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + get_token,
        },
      })
      customAxios
        .post('http://localhost:3000/images', { ...payload })
        .then((response) => {
          console.log(response.data)

        })
        .catch((error) => {
          console.log(error.response)
        })
    },


    //////////// Forget Password
    Update_password({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://localhost:3000/forgetpass', {
        ...payload,
        returnSecureToken: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'text/html; charset=utf-8'
        }
      })
        .then(response => {
          localStorage.setItem("forgot_pass", JSON.stringify(response));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },




    ////////////// Log out
    logOut({
      commit
    }) {

      console.log(commit)

      var get_token = JSON.parse(localStorage.getItem("Token"))
      console.log(get_token)
      let customAxios = axios.create({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + get_token,
        }
      })
      customAxios.post("http://image-hosting-sharing-service.herokuapp.com/api/logout")

        .catch((error) => {
          console.log(error.response)
        })

    },
    // OTP 
    get_otp({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://localhost:3000/otp', {
        ...payload,
        returnSecureToken: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'text/html; charset=utf-8'
        }
      })
        .then(response => {
          localStorage.setItem("otp", JSON.stringify(response));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },



    Password_updation({
      commit
    }, payload) {
      console.log(commit)
      axios.post('http://localhost:3000/resetpassword', {
        ...payload,
        returnSecureToken: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'text/html; charset=utf-8'
        }
      })
        .then(response => {
          localStorage.setItem("updated_password", JSON.stringify(response));
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})
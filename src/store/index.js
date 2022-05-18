import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000'
  // /api/user/register
});

const store = createStore({
  state:{

  },
  actions:{
    createAccount:({commit}, userInfos) =>{
      commit,
      console.log(userInfos);
      instance.post('api/user/register', userInfos)
      .then(function (response){
        console.log(response);
      })
      .catch(function (response){
        console.log(error);
      });
    }
  }
})

export default store;
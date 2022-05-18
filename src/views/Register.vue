<template>
  <div>
    <h1 v-if="mode =='login'">Connexion</h1>
    <h1 v-else>Inscription</h1>
    <form>
      <div>
        <h2>Pseudo</h2>
        <div class="user-box">
            <input class="input_login" type="text"  v-model="pseudo" name="" />
        </div>
      </div>
      

      <div v-if="mode =='create'">
          <h2>Email</h2>
        
        <div class="user-box">
          <input class="input_login" type="email" v-model="email" name=""  />
        </div>
      </div>

      <div >
        <h2>Mot de passe</h2>
        <div class="user-box">
            <input class="input_login" type="password" v-model="mdp" name=""  />
        </div>
      </div>
      <div class="switch">
        <span  v-if="mode =='login'">Pas encore de compte ? <span class="link_switch" @click="switchToCreateAcc"> Créer un compte</span></span>      
        <span  v-else> Vous avez déjà un compte ? <span class="link_switch" @click="switchToLogin"> Connexion</span></span>
      </div>
     
      <br>
      <div v-if="mode=='login'">
          <input id="sub" type="submit" @click="sendAction"  value="se connecter" />
      </div>
      <div v-else>
          <input id="sub" type="submit" @click="sendAction" value="S'inscrire" />
      </div>
    </form>
  </div>
</template>

<script>

    export default{
        name: 'Login',
       data:function(){
           return{
               mode:'login',
               pseudo:'',
               email:'',
               mdp:'',
           }
       },
       methods:{
           switchToCreateAcc: function(){
               this.mode = "create"
           },
           switchToLogin: function(){
               this.mode = "login"
           },
           sendAction: function(){
             if (this.mode =='login'){
               if(!(this.pseudo =='' && this.mdp=='')){
                
                  //  axios.get('http://localhost:5500/posts/')
                  // .then(response => (console.log(response.data)))
                  


               }else{
                 console.log("Un champ n'a pas été rempli");
               }

             }else{
                if(!(this.pseudo =='' && this.mdp=='' && this.email=='')){
                  console.log('storeeee');
                  this.$store.dispatch('createAccount',{
                    name: this.pseudo,
                    email: this.email,
                    password: this.mdp
                  });
                }else{
                  console.log("Un champ n'a pas été rempli");

                }

             }
           }

       }
      //  ,mounted () {
      //   axios.get('http://localhost:5500/posts/')
      //   .then(response => (console.log(response)))
      //  }
    }
</script>


<style >
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

label {
  margin-top: 100px;
}

h1 {
  font-size: 4em;
  color: rgb(17, 199, 138);
}

#sub {
  margin-top: 30px;
  width: 150px;
  height: 35px;
  font-size: 1.15em;
  background-color: rgb(37, 232, 167);
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
}

#sub:hover {
  background-color: rgb(80, 242, 188);
}

.input_login {
  height: 30px;
  width: 250px;
}

.link_switch{
  text-decoration:underline;
  color: rgb(115, 173, 192);
  cursor: pointer;
}
.switch{
  margin-top: 30px;
}

</style>



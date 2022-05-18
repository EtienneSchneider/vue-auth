<template>
  <div>
    <h1>Login</h1>

    <form>
        <div>
            <h2>Pseudo</h2>
        </div>
        <div class="user-box">
        <input class="input_login" type="text" name="" required="" />
        </div>
        <div>
            <h2>Mot de passe</h2>
        </div>
    
        <div class="user-box">
        <input class="input_login" type="password" name="" required="" />
        </div>

      <input id="sub" type="submit" value="se connecter">

    </form>
  </div>
</template>

<script>

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

    label{
        margin-top: 100px;
    }

    h1{
        font-size: 4em;
        color: rgb(17, 199, 138);
    }

    #sub{
        margin-top: 30px;
        width: 150px;
        height: 35px;
        font-size: 1.15em;
        background-color:rgb(37, 232, 167) ;
        border: transparent;
        border-radius: 5px;
        cursor: pointer;
    }

    #sub:hover{
        background-color: rgb(80, 242, 188);
    }


    .input_login{
        height: 30px;
        width: 250px;
    }




   
</style>



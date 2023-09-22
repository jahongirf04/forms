<script setup>

</script>


<template>
    <div class="wrapper">
        <img src="../img/Frame 68.png" alt="">
        <div class="login">
            <div class="login-item">
                <input type="text" placeholder="name">
                <button>
                    <router-link to="/cars">Log In &nbsp;
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
}

img{
    margin: 54px;
    width: 550px;
    height: 450px;
}

.login{
    width: 50%;
    height: 100vh;
    background-color: #B99674;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
    <div>
        <nav-bar :connected="connected" @log-out="logOut"></nav-bar>
        <h2>Bienvenue sur Easy Train</h2>
        
    </div>
</template>

<script>
const NavBar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
    name: "HomePage",
    props: {
        connected: { type: Boolean }
    },
    components: {
        NavBar,
    },
    methods: {
        logOut () {
            this.$emit('log-out')
        },
    }
};
</script>

<style scoped>
</style>
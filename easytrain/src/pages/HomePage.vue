<template>
    <div>
        <nav-bar />
        <h2>Bienvenue sur Easy Train</h2>
        
    </div>
</template>

<script>
import NavBar from '../components/Navbar.vue';

export default {
    name: "HomePage",
    props: {},
    components: {
        NavBar,
    },
};
</script>

<style scoped>
</style>
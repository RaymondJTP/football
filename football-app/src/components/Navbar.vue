<template>
    <section>
        <nav>
            <div>
                <img src="../assets/jojonomic-logo.png" height="40">
            </div>
            <div class="d-flex justify-content-evenly">
                <router-link  :to="{ name: 'Home' }">
                    <a>Home</a>
                </router-link>
                <router-link  :to="{ name: 'FootballSearch' }">
                    <a>Football Search</a>
                </router-link>

            </div>
        </nav>
        
    </section>
</template>

<script>
export default {
    name : 'Navbar'
}
</script>

<style>

</style>
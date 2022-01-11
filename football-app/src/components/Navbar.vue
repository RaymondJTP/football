<template>
    <section >
        <nav class="mb-4">
            <div>
                <img src="../assets/jojonomic-logo.png" height="40">
            </div>
            <div class="d-flex justify-content-evenly mt-3">
                <router-link  :to="{ name: 'Home' }">
                    <a>Home</a>
                </router-link>
                <router-link  :to="{ name: 'FootballAreas' }">
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
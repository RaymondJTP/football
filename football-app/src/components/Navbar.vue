<template>
    <section >
        <nav class="mb-4">
            <div>
                <img src="../assets/jojonomic-logo.png" height="50">
            </div>
            <div>
                <a style="color:black; text-decoration:none; font-style: italic" href="https://www.linkedin.com/in/raymond-jungjungan-timoteus-panjaitan/"> Created By Raymond J.T.Panjaitan   </a>
            </div>
            <div>
                <a class="me-2" style="color:black; text-decoration:none; font-style: italic" href="https://www.linkedin.com/in/raymond-jungjungan-timoteus-panjaitan/">
                    <i class="fa fa-linkedin-square" style="font-size:36px"></i>
                </a>
                <a style="color:black; text-decoration:none; font-style: italic" href="https://github.com/RaymondJTP">
                    <i class="fa fa-github" style="font-size:36px"></i>
                </a>
            </div>
            <div class="d-flex justify-content-evenly mt-3">
                <router-link  :to="{ name: 'Home' }" class="nav-link align-middle px-0">
                    <a class="nav-link fw-bolder fs-5" style="color:black">Home</a>
                </router-link>
                <router-link  :to="{ name: 'FootballAreas' }" class="nav-link align-middle px-0">
                    <a class="nav-link fw-bolder fs-5" style="color:black">Football Info</a>
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
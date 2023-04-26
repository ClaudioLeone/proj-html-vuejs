<script>
    export default {
        name: "AppHeader",
        data() {
            return {
            
            }
        },
        props: {

        }
    }
</script>

<template>
<header>
    <div class="header d-flex align-items-center justify-content-between">
        <div class="logo-container">
            <div id="logo">
                <img src="../assets/edu/img/theme_eduprime_logo.png">
            </div>
        </div>

        <div class="navbar d-flex justify-content-end">
            <ul class="d-flex">
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>News</li>
                <li>Pages</li>
                <li>Contact</li>
                <li>Purchase</li>
            </ul>

            <button><a href="#">VIEW COURSES</a></button>
        </div>
    </div>
</header>
</template>

<style scoped lang="scss">

.header {
    width: 100%;
    color: white;
    height: 6rem;
    padding: 0 20px;
}
.logo-container {
    width: 20%;
}

#logo {
    width: 90%;
}

.navbar {

    ul {
        margin: 0;
    }

    ul > li {
        list-style-type: none;
        padding: 0 20px;
        font-size: 0.7rem;
        font-weight: bold;
    }

    button {
        background-color: #BAAC46;
        padding: 15px 30px;
        border: none;
        border-radius: 35px;
    }

    button a {
        text-decoration: none;
        color: white;
        font-weight: bolder;
        font-size: 0.75rem;
        letter-spacing: 1px;
    }
}
</style>
<script>
export default {
    name: "AppJumbo",
    data() {
        return {

        }
    }
}
</script>

<template>
<div class="jumbo-container d-flex justify-content-center align-items-center">
    <div class="left-icons-container">

    </div>
    <div class="jumbo-content d-flex flex-column align-items-center justify-content-center">
        <h2 class="jumbo-title">Key to your success</h2>
        <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools, etc.</p>
        <div class="jumbo-btn-container d-flex justify-content-between align-items-center">
            <button class="btn-sx"><a href="#">Search courses</a></button>
            <button class="btn-dx"><a href="#">Apply for university</a></button>
        </div>
    </div>

    <img class="waves" src="../assets/edu/img/Wave-1.png" alt="Wave-1">
</div>
</template>

<style scoped lang="scss">
.jumbo-container {
    width: 100%;
    height: 25rem;
    color: white;
    position: relative;

    .waves {
        position: absolute;
        bottom: 0;
    }
    .left-icons-container {
        position: absolute;
        left: 0;
        top: 50;
        width: 35px;
        height: 100px;
        background-color: #BAAC46;
        color: white;
        border-radius: 3px;
    }
}

.jumbo-content {
    text-align: center;
    width: 55%;
    height: 100%;
}

.jumbo-content > * {
    padding: 10px 0;
}

.jumbo-title {
    font-size: 2.5rem;
    font-weight: bold;
}

.btn-sx {
    background-color: #BAAC46;
    border-radius: 35px;
    padding: 10px 25px;
    border: none;
}

.btn-dx {
    background-color: white;
    border-radius: 35px;
    padding: 10px 25px;
    border: none;
}

.jumbo-btn-container {
    width: 55%;
}

.jumbo-btn-container > .btn-sx > a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 0.83rem;
}

.jumbo-btn-container > .btn-dx > a {
    text-decoration: none;
    color: #B75253;
    font-weight: bold;
    font-size: 0.83rem;
}
</style>
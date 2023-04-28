<script>
export default {
    name: "mainBottom",
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="main-bottom container">
        <div class="upper">
            <h3>Latest Courses</h3>

            <div class="row">
                <div class="card col d-flex flex-column align-items-center justify-content-center">
                    <img class="courses-card-icon" src="../../assets/edu/img/Decisions-icon.png" alt="">
                    <h6>Make Better Decisions</h6>
                    <span>Teacher: <span>James Colins</span></span>
                    <span>Price: <span>Free</span></span>
                    <button class="courses-card-btn">View Course</button>
                </div>

                <div class="card col d-flex flex-column align-items-center justify-content-center">
                    <img class="courses-card-icon" src="../../assets/edu/img/Speaker-icon.png" alt="">
                    <h6>How to be a speaker</h6>
                    <span>Teacher: <span>James Colins</span></span>
                    <span>Price: <span>Free</span></span>
                    <button class="courses-card-btn">View Course</button>
                </div>

                <div class="card col d-flex flex-column align-items-center justify-content-center">
                    <img class="courses-card-icon" src="../../assets/edu/img/Network-icon.png" alt="">
                    <h6>Network Introduction</h6>
                    <span>Teacher: <span>James Colins</span></span>
                    <span>Price: <span>Free</span></span>
                    <button class="courses-card-btn">View Course</button>
                </div>

                <div class="card col d-flex flex-column align-items-center justify-content-center">
                    <img class="courses-card-icon" src="../../assets/edu/img/Brand-icon.png" alt="">
                    <h6>Brand Management</h6>
                    <span>Teacher: <span>James Colins</span></span>
                    <span>Price: <span>Free</span></span>
                    <button class="courses-card-btn">View Course</button>
                </div>
            </div>
        </div>

        <div class="middle d-flex justify-content-center align-items-center">
            <div class="text-section d-flex flex-column justify-content-left">
                <img class="small-icons" src="../../assets/edu/img/Exam-icon.png" alt="">
                <h3>The most efficient examination method</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, optio obcaecati debitis delectus, veritatis qui perspiciatis reiciendis.</p>
                <button>Discover the Method</button>
            </div>

            <div class="middle-img-container">
                <img src="../../assets/edu/img/Exam-Illustration.png" alt="Exam-Illustration">
            </div>
        </div>

        <div class="middle d-flex justify-content-center align-items-center">
            <div class="middle-img-container">
                <img src="../../assets/edu/img/Girl-Illustration.png" alt="Exam-Illustration">
            </div>

            <div class="text-section d-flex flex-column justify-content-left">
                <img class="small-icons" src="../../assets/edu/img/Exam-icon-1.png" alt="">
                <h3>Variable fees for international students</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, optio obcaecati debitis delectus, veritatis qui perspiciatis reiciendis.</p>
                <button>Discover the Method</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.small-icons {
    width: 40px;
    margin-bottom: 15px;
}
.main-bottom > * {
    padding: 20px 0;
}
.upper > h3 {
    padding: 10px 0
}

button {
    background-color: #B75253;
    padding: 10px 15px;
    border: none;
    border-radius: 35px;
    width: 60%;
    font-size: 0.9rem;
    color: white;
    margin: 10px 0;
}
.courses-card-icon {
    width: 60px;
    margin-bottom: 15px;
}

.card {
    height: 250px;
    width: calc(100% / 4 - 20px);
}
.card > span {
    font-size: 0.65rem;
}

.text-section {
    width: 40%;
}

.middle-img-container {
    width: 40%;

    img {
        width: 80%;
    }
}
</style>
<script>
export default {
    name: "mainTop",
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="main-top container">
        <div class="upper d-flex justify-content-around">
            <div class="d-flex flex-column upper-text-sect justify-content-center">
                <img class="books-icon" src="../../assets/edu/img/Books-icon.png" alt="">
                <h3>Thousands of courses for any type of student</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi mollitia, ducimus, quos eaque cumque et, modi eveniet ad neque maxime alias. Non delectus tenetur accusantium accusamus asperiores est obcaecati sapiente.</p>
                <button><a href="#">Browse through courses</a></button>
            </div>

            <div class="grad-ill-container d-flex justify-content-end">
                <img class="graduation-illustration" src="../../assets/edu/img/Graduation-Illustration.png" alt="Graduation-Illustration">
            </div>
        </div>

        <div class="middle d-flex flex-column justify-content-center align-items-center">
            <h3>Faculties available at EduPrime</h3>

            <div class="middle-text-sect">
                <p>A single university with a load of courses, tailored to satisfy any student's needs.</p>
            </div>
            
            <div class="row">
                <div class="col d-flex flex-column align-items-center justify-content-center"><span>Law Faculty</span></div>
                <div class="col d-flex flex-column align-items-center justify-content-center"><span>Economy</span></div>
                <div class="col d-flex flex-column align-items-center justify-content-center"><span>Medicine</span></div>
                <div class="col d-flex flex-column align-items-center justify-content-center"><span>Computer Science</span></div>
                <div class="col d-flex flex-column align-items-center justify-content-center"><span>Graphic Design</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.books-icon {
    width: 30px;
    position: absolute;
    left: 0;
    top: -5px;
}

h3 {
    font-weight: bold;
}

p {
    font-size: 0.8rem;
}

.upper {
    padding: 50px 0;
}
.upper-text-sect {
    position: relative;
    width: 30%;
    p {
        font-size: 0.7rem;
    }

    button {
        background-color: #BAAC46;
        padding: 10px 15px;
        border: none;
        border-radius: 35px;
        width: 60%;
        font-size: 0.9rem;
    }

    button a {
        text-decoration: none;
        color: white;
        font-weight: bolder;
        font-size: 0.75rem;
        letter-spacing: 1px;
    }
}

.upper-text-sect > * {
    padding: 5px 0;
}

.grad-ill-container {
    width: 35%;
    .graduation-illustration {
    width: 100%;
}
}
.middle {
    text-align: center;
    padding: 35px 0;
}
.middle-text-sect {
    width: 30%;
    padding: 20px 0;
}
.row {
    width: 100%;
    height: 8rem;

    .col {
        width: calc(100% / 5);
        color: #B75253;
        font-weight: bold;
        cursor: pointer;
        border: 1px solid #e5e5e5;

        span {
            font-size: 0.7rem;
        }
    }

    .col:hover {
        color: white;
        background-color: #B75253;
    }
}

</style>
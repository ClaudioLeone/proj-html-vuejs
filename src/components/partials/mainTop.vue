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
        <div class="upper d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column upper-text-sect justify-content-center">
                <img class="books-icon" src="../../assets/edu/img/Books-icon.png" alt="">
                <h3>Thousands of courses for any type of student</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi mollitia, ducimus, quos eaque cumque et, modi eveniet ad neque maxime alias. Non delectus tenetur accusantium accusamus asperiores est obcaecati sapiente.</p>
                <button><a href="#">Browse through courses</a></button>
            </div>

            
            <img class="graduation-illustration" src="../../assets/edu/img/Graduation-Illustration.png" alt="Graduation-Illustration">

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

        <div class="bottom d-flex justify-content-center align-items-center">
            <div>
                <img class="law-icon" src="../../assets/edu/img/Gavel-Illustration-e1556884768193.png" alt="Gavel-Illustration">
            </div>

            <div class="bottom-text-sect d-flex flex-column align-items-start justify-content-center">
                <h3>Law Faculty</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quam nam vero ratione magnam deserunt mollitia consequuntur officiis repellendus quibusdam culpa quae provident dolore in velit, hic, iure ad illo.</p>
                <button>Read More</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.books-icon {
    width: 40px;
    margin-bottom: 10px;
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

.graduation-illustration {
    width: 25%;
    
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
    width: 85%;
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

.bottom {
    padding: 10px 0 50px 0;
}
.law-icon {
    width: 65%;
}
.bottom-text-sect {
    width: 40%;

    p {
        padding: 20px 0;
    }

    button {
        background-color: #B75253;
        color: white;
        padding: 15px 10px;
        border: none;
        border-radius: 35px;
        width: 35%;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>
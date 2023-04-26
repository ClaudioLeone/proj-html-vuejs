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
                <h4>Thousands of courses for any type of student</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi mollitia, ducimus, quos eaque cumque et, modi eveniet ad neque maxime alias. Non delectus tenetur accusantium accusamus asperiores est obcaecati sapiente.</p>
                <button><a href="#">Browse through courses</a></button>
            </div>

            <div class="grad-ill-container d-flex justify-content-end">
                <img class="graduation-illustration" src="../../assets/edu/img/Graduation-Illustration.png" alt="Graduation-Illustration">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-top {
    height: 600px;
}
.books-icon {
    width: 30px;
    position: absolute;
    left: 0;
    top: -5px;
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

    h4 {
        font-weight: bold;
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
    width: 40%;
    .graduation-illustration {
    width: 100%;
}
}
</style>
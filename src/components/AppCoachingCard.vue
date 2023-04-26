<script>
export default {
    name: "AppCoachingCard",
    // props: {
    //     cardDate: String,
    // },
    data() {
        return {
            cardTitle: "Coaching Sessions",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]" ,
            cardBtnTxt: "+ Find More"
        }
    }
}
</script>

<template>
    <div class="card d-flex flex-column align-items-center">
        <h5>{{ cardTitle }}</h5>
        <cardDate></cardDate>
        <p>{{ cardText }}</p>
        <button>{{ cardBtnTxt }}</button>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: white;
    border-radius: 20px;
    color: #101010;
    padding: 20px 25px;
    position: relative;

    h5 {
        font-weight: bold;
    }

    button {
        background-color: #984041;
        color: white;
        border: none;
        border-radius: 35px;
        padding: 10px 15px;
        position: absolute;
        left: 118px;
        bottom: -22px;
    }
}
</style>
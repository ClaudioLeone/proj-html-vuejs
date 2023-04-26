<script>
import AppCoachingCard from '../AppCoachingCard.vue';

export default {
    name: "mainMiddle",
    components: {
        AppCoachingCard,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="main-middle-container">
        <div class="main-middle container d-flex flex-column align-items-center">

            <h3>University Year</h3>

            <div class="timeline-section">
                <img src="../../assets/edu/img/Timeline-Item.png" alt="Timeline-Item">
            </div>

            <h3>Upcoming Events</h3>

            <div class="row">
                <div class="col"><AppCoachingCard /></div>
                <div class="col"><AppCoachingCard /></div>
                <div class="col"><AppCoachingCard /></div>
            </div>

            <button>View All Events</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-middle-container {
    background-color: #B75253;
}

.main-middle {
    padding: 100px 0;
    color: white;

    h3 {
        font-weight: bold;
        margin-bottom: 50px;
    }

    .row {
        width: 100%;
    }

    button {
        background-color: #BAAC46;
        padding: 15px 30px;
        margin: 60px 0;
        border: none;
        border-radius: 35px;
        cursor: pointer;
        color: white;
        font-weight: bold;
    }
}

.main-middle > *{
    padding: 25px;
}
</style>
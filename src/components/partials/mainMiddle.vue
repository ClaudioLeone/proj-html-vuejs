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
        <img class="wave-img-top" src="../../assets/edu/img/Wave-1.png" alt="wave">

        <div class="main-middle container d-flex flex-column align-items-center">

            <h3>University Year</h3>

            <div class="timeline-section">
                <div class="top-timeline-text row d-flex justify-content-end">
                    <div class="top-left-text col-4 text-center">
                        <h5>Demo Classes</h5>
                        <p>In the first week, students try to accommodate with the teaching style and choose their optional courses</p>
                    </div>

                    <div class="top-right-text col-4 text-center">
                        <h5>Graduation Day</h5>
                        <p>On the day of graduation, all students gather for the ceremony and the network and party among others</p>
                    </div>
                </div>

                <img src="../../assets/edu/img/Timeline-Item.png" alt="Timeline-Item">
                
                <div class="bottom-timeline-text row d-flex justify-content-start">
                    <div class="bottom-left-text col-4 text-center">
                        <h5>Demo Classes</h5>
                        <p>In the first week, students try to accommodate with the teaching style and choose their optional courses</p>
                    </div>

                    <div class="bottom-right-text col-4 text-center">
                        <h5>Graduation Day</h5>
                        <p>On the day of graduation, all students gather for the ceremony and the network and party among others</p>
                    </div>
                </div>
            </div>

            <h3>Upcoming Events</h3>

            <div class="row">
                <div class="col"><AppCoachingCard /></div>
                <div class="col"><AppCoachingCard /></div>
                <div class="col"><AppCoachingCard /></div>
            </div>

            <button>View All Events</button>
        </div>

        <img class="wave-img-bottom" src="../../assets/edu/img/Wave-1.png" alt="wave">
    </div>
</template>

<style scoped lang="scss">
.main-middle-container {
    background-color: #B75253;
    position: relative;

}
.wave-img-top {
    position: absolute;
    top: 0;
    transform: scaleY(-1)
}

.wave-img-bottom {
    position: absolute;
    bottom: 0;
    transform: scaleX(-1)
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
    position: relative;
}
.top-left-text {
    margin-right: 6.25rem;
}
.top-right-text {
    margin-right: 1rem;
}
.top-left-text > h5, .top-right-text > h5 {
    font-weight: 700;
}
.top-left-text > p, .top-right-text > p {
    font-size: 0.85rem;
    font-weight: lighter;
}

.bottom-left-text {
    margin-top: 1rem;
    margin-left: 2.3rem;
}
.bottom-right-text {
    margin-top: 1rem;
    margin-left: 6.25rem;
}
.bottom-left-text > h5, .bottom-right-text > h5 {
    font-weight: 700;
}
.bottom-left-text > p, .bottom-right-text > p {
    font-size: 0.85rem;
    font-weight: lighter;
}
</style>
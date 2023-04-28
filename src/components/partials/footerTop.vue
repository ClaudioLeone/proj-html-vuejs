<script>
    export default {
        name: "footerTop",
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="newsletter-section d-flex align-items-center justify-content-center">
        <h5>Subscribe Now to Our Newsletter !</h5>
        <div class="submit-bar">
            <input class="text-input" type="text" name="" id="" placeholder="Email address..."><input class="send-btn" type="button" value="🔍">
        </div>
    </div>

    <div class="partners-section d-flex flex-column align-items-center justify-content-center">
        <div class="partners-text d-flex flex-column align-items-center justify-content-center">
            <h3>Partners</h3>
            <p>Leverage agile frameworks to provide a robust synopsys for high level overviews. Iterative approaches to corporate strategy.</p>
        </div>

        <div class="partners-icons-container d-flex align-items-center">
            <div><img src="../../assets/edu/img/partner-2.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-3.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-4.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-5.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-6.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-8.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-1.png" alt=""></div>
            <div><img src="../../assets/edu/img/partner-9.png" alt=""></div>
        </div>

        <img src="../../assets/edu/img/background-wave3.png" alt="">
    </div>
</template>

<style scoped lang="scss">
.newsletter-section {
    color: white;
    background-color: #B75253;
    padding: 35px 0;

    h5 {
        margin: 0;
        font-size: 1.15rem;
    }
    .submit-bar {
        position: relative;
        border-radius: 25%;
        width: 250px;

        .text-input {
            border: none;
            border-radius: 25px;
            padding-left: 10px;
            height: 24px;
            font-size: 0.7rem;
            width: 100%;
        }

        .send-btn {
            border: none;
            padding: 0 2px;
            border-radius: 25px;
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: #BAAC46;
        }
    }
}

.newsletter-section > * {
    margin: 0 50px;
}

.partners-text {
    width: 60%;
}

.partners-section > img {
    filter: invert(0.1);
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, -1);
    width: 65%;
    position: absolute;
    right: 0;
    bottom: 0;
}

.partners-section > div > h3{
    font-weight: bold;
    margin: 0;
    padding: 30px 0;
}

.partners-section > div {
    text-align: center;
}

.partners-section > div > p{
    font-weight: 600;
}

.partners-section {
    position: relative;
    background-color: white;
    width: 100%;
    padding-bottom: 200px;
}

.partners-icons-container {
    width: 75%;
    filter: invert(1) brightness(0.5);
}
</style>
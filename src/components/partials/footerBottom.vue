<script>
    export default {
        name: "footerBottom",
        data() {
            return {

            }
        }
    }
</script>

<template>
<div class="footer-bottom-container d-flex justify-content-around">
    <div class="bottom-left-btns-container d-flex flex-column justify-content-between">
        <button class="side-btn">🌿 <span>Purchase Theme</span></button>
        <button class="side-btn">🍁 <span>Related Themes</span></button>
    </div>

    <div class="left d-flex flex-column align-items-center">
        <div class="logo-container">
            <div id="bottom-logo">
                <img src="../../assets/edu/img/theme_eduprime_logo.png">
            </div>
        </div>

        <p>Eduprime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.</p>
    </div>

    <div class="center d-flex justify-content-around">
        <div class="sx-list">
            <h6>Get EduPrime</h6>
            <ul>
                <li>Request a website</li>
                <li>Browse Themes</li>
                <li>Payment options</li>
                <li>Support System</li>
                <li>Checkout</li>
                <li>Purchase Theme</li>
            </ul>
        </div>

        <div class="dx-list">
            <h6>Networking</h6>
            <ul>
                <li>Purchase Theme</li>
                <li>Our Beneffits</li>
                <li>Our Team</li>
                <li>Our Services</li>
                <li>Our Products</li>
                <li>My account</li>
            </ul>
        </div>
    </div>

    <div class="right d-flex flex-column align-items-end">
        <div class="search-bar">
            <input class="text-input" type="text" name="" id="" placeholder="Search"><input class="send-btn" type="button" value="🔍">
        </div>

        <div class="search-categories text-end">
            <h6>Search categories</h6>

            <button>ECONOMY</button>
            <button>DESIGN</button>
            <button>COACHING</button>
            <button>BUSINESS</button>
            <button>MEDICINE</button>
            <button>LAW</button>
            <button>FITNESS</button>

            <p>ModelTheme. All rights reserved.</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
ul {
    padding: 0;
}

li {
    list-style-type: none;
    padding: 5px 0;
    font-size: 0.7rem;
    color: lightgrey;
}
.footer-bottom-container {
    position: relative;
    color: white;
    padding: 70px 0;
    width: 80%;
    margin: 0 auto;
}
 .left {
    width: 33%;

    p {
        font-size: 0.7rem;
        padding: 25px 0;
    }
 }

 #bottom-logo {
    width: 65%;
 }

 .center {
    width: 33%;

    .sx-list {
        h6 {
            font-weight: bold;
        }
    }

    .dx-list {
        h6 {
            font-weight: bold;
        }
    }
 }

 .right {
    width: 33%;

    .search-bar {
        position: relative;
        border-radius: 25%;
        width: 90%;

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

 .search-categories {
    h6 {
        margin: 0;
        padding: 20px 0;
        font-weight: bold;
    }

    button {
        color: lightgrey;
        border: 1px solid lightgray;
        border-radius: 15px;
        background-color: transparent;
        font-size: 0.7rem;
        padding: 5px 10px;
        margin-left: 5px;
    }

    p {
        font-size: 0.7rem;
        color: #BAAC46;
        padding: 20px 0;
        margin: 0;
    }
 }

 .bottom-left-btns-container {
    position: absolute;
    left: -70px;
    bottom: 25px;
 }

 .side-btn {
    border: none;
    border-radius: 3px;
    color: grey;
    padding: 5px 20px;
    background-color: #212023;
    margin-bottom: 5px;
    font-size: 0.7rem;
 }
</style>
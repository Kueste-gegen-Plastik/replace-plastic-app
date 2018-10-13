<template>
    <div class="sponsors">
        <div class="sponsors__border"></div>
        <h5 class="headline headline--centered headline--dark headline--tertiary sponsors__headline">Gefördert durch:</h5>
        <div class="sponsors__list">
            <div class="sponsors__item">
                <a href="https://www.postcode-lotterie.de/" target="_blank">
                    <img src="img/dpl_logo.png" alt="Deutsche Postcode Lotterie" />
                </a>
            </div>
        </div>
        <hr class="waves waves--dark" />
        <h5 class="headline headline--centered headline--dark headline--tertiary sponsors__headline">Design & Umsetzung:</h5>
        <div class="sponsors__list">
            <div class="sponsors__item">
                <a href="https://www.neuwaerts.de/" target="_blank">
                    <img src="img/neuwaerts.png" alt="neuwaerts GmbH" />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'kgp-sponsors',
    data() {
        return {}
    }
};
</script>

<style lang="scss">
.sponsors {
    position: relative;
    background: #fff;
    padding: 20px 0;
    margin-top: 15vh;
    width: 100%;
    .headline {
        margin-bottom: 0;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 20px;
    }
    &__item {
        width: 25%;
        padding: 10px;
        text-align: center;
        img {
            max-width: 100%;
            height: auto;
            @include bp('medium') {
                max-width: 200px;
            }
        }
    }
    &__border {
        background: url('img/footer-border.svg') 0 0 repeat-x;
        position: absolute;
        top: -16px;
        width: 100%;
        height: 17px;
    }
}
</style>

<template>
    <div class="sponsors">
        <hr class="waves waves--dark" />
        <div class="sponsors__border"></div>
        <h5 class="headline headline--centered headline--dark headline--tertiary sponsors__headline">Auch als App verfügbar:</h5>
        <div class="sponsors__list">
            <div class="sponsors__item">
                <a class="sponsors__link" href="https://play.google.com/store/apps/details?id=com.kuestegegenplastik.replaceplastic" target="_blank">
                    <img class="sponsors__image sponsors__image--google" src="img/google-play-badge.png" alt="replaceplastic jetzt bei Google Play" />
                </a>
            </div>
            <div class="sponsors__item">
                <a class="sponsors__link" href="https://itunes.apple.com/de/app/replaceplastic/id1257771601" target="_blank">
                    <img class="sponsors__image sponsors__image--apple" src="img/apple-store-badge.png" alt="replaceplastic laden im App Store" />
                </a>
            </div>
        </div>
        <hr class="waves waves--dark" />
        <h5 class="headline headline--centered headline--dark headline--tertiary sponsors__headline">Gefördert durch:</h5>
        <div class="sponsors__list">
            <div class="sponsors__item">
                <a class="sponsors__link" href="https://www.postcode-lotterie.de/" target="_blank">
                    <img class="sponsors__image sponsors__image--pc" src="img/dpl_logo.png" alt="Deutsche Postcode Lotterie" />
                </a>
            </div>
            <div class="sponsors__item">
                <a class="sponsors__link" href="https://www.bewegungsstiftung.de/" target="_blank">
                    <img class="sponsors__image sponsors__image--bs" src="img/bs_logo.png" alt="Bewegungsstiftung - Anstöße für soziale Bewegungen" />
                </a>
            </div>
        </div>
        <hr class="waves waves--dark" />
        <h5 class="headline headline--centered headline--dark headline--tertiary sponsors__headline">Design & Umsetzung:</h5>
        <div class="sponsors__list">
            <div class="sponsors__item">
                <a class="sponsors__link" href="https://www.neuwaerts.de/" target="_blank">
                    <img class="sponsors__image sponsors__image--nw" src="img/neuwaerts.png" alt="neuwaerts GmbH" />
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
    &__link {
        display: block;
    }
    &__item {
        width: 100%;
        padding: 10px;
        text-align: center;
    }
    &__image {
        max-width: 40%;
        height: auto;
        @include bp('medium') {
            max-width: 250px;
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

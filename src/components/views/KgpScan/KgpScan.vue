<template>
    <div class="step step--2 step--flex" id="step_2">
        <div class="top">
            <svg class="symbols" width="52" height="65" version="1.1" x="0px" y="0px" viewBox="0 0 52 65">
                <symbol id="scan" x="0px" y="0px" width="52" height="65" viewBox="0 0 52 65">
                    <path d="M39.9183998,21H12.0815001C11.4853001,21,11,20.5146008,11,19.9188995V15c0-1.1026001,0.8969002-2,2-2h26    c1.1030006,0,2,0.8973999,2,2v4.9188995C41,20.5146008,40.5145988,21,39.9183998,21z M13,19h26v-4H13V19z"/>
                    <path d="M26,50c-3.8598995,0-7-3.1405983-7-7V29.3799l-7.7475996-8.7159004l1.4951-1.3281002L21,28.6201V43    c0,2.7568016,2.2430992,5,5,5c2.7567997,0,5-2.2431984,5-5V28.6201l8.2523994-9.2842007l1.4951019,1.3281002L33,29.3799V43    C33,46.8594017,29.8598003,50,26,50z"/>
                    <rect x="25" y="34" width="2" height="6" />
                    <rect x="13" y="9" width="2" height="2" />
                    <rect x="17" y="9" width="2" height="2" />
                    <rect x="21" y="9" width="2" height="2" />
                    <rect x="25" y="9" width="2" height="2" />
                    <rect x="29" y="9" width="2" height="2" />
                    <rect x="33" y="9" width="2" height="2" />
                    <rect x="37" y="9" width="2" height="2" />
                    <rect x="13" y="2" width="2" height="4" />
                    <rect x="17" y="2" width="2" height="4" />
                    <rect x="21" y="2" width="2" height="4" />
                    <rect x="25" y="2" width="2" height="4" />
                    <rect x="29" y="2" width="2" height="4" />
                    <rect x="33" y="2" width="2" height="4" />
                    <rect x="37" y="2" width="2" height="4" />
                    <rect x="10" y="8" width="32" height="2" />
                </symbol>
            </svg>
            <hr class="waves" />
        </div>
        <div class="left">
            <div class="step__inner step__inner--scan">
                <h2 class="headline headline--primary">
                    <span class="headline__inner headline__inner--primary scan__headline">
                        <button title="Worum geht`s?" v-if="!nagscreen" class="helper" @click="showNagscreen">

                            <span class="helper__icon">
                                ?
                            </span>
                        </button>
                        Produkt scannen
                    </span>
                </h2>
                <form v-on:submit.prevent="handleBarcodeSubmit" name="fallbackform" class="form" method="post">
                    <div class="scan">
                        <button type="button" class="scan__button" v-on:click="startScan">
                            <svg class="scan__icon" x="0px" y="0px" width="52" height="65" viewBox="0 0 52 65">
                                <use xlink:href="#scan"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="scan__fallback">
                        <h3 class="headline headline--tertiary">
                            <span class="headline__inner">
                                ... oder selber den Barcode eingeben:
                            </span>
                        </h3>
                        <div class="form__formrow">
                            <label class="form__label" v-bind:class="{ 'form__label--filled' : barcode.length }" for="ean">Barcode-Nummer<sup title="Pflichtfeld">*</sup></label>
                            <input class="form__input" type="text" required="required" id="ean" :value="barcode" @input="updateBarcode" />
                        </div>
                        <kgp-error v-on:reset="startScan"></kgp-error>
                        <button class="form__button" type="submit">
                            Produkt suchen
                        </button>
                        <mq-layout class="form__inline" :mq="['small','medium']">
                            <router-link class="form__button  form__button--delete" v-bind:to="{ name : 'Statistiken' }">
                                Statistiken ansehen
                            </router-link>
                        </mq-layout>
                    </div>
                </form>
                <div class="sponsors">
                    <hr class="waves" />
                    <h5 class="headline headline--centered headline--tertiary">Gefördert durch:</h5>
                    <div class="sponsors__list">
                        <div class="sponsors__item">
                            <a href="https://www.postcode-lotterie.de/" target="_blank">
                                <img src="img/dpl_logo.png" alt="Deutsche Postcode Lotterie" />
                            </a>
                        </div>
                        <div class="sponsors__item">
                            <a href="https://www.neuwaerts.de/" target="_blank">
                                <img src="img/neuwaerts.png" alt="neuwaerts GmbH" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="webScanActive" class="scan__container">
                <button v-on:click.prevent="closeWebAppScan()" class="scan__close form__button">Scanner schließen</button>
                <div class="scan__video" id="scan__video"></div>
            </div>
        </div>
        <div class="right">
            <mq-layout :mq="['large','xlarge']">
                <kgp-statistics></kgp-statistics>
            </mq-layout>
        </div>
    </div>
</template>

<script>
import Quagga from 'quagga'
import Api from '@/api'
import Barcoder from 'barcoder'
import KgpError from '@/components/shared/KgpError/KgpError'
import KgpStatistics from '@/components/shared/KgpStatistics/KgpStatistics'

export default {
    name: 'kgp-scan',
    components: {
        KgpError,
        KgpStatistics
    },
    data() {
        return {
            cantScan: false,
            isValidEan: false,
            isWeb: false,
            webScanActive: false
        };
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 1)
    },
    computed: {
        barcode() {
            return this.$store.getters.barcode
        },
        error() {
            return this.$store.getters.error
        },
        nagscreen() {
            return this.$store.getters.nagscreen;
        }
    },
    methods: {
        showNagscreen() {
            this.$store.dispatch('nagscreen', true);
        },
        handleError(code) {
            this.$store.dispatch('setError', code)
        },
        updateBarcode(e) {
            this.$store.dispatch('setBarcode', e.target.value)
        },
        closeWebAppScan() {
            Quagga.stop()
            this.webScanActive = false
        },
        startScan() {
            this.err = false;
            // handle native app scanning
            if (typeof window.cordova !== 'undefined' && Object.prototype.hasOwnProperty.call(window.cordova.plugins, 'barcodeScanner')) {
                // android 6+ has a new permission system. hooray.
                if (window.cordova.platformId == 'Android' && parseInt(window.cordova.platformVersion.substr(0, 1)) >= 6) {
                    var permissions = cordova.plugins.permissions;
                    // first check if the camera permission was already granted
                    permissions.checkPermission(permissions.CAMERA, (status) => {
                        // permission granted. everything fine.
                        if (status.hasPermission) {
                            this.nativeScan();
                        } else {
                            try {
                                // permission not granted. request it
                                permissions.requestPermission(permissions.CAMERA, () => {
                                    // permission granted
                                    this.nativeScan();
                                }, () => {
                                    // permission rejected
                                    this.handleError('007');
                                });
                            } catch(err) {
                                this.handleError('007');
                            }
                        }
                    }, (err) => {
                        // error while requesting permission status
                        console.log(err);
                        this.handleError('007');
                    });
                } else {
                    this.nativeScan();
                }
            } else {
                if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
                    this.isWeb = true;
                    this.webScanActive = true;
                    this.webScan();
                } else {
                    this.cantScan = true;
                }
            }
        },
        webScan() {
            let detectionHash = {};
            const errorHandler = (err) => {
                if (err) {
                    console.log("ERRR!!!");
                    this.handleError('42');
                    return;
                }
                Quagga.start();
            };
            const onDetected = (result) => {
                if(!detectionHash.hasOwnProperty(result.codeResult.code)) {
                    detectionHash[result.codeResult.code] = 1;
                } else {
                    detectionHash[result.codeResult.code]++;
                }
                if(detectionHash[result.codeResult.code] >= 8) {
                    detectionHash = {};
                    this.$store.dispatch('setBarcode', result.codeResult.code);
                    Quagga.stop()
                    this.handleBarcodeSubmit();
                }
            };
            const onProcessed = (result) => {
                const drawingCtx = Quagga.canvas.ctx.overlay;
                const drawingCanvas = Quagga.canvas.dom.overlay;
                if (result) {
                    if (result.boxes) {
                        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
                        result.boxes.filter(box => box !== result.box).forEach((box) => {
                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 });
                        });
                    }
                    if (result.box) {
                        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
                    }
                    if (result.codeResult && result.codeResult.code) {
                        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                    }
                }
            };
            Quagga.onDetected(onDetected);
            Quagga.onProcessed(onProcessed);
            Quagga.init({
                inputStream: {
                    name: 'Barcode scannen',
                    type: 'LiveStream',
                    target: document.querySelector('#scan__video'),
                },
                locator: {
                    patchSize: 'medium',
                    halfSample: true,
                },
                numOfWorkers: window.navigator.hardwareConcurrency || 1,
                locate: true,
                decoder: {
                    readers: ['ean_reader', 'ean_8_reader'],
                    debug: {
                        drawBoundingBox: true,
                        drawScanline: true,
                        showPattern: true,
                    },
                }
            }, errorHandler);
        },
        handleBarcodeSubmit() {
            if (Barcoder.validate(this.barcode)) {
                var history = this.$store.getters.history;
                var found = 0;
                if(history.length) {
                    found = history.filter(itm => {
                        return itm.barcode == this.barcode;
                    }).length;
                }
                if(!found > 0) {
                    this.$router.push('/product');
                } else {
                    this.handleError('88');
                }
                return true;
            } else {
                this.handleError('0815');
                return false;
            }
        },
        nativeScan() {
            window.cordova.plugins.barcodeScanner.scan((result) => {
                if (result.cancelled) return
                this.$store.dispatch('setBarcode', result.text)
                this.handleBarcodeSubmit()
            }, (error) => {
                this.handleError('42')
            }, {
                preferFrontCamera: false, // iOS and Android
                showFlipCameraButton: true, // iOS and Android
                showTorchButton: true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                prompt: "Plazieren sie den Barcode innerhalb des Rechtecks", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: "EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                disableAnimations: true, // iOS
                disableSuccessBeep: false // iOS
            });
        }
    }
};
</script>

<style lang="scss">
.sponsors {
    padding: 20px 0;
    &__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    &__item {
        width: 20%;
        padding: 10px;
        img {
            max-width: 100%;
            height: auto;
        }
    }
}
.helper {
    $context: &;
    position: absolute;
    border: none;
    background: transparent;
    font-family: 'Slabo 27px';
    font-weight: normal;
    font-size: 20px;
    outline: none;
    display: flex;
    top: -20px;
    right: -20px;
    &__title {
        overflow: hidden;
        display: inline-block;
        max-width: 0px;
        color: #f86259;
        white-space: nowrap;
        transition: all .3s ease-in;
        text-decoration: underline;
        background: rgba(255, 255, 255, .95);
        #{$context}:hover & {
            max-width: 300px;
            padding: 0 5px;
        }
    }
    &__icon {
        font-family: 'Slabo 27px';
        background: rgba(#f86259,.8);
        top: 11vh;
        color: #fff;
        width: 30px;
        height: 30px;
        font-size: 23px;
        display: inline-block;
        border-radius: 50%;
    }
}
.scan {
    text-align: center;
    margin-top: 10px;
    &__headline {
        position: relative;
    }
    &__button {
        background-color: #f76259;
        width: 40vw;
        height: 40vw;
        max-width: 360px;
        max-height: 360px;
        border-radius: 50%;
        border: none;
        outline: none;
        border: 10px solid rgba(0, 0, 0, .17);
        margin: 2vh 0;
        transition: background-color .2s ease-in;
        &:active, &:focus {
            background-color: #fff;
        }
    }
    &__icon {
        fill: #fff;
        width: 24vw;
        height: 24vw;
        max-width: 320px;
        max-height: 320px;
        position: relative;
        top: 3vw;
    }
    &__close {
        position: absolute;
        right: 0;
        top: 12vh;
    }
    &__container {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 998;
        background: rgba(255, 255, 255, .95);
    }
    &__video {
        position: absolute;
        top: 22vh;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        video, canvas {
            max-width: 100%;
            width: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 999;
        }
    }
}
.top {
    width: 100%;
}
.left, .right {
    @include bp(medium) {
        width: 50%;
    }
}
</style>

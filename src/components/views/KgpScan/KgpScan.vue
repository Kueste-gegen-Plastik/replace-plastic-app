<template>
    <div class="step step--2" id="step_2">
        <svg class="symbols" width="52" height="65" version="1.1" x="0px" y="0px" viewBox="0 0 52 65">
            <symbol id="scan" x="0px" y="0px" width="52" height="65" viewBox="0 0 52 65">
                <path d="M39.9183998,21H12.0815001C11.4853001,21,11,20.5146008,11,19.9188995V15c0-1.1026001,0.8969002-2,2-2h26    c1.1030006,0,2,0.8973999,2,2v4.9188995C41,20.5146008,40.5145988,21,39.9183998,21z M13,19h26v-4H13V19z"
                />
                <path d="M26,50c-3.8598995,0-7-3.1405983-7-7V29.3799l-7.7475996-8.7159004l1.4951-1.3281002L21,28.6201V43    c0,2.7568016,2.2430992,5,5,5c2.7567997,0,5-2.2431984,5-5V28.6201l8.2523994-9.2842'007'l1.4951019,1.3281002L33,29.3799V43    C33,46.8594017,29.8598003,50,26,50z"
                />
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
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                Produkt scannen
            </span>
        </h2>
        <div class="step__inner">
            <hr class="waves" />
            <form v-on:submit.prevent="handleBarcodeSubmit" name="fallbackform" class="form" method="post">
                <div v-if="!error" class="scan">
                    <button type="button" class="scan__button" v-on:click="startScan">
                        <svg class="scan__icon" x="0px" y="0px" width="52" height="65" viewBox="0 0 52 65">
                            <use xlink:href="#scan"></use>
                        </svg>
                    </button>
                </div>
                <div class="scan__fallback">
                    <h3 v-if="!error" class="headline headline--tertiary">
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
                </div>
            </form>
        </div>
        <div v-show="showScan" class="scan__container">
            <button v-on:click.prevent="closeWebAppScan()" class="scan__close form__button">Scanner schließen</button>
            <div class="scan__video" id="scan__video"></div>
        </div>
    </div>
</template>

<script>
// import Quagga from 'quagga';
import Api from '@/api';
import Barcoder from 'barcoder';
import KgpError from '@/components/shared/KgpError/KgpError';

export default {
    name: 'kgp-scan',
    components: {
        KgpError
    },
    data() {
        return {
            showScan: false,
            cantScan: false,
            isValidEan: false
        };
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 1);
    },
    computed: {
        barcode() {
            return this.$store.getters.barcode;
        },
        error() {
            return this.$store.getters.error;
        }
    },
    methods: {
        handleError(code) {
            this.$store.dispatch('setError', code);
        },
        updateBarcode(e) {
            this.$store.dispatch('setBarcode', e.target.value);
        },
        startScan() {
            this.err = false;
            // handle native app scanning
            if (typeof window.cordova !== 'undefined' && Object.prototype.hasOwnProperty.call(window.cordova.plugins, 'barcodeScanner')) {
                // android 6+ has a new permission system. hooray.
                if (device.platform == 'Android' && parseInt(device.version.substr(0, 1)) >= 6) {
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
                        this.handleError('007');
                    });
                } else {
                    this.nativeScan();
                }
            } else {
                // @TODO handle webapp scanning
                //  this.webappScan();
            }
        },
        handleBarcodeSubmit() {
            if (Barcoder.validate(this.barcode)) {
                this.$router.push('/product');
                return true;
            } else {
                this.handleError('0815');
                return false;
            }
        },
        nativeScan() {
            cordova.plugins.barcodeScanner.scan((result) => {
                if (result.cancelled) return;
                this.$store.dispatch('setBarcode', result.text);
                this.handleBarcodeSubmit()
            }, (error) => {
                this.handleError('42');
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
        },
        closeWebAppScan() {
            Quagga.stop();
            this.showScan = false;
        },
        /*webappScan() {
            this.showScan = true;
            const errorHandler = (err) => {
                if (err) {
                    this.handleError('42');
                    return;
                }
                Quagga.start();
            };
            const onDetected = (data) => {
                this.$store.dispatch('setBarcode', data.codeResult.code);
                this.handleBarcodeSubmit();
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
                numOfWorkers: 1, //@TODO: implement https://github.com/oftn-oswg/core-estimator
                locate: true,
                decoder: {
                    readers: ['ean_reader'],
                    debug: {
                        drawBoundingBox: true,
                        drawScanline: true,
                        showPattern: true,
                    },
                },
                onDetected,
                errorHandler,
            });
        },*/
    }
};
</script>

<style lang="scss">
.scan {
    text-align: center;
    margin-top: 10px;
    &__button {
        background: #f76259;
        width: 40vw;
        height: 40vw;
        border-radius: 50%;
        border: none;
        outline: none;
        border: 10px solid rgba(0, 0, 0, .17);
        margin: 2vh 0;
        animation: BUBBLE;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-style: flat;
        transition: background .2s ease-in;
        &:active, &:focus {
            background: #fff;
        }
    }
    &__icon {
        fill: #fff;
        width: 24vw;
        height: 24vw;
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
        top: 35%;
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
        canvas {
        }
    }
}
@keyframes BUBBLE {
    0% {
        transform: scale3d(1,1,0);
    }
    50% {
        transform: scale3d(1.2,1.2,0);
    }
    100% {
        transform: scale(1,1,0);
    }
}
</style>

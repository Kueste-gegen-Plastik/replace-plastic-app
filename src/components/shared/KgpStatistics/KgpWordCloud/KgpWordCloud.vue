<template>
    <div class="wordcloud">
        <vue-word-cloud :words="data"
        :font-family="'Lato'"
        :font-size-ratio="2"
        :rotation="0"
        :rotationUnit="'deg'"
        :spacing="1.2"
        :color="([, weight]) => weight > 10 ? 'rgba(255,255,255,1)' : weight > 5 ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.6)'"></vue-word-cloud>
    </div>
</template>
<script>
import VueWordCloud from 'vuewordcloud';
export default {
    components: {
        [VueWordCloud.name]: VueWordCloud,
    },
    props: ['data'],
    mounted() {
        console.log("DATA", this.data);
    }
}
</script>
<style lang="scss">
.wordcloud {
    min-height: 250px;
    position: relative;
    overflow: hidden;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-family: 'Lato', sans-serif !important;
    > div {
        position: absolute !important;
        width: calc(100% - 20px) !important;
        height: calc(100% - 20px) !important;
        top: 10px !important;
        left: 10px !important;
        right: 10px !important;
        bottom: 10px !important;
    }
}
</style>


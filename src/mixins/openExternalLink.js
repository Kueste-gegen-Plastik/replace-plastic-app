import Vue from 'vue';

export const openExternalLink = Vue.mixin({
    methods: {
        openExternalLink: function (link) {
            if (process.env.VUE_APP_TARGET_OS === 'web') {
                window.open(link);
            } else {
                window.open(link, '_blank');
            }
        }
    }
});

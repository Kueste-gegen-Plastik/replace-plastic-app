import Vue from 'vue';

export const handleError = Vue.mixin({
    methods: {
        handleError: function (err) {
            console.log("ERR", err);
            let msg = err.hasOwnProperty('response') &&
                err.response &&
                err.response.hasOwnProperty('data') &&
                err.response.data.hasOwnProperty('code') ?
                err.response.data.code :
                4711;
            this.$store.dispatch('setError', msg);
            this.loading = false;
        }
    }
});

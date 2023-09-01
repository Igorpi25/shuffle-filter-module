var index = new Vue({
    router: new VueRouter(),
    el: '#app',
    methods: {
        getUrlParams() {
            return this.$route.query;
        },
        getChains() {
            return chains;
        },
        getResult() {
            return runScheme(this.scheme);
        },
    }
});

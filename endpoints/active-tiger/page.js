var page = new Vue({
    router: new VueRouter(),
    el: '#page',
    data:
    {
        scheme: chains[1].value,

    },
    methods: {
        getUrlParams() {
            return this.$route.query;
        },
        getSchemeResult() {
            return runScheme(this.scheme);
        }
    },

});

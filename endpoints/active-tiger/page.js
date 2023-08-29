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
        injectParamsToScheme() {
            let params = this.getUrlParams();

            this.scheme.params.incoming.user = params.user;
            this.scheme.params.incoming.place = params.place;
        },
        getSchemeResult() {
            this.injectParamsToScheme();
            return runScheme(this.scheme);
        }
    },

});

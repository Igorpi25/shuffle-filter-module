var index = new Vue({
    router: new VueRouter(),
    el: '#app',
    data: {
        scheme: {},
    },
    methods: {
        getUrlParams() {
            return this.$route.query;
        },
        getInjectedScheme() {
            let params = this.getUrlParams();

            let scheme = JSON.parse(JSON.stringify(this.scheme));

            scheme.params.incoming = {...scheme.params.incoming, ...params};

            return scheme;
        }
    },
    beforeMount() {
        this.scheme = chains[this.getUrlParams().index].value;
    }
});

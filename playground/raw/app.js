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
        getResult() {
            return runScheme(this.scheme);
        },
    },
    beforeMount() {
        if(this.$route.query.index === undefined) {
            this.$route.query.index = 0;
        }
        this.scheme = chains[this.getUrlParams().index].value;
    }
});

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
        this.scheme = chains[this.getUrlParams().index].value;
    }
});

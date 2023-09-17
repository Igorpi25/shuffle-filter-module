var eventHub = new Vue();

var app = new Vue({
    el: '#app',
    router: new VueRouter(),
    data:
    {
        scheme: {},
    },
    methods: {
        getUrlParams() {
            return this.$route.query;
        },
        setScheme(scheme) {
            this.scheme = scheme;
        }
    },
    created: function () {
        eventHub.$on('set-scheme', this.setScheme);
    },
    beforeMount() {
        if(this.$route.query.index === undefined) {
            this.$route.query.index = 0;
        }
        this.scheme = chains[this.getUrlParams().index].value;
    },
});

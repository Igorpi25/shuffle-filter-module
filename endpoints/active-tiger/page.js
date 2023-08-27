var page = new Vue({
    el: '#page',
    data:
    {
        scheme: chains[1].value,

    },
    methods: {
        getSchemeResult() {
            return runScheme(this.scheme);
        }
    },

});

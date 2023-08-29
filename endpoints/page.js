var page = new Vue({
    router: new VueRouter(),
    el: '#page',
    methods: {
        getSchemeByIndex(index) {
            return chains[index].value;
        },
    },
});

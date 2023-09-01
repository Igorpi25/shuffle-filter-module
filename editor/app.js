var app = new Vue({
    el: '#app',
    router: new VueRouter(),
    data:
    {
        runSchemeResult: '(runSchemeResult)',
        message: '(nothing selected)',
        scheme: {},
        selectedItem: {},
    },
    computed: {
        selectedItemIsNotEmpty() {
            return Object.keys(this.selectedItem || {}).length
        },
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
        },
        getUrlParams() {
            return this.$route.query;
        },
    },
    beforeMount() {
        if(this.$route.query.index === undefined) {
            this.$route.query.index = 0;
        }
        this.scheme = chains[this.getUrlParams().index].value;
    }
});

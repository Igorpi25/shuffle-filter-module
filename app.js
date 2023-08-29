var app = new Vue({
    el: '#app',
    data:
    {
        runSchemeResult: '(runSchemeResult)',
        message: '(nothing selected)',
        scheme: chains[2].value,
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
    },
});

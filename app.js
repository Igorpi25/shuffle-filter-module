var app = new Vue({
    el: '#app',
    data() {
        return {
            runSchemeResult: '(runSchemeResult)',
            message: '(nothing selected)',
            selectedItem: Object,
            scheme: MainChain,
            secondScheme: SecondChain
        };
    },
    methods: {
        onFocus: function () {
            this.selectedItem = {}
        },
        onSelectedChange(item) {
            this.selectedItem = item;
        }
    },
});

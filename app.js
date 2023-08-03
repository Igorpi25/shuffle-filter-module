var app = new Vue({
    el: '#app',
    data() {
        return {
            runSchemeResult: '(runSchemeResult)',
            message: '(nothing selected)',
            selectedScheme: {},
            selectedItem: {},
        };
    },
    computed: {
        varsOfSchemes() {
            return chains || []
        },
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
        }
    },
});

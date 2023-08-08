var app = new Vue({
    el: '#app',
    data:
    {
        runSchemeResult: '(runSchemeResult)',
        message: '(nothing selected)',
        selectedScheme: chains[0].value,
        selectedItem: {},
    },
    computed: {
        varsOfSchemes() {
            return chains || []
        },
        serializedLocal() {
            return 'params' in this.selectedScheme ? JSON.stringify(this.selectedScheme.params?.local || {}) : {}
        },
        serializedIncoming() {
            return 'incoming' in this.selectedScheme ? JSON.stringify(this.selectedScheme.params?.incoming || {}) : {}
        },
        selectedItemIsNotEmpty() {
            return Object.keys(this.selectedItem || {}).length
        },
        appSchemeResult() {
            return runScheme(this.selectedScheme);
        }
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
        },
        getSchemeResult() {
            if (Object.keys(this.selectedScheme || {}).length) {
                return runScheme(this.selectedScheme);
            } else {
                return 'false';
            }
        },
        onChangeSelectedScheme() {
            this.selectedItem = {}
        }
    },
});

var app = new Vue({
    el: '#app',
    data:
    {
        runSchemeResult: '(runSchemeResult)',
        message: '(nothing selected)',
        selectedScheme: chains[0].value,
        selectedItem: {},
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            'user': ['cafe', 'kids', 'family'],
            'place': ['cafe', 'coffe', 'tea', 'chicken', 'pizza', 'latte', 'free-hot-water'],
        },
    },
    computed: {
        varsOfSchemes() {
            return chains || []
        },
        serializedLocal() {
            return JSON.stringify(this.local || {})
        },
        serializedIncoming() {
            return JSON.stringify(this.incoming || {})
        }
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
        }
    },
});

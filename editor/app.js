var app = new Vue({
    el: '#app',
    router: new VueRouter(),
    data:
    {
        message: '(nothing selected)',
        scheme: {},
        selectedItem: {},
        savedSchemes: [],
    },
    watch: {
        savedSchemes(newValue) {
            const parsed = JSON.stringify(newValue);
            localStorage.savedSchemes = parsed;
        },
    },
    computed: {
        selectedItemIsNotEmpty() {
            return Object.keys(this.selectedItem || {}).length
        },
        runSchemeResult() {
            return runScheme(this.scheme);
        },
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
        },
        getUrlParams() {
            return this.$route.query;
        },
        saveSchemeInLocaleStorage() {
            this.scheme.savedAt = Date();
            this.savedSchemes.push(JSON.parse(JSON.stringify(this.scheme)));
        },
        loadSchemeFromLocaleStorage(index) {
            let loadedScheme = this.savedSchemes[index];
            this.scheme = JSON.parse(JSON.stringify(loadedScheme));
        },
        updateSchemeInLocaleStorage(index) {
            this.savedSchemes[index]=JSON.parse(JSON.stringify(this.scheme));
        },
        deleteSchemeFromLocaleStorage(index) {
            this.savedSchemes.splice(index, 1);
        }
        
    },
    beforeMount() {
        if(this.$route.query.index === undefined) {
            this.$route.query.index = 0;
        }
        this.scheme = chains[this.getUrlParams().index].value;
    },
    mounted() {
        if (localStorage.getItem('savedSchemes')) {
            try {
              this.savedSchemes = JSON.parse(localStorage.getItem('savedSchemes'));
            } catch(e) {
              console.log("loadSchemeFromLocaleStorage e="+e);
            }
        }
    },
});

var app = new Vue({
    el: '#app',
    router: new VueRouter(),
    data:
    {
        message: '(nothing selected)',
        scheme: {},
        selectedItem: {},
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
            const parsed = JSON.stringify(this.scheme);
            localStorage.setItem('scheme', parsed);
        },
        loadSchemeFromLocaleStorage() {
            if (localStorage.getItem('scheme')) {
                try {
                  this.scheme = JSON.parse(localStorage.getItem('scheme'));
                } catch(e) {
                  //localStorage.removeItem('scheme');
                  console.log("loadSchemeFromLocaleStorage e="+e);
                }
              }
        },
        getSavedAt() {
            if (localStorage.getItem('scheme')) {
                try {
                  let savedScheme = JSON.parse(localStorage.getItem('scheme'));
                  return savedScheme.savedAt;
                } catch(e) {
                  //localStorage.removeItem('scheme');
                  console.log("loadSchemeFromLocaleStorage e="+e);
                }
            } else {
                return '(no saved scheme)';
            }

        }
        
    },
    beforeMount() {
        if(this.$route.query.index === undefined) {
            this.$route.query.index = 0;
        }
        this.scheme = chains[this.getUrlParams().index].value;
    }
});

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
        savedSchemes: {
            handler(newValue, oldValue) {
                const parsed = JSON.stringify(newValue);
                localStorage.savedSchemes = parsed;
            },
            deep: true,
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
            console.log('updateSchemeInLocaleStorage');
            this.scheme.savedAt = Date();
            this.savedSchemes.splice(index, 1, JSON.parse(JSON.stringify(this.scheme)));
        },
        deleteSchemeFromLocaleStorage(index) {
            this.savedSchemes.splice(index, 1);
        },
        downloadScheme() {
            function download(content, fileName, contentType) {
                var a = document.createElement("a");
                var file = new Blob([content], {type: contentType});
                a.href = URL.createObjectURL(file);
                a.download = fileName;
                a.click();
            }

            download(JSON.stringify(this.scheme), this.scheme.id+'.json', 'text/plain');
        },
        openScheme() {
            /**
             * Select file(s).
             * @param {String} contentType The content type of files you wish to select. For instance, use "image/*" to select all types of images.
             * @param {Boolean} multiple Indicates if the user can select multiple files.
             * @returns {Promise<File|File[]>} A promise of a file or array of files in case the multiple parameter is true.
             */
            function selectFile(contentType, multiple){
                return new Promise(resolve => {
                    let input = document.createElement('input');
                    input.type = 'file';
                    input.multiple = multiple;
                    input.accept = contentType;

                    input.onchange = () => {
                        let files = Array.from(input.files);
                        if (multiple)
                            resolve(files);
                        else
                            resolve(files[0]);
                    };

                    input.click();
                });
            }

            selectFile('text/json', false).then((file) => {
                var fr = new FileReader();
                fr.readAsText(file);
                fr.onload = (evt) => {
                    let uploadedScheme = JSON.parse(fr.result);
                    uploadedScheme.savedAt = Date();
                    this.scheme = uploadedScheme;
                }
            });

            

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

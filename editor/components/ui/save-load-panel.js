Vue.component('save-load-panel', {
    props: ['scheme'],
    data() {
        return {
            savedSchemes: [],
        }
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
    methods: {
        saveSchemeInLocaleStorage() {
            this.$props.scheme.savedAt = Date();
            this.savedSchemes.push(JSON.parse(JSON.stringify(this.$props.scheme)));
        },
        loadSchemeFromLocaleStorage(index) {
            let loadedScheme = this.savedSchemes[index];
            eventHub.$emit('set-scheme', JSON.parse(JSON.stringify(loadedScheme)));
        },
        updateSchemeInLocaleStorage(index) {
            this.$props.scheme.savedAt = Date();
            this.savedSchemes.splice(index, 1, JSON.parse(JSON.stringify(this.$props.scheme)));
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

            download(JSON.stringify(this.$props.scheme), this.$props.scheme.id+'.json', 'text/plain');
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
                    this.$props.scheme = uploadedScheme;
                }
            });
        }
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
    template: `
    <div>
        <div class="flex bg-gray-200 p-2 rounded-b-lg">
            <h2 class="text-bold">File</h2>
        </div>
        <div class="flex flex-col p-2 space-y-2">
            <button @click="downloadScheme()" class="px-6 py-1 bg-yellow-300 hover:bg-blue-200 text-amber-950 font-semibold rounded focus:outline-none focus:ring focus:bg-yellow-300">
                Save as ...
            </button>
            <button @click="openScheme()" class="px-6 py-1 bg-yellow-300 hover:bg-blue-200 text-amber-950 font-semibold rounded focus:outline-none focus:ring focus:bg-yellow-300">
                Open
            </button>
        </div>
        <div class="flex bg-gray-200 p-2 rounded-b-lg">
            <h2 class="text-bold">Local Storage</h2>
        </div>
        <div class="flex flex-col p-2 space-y-2">
            <div v-for="(item, index) in savedSchemes" class="flex flex-col">
                <div class="flex flex-col">
                    <span class="font-bold">{{item.id}}</span>
                    <span class="text-xs">{{item.savedAt}}</span>
                </div>
                <div class="flex">
                    <div>
                        <button @click="loadSchemeFromLocaleStorage(index)" class="text-xs p-1 bg-yellow-300 hover:bg-blue-200 text-amber-950 rounded focus:outline-none focus:ring focus:bg-yellow-300">
                            Load
                        </button>
                    </div>
                    <div class="flex flex-col grow items-end space-y-1">
                        <button @click="updateSchemeInLocaleStorage(index)" class="text-xs p-1 bg-yellow-300 hover:bg-blue-200 text-amber-950 rounded focus:outline-none focus:ring focus:bg-yellow-300">
                            Update
                        </button>
                        <button @click="deleteSchemeFromLocaleStorage(index)" class="text-xs p-1 bg-yellow-300 hover:bg-blue-200 text-amber-950 rounded focus:outline-none focus:ring focus:bg-yellow-300">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <button @click="saveSchemeInLocaleStorage()" class="px-6 py-1 bg-yellow-300 hover:bg-blue-200 text-amber-950 font-semibold rounded focus:outline-none focus:ring focus:bg-yellow-300">
                Add
            </button>
        </div>
    </div>
    `,
});

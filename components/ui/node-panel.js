Vue.component('node-panel', {
    props: ['local', 'incoming', 'schema', 'selectedItem'],
    data() {
        return {
        };
    },
    computed: {
        serializedSelectedItem() {
            return JSON.stringify(this.selectedItem);
        }
    },
    methods: {
        selectElementById(id) {
            return searchInSchemeById(this.$props.schema, id)
        },
        selectParentById(id) {
            return findParentShuffleElement(this.$props.schema, id)
        },
        getSchemeResult: function (scheme) {
            if (scheme) {
                return runScheme(scheme, this.$props.local, this.$props.incoming);
            }

            if (this.$props.selectedItem) {
                return runScheme(this.selectedItem, this.$props.local, this.$props.incoming);
            }
        },
        handlerOnMoveItem: function ({ direction, id }) {
            const parent = this.selectParentById(id)

            if (parent) {
                const index = this.selectedItem.id
                    ? parent.childs.findIndex((child) => child.id === this.selectedItem.id)
                    : parent.childs.findIndex((child) => child === this.selectedItem);

                if (-1 !== index) {
                    if (direction === "forward" && index < parent.childs.length - 1) {
                        parent.childs.splice(index, 1);
                        parent.childs.splice(index + 1, 0, this.selectedItem);
                    } else if (direction === "backward" && index > 0) {
                        parent.childs.splice(index, 1);
                        parent.childs.splice(index - 1, 0, this.selectedItem);
                    }
                }

                // Назначение стиля :focus на элемент с выбранным id
                this.$nextTick(() => {
                    const selectedItemElement = document.getElementById(this.selectedItem.id);
                    if (selectedItemElement) {
                        selectedItemElement.focus();
                    }
                });
            }
        },
        handlerOnRemoveItem: function (id) {
            const parent = this.selectParentById(id)

            if (parent) {
                const index = this.selectedItem.id
                    ? parent.childs.findIndex((child) => child.id === this.selectedItem.id)
                    : parent.childs.findIndex((child) => child === this.selectedItem);

                if (-1 !== index) {
                    parent.childs.splice(index, 1);
                }
            }
        },
    },
    template: `
    <div v-if="selectedItem" class="flex flex-col border-1 border">
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Properties</h2>
            </div>
            <div class="flex flex-col p-2">
                <div v-if="selectedItem.id">
                    <div v-if="'shuffle-filter' == selectedItem.type">
                        <input v-model="selectedItem.id" />
                    </div>
                    <span v-else>{{ selectedItem.id }}</span>
                    
                </div>

                <div v-if="selectedItem.type">
                    <span>{{ selectedItem.type }}</span>
                </div>

                <div v-if="selectedItem.result != null" class="text-gray-400">
                    <div v-if="'shuffle-filter' == selectedItem.type">
                        <input v-model="selectedItem.result" />
                    </div>
                    <span v-else>{{ selectedItem.result }}</span>
                </div>
            </div>           
        </div>

        <!-- Childs -->
        <div v-if="selectedItem.childs">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">
                    #{{ selectedItem.id }} childs
                </h2>
            </div>
            
            <div class="flex flex-col p-2">
                <div v-for="child in selectedItem.childs" :key="child.id">
                #{{ child.id }}: {{ child.type }} <span class="text-gray-400"> -> {{ getSchemeResult(child) }}</span>
                </div>
            </div>
        </div>

        <!-- Params -->
        <div v-for="param in selectedItem.params" :key="param.name">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">#{{ selectedItem.id }} param {{param.name}}</h2>
            </div>
            <div class="flex flex-col p-2">
                <div>
                    name: {{ param.name }}
                </div>
                <div>
                    type: {{ param.type }}
                </div>
                <div>
                    source: {{param.source}}
                </div>
                <div v-if="param.key">
                    key: {{param.key}}
                </div>
                <div v-if="param.source=='inline'">
                    inline-value: {{param.value}}
                </div>
                <div v-if="param.source=='local'" class="text-gray-400">
                    local-value: {{local[param.key]}}
                </div>
                <div v-if="param.source=='incoming'" class="text-gray-400">
                    incoming-value: {{incoming[param.key]}}
                </div>
            </div>
        </div>

        <!-- Result -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">#{{ selectedItem.id }} result</h2>
            </div>
            <div class="flex flex-col p-2">
                <div>
                    getSchemeResult = {{ getSchemeResult(selectedItem) }}
                </div>
            </div>
        </div>

        <!-- Operations -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">#{{ selectedItem.id }} operations</h2>
            </div>
            <div class="flex flex-col p-2">
                <node-moving-subpanel :selected-item="selectedItem" @on-move-item="handlerOnMoveItem" @on-remove-item="handlerOnRemoveItem" />
            </div>
        </div>

        <!-- Selected item dump -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">#{{ selectedItem.id }} raw</h2>
            </div>
            <div class="flex flex-col p-2">
                <collapse-extend-text :text="serializedSelectedItem" :maxLength="10" />
            </div>
        </div>
    </div>
    `,
});


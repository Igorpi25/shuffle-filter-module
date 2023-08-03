Vue.component('node-panel', {
    props: {
        schema: Object,
        selectedItem: Object,
    },
    data() {
        return {
        };
    },
    computed: {
        serializedSelectedItem() {
            return JSON.stringify(this.selectedItem);
        },
    },
    methods: {
        selectElementById(id) {
            return searchInSchemeById(this.$props.schema, id)
        },
        selectParentById(id) {
            return findParentShuffleElement(this.$props.schema, id)
        },
        getSchemeResult: function (scheme) {
            return runScheme(scheme);
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
        <div v-if="selectedItem.childs">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">
                    <span class="capitalize">{{ selectedItem.type }}</span> childs
                </h2>
            </div>
            
            <div class="flex flex-col p-2">
                <div v-for="child in selectedItem.childs" :key="child.id">
                {{ child.id }}: {{ child.type }} <span class="text-gray-400"> -> {{ getSchemeResult(child) }}</span>
                </div>
            </div>
        </div>
        <div class="flex bg-gray-200 p-2 rounded-b-lg">
            <h2 class="text-bold">Result</h2>
        </div>
        <div class="flex flex-col p-2 small">
            <div>getSchemeResult: {{ getSchemeResult(selectedItem) }}</div>
        </div>
        <div class="flex bg-gray-200 p-2 rounded-b-lg">
            <h2 class="text-bold">Операции</h2>
        </div>
        <div class="flex flex-col p-2">
            <node-moving-subpanel :selected-item="selectedItem" @on-move-item="handlerOnMoveItem" @on-remove-item="handlerOnRemoveItem" />
        </div>
        <div class="flex bg-gray-200 p-2 rounded-b-lg">
            <h2 class="text-bold">Выбранный элемент</h2>
        </div>
        <div class="flex flex-col p-2">
            <collapse-extend-text :text="serializedSelectedItem" :maxLength="10" />
        </div>
    </div>
    `,
});


Vue.component('node-panel', {
    props: {
        selectedItem: Object,
    },
    data() {
        return {
        };
    },
    methods: {
        getSchemeResult: function (scheme) {
            return runScheme(scheme);
        }
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
        <div class="flex flex-col p-2">
            <div>getSchemeResult: {{ getSchemeResult(selectedItem) }}</div>
        </div>
        <div class="flex flex-col p-2">
            {{ selectedItem }}
        </div>
    </div>
    `,
});


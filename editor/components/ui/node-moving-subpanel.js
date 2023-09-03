Vue.component('node-moving-subpanel', {
    props: {
        selectedItem: Object,
    },
    emits: ['on-move-item', 'on-remove-item'],
    data() {
        return {
            newItemType: "shuffle-column",
        };
    },
    methods: {
        addNewItem() {
            switch (this.newItemType) {
                case "shuffle-column":
                    return this.addNewColumnItem()
                case "shuffle-row":
                    return this.addNewRowItem()
                case "shuffle-filter":
                    return this.addNewFilterItem()
                default:
                    throw new Error(`Unsupported type ${this.newItemType} for operate.`)
            }
        },
        addNewFilterItem() {
            const newItem = {
                id: Math.random().toString(36).substr(2, 3),
                type: this.newItemType,
                result: !!Math.random(),
            };
            this.selectedItem.childs.push(newItem);
        },
        addNewColumnItem() {
            const newItem = {
                id: Math.random().toString(36).substr(2, 3),
                type: this.newItemType,
                childs: [],
            };
            this.selectedItem.childs.push(newItem);
        },
        addNewRowItem() {
            const newItem = {
                id: Math.random().toString(36).substr(2, 3),
                type: this.newItemType,
                childs: [],
            };
            this.selectedItem.childs.push(newItem);
        },
        moveItem(directionName) {
            this.$emit("on-move-item", { direction: directionName, id: this.selectedItem.id })
        },
        deleteItem() {
            this.$emit("on-remove-item", this.selectedItem.id)
        },
    },
    template: `
    <div v-if="selectedItem.type" class="node-moving-subpanel">
        <div v-if="selectedItem.type === 'shuffle-column' || selectedItem.type === 'shuffle-row'">
            <p>New</p>
            <div class="add-new-item">
                <select v-model="newItemType">
                    <option value="shuffle-column">shuffle-column</option>
                    <option value="shuffle-row">shuffle-row</option>
                    <option value="shuffle-filter">shuffle-filter</option>
                </select>
                <button @click="addNewItem" class="px-6 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg focus:outline-none focus:ring focus:border-blue-300">Add new</button>
            </div>
        </div>

        <div v-if="selectedItem.type === 'shuffle-filter'">
            <p>Move</p>
            <div class="move-item">
                <button @click="moveItem('forward')" class="px-6 py-1 bg-yellow-300 hover:bg-yellow-200 text-amber-950 font-semibold rounded focus:outline-none focus:ring focus:bg-yellow-300">Forward</button>
                <button @click="moveItem('backward')" class="px-6 py-1 bg-lime-600 hover:bg-lime-500 text-white font-semibold rounded focus:outline-none focus:ring focus:bg-lime-600">Backward</button>
            </div >
        </div>

        <div>
            <p>Delete</p>
            <div class="move-item">
                <button @click="deleteItem" class="px-6 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded focus:outline-none focus:ring focus:border-red-300">Delete</button>
            </div >
        </div>
    </div>
    `,
});

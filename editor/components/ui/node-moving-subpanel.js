Vue.component('node-moving-subpanel', {
    props: {
        selectedElement: Object,
    },
    emits: ['on-move-element', 'on-remove-element'],
    data() {
        return {
            newElementType: "shuffle-column",
        };
    },
    methods: {
        addNewElement() {
            switch (this.newElementType) {
                case "shuffle-column":
                    return this.addNewColumnElement()
                case "shuffle-row":
                    return this.addNewRowElement()
                case "shuffle-filter":
                    return this.addNewFilterElement()
                default:
                    throw new Error(`Unsupported type ${this.newElementType} for operate.`)
            }
        },
        addNewFilterElement() {
            const newElement = {
                id: Math.random().toString(36).substr(2, 3),
                type: this.newElementType,
                result: !!Math.random(),
            };
            this.selectedElement.childs.push(newElement);
        },
        addNewColumnElement() {
            const newElement = {
                id: Math.random().toString(36).substr(2, 3),
                type: this.newElementType,
                childs: [],
            };
            this.selectedElement.childs.push(newElement);
        },
        addNewRowElement() {
            const newElement = {
                id: Math.random().toString(36).substr(2, 3),
                type: this.newElementType,
                childs: [],
            };
            this.selectedElement.childs.push(newElement);
        },
        moveElement(directionName) {
            this.$emit("on-move-element", { direction: directionName, id: this.selectedElement.id })
        },
        deleteElement() {
            this.$emit("on-remove-element", this.selectedElement.id)
        },
    },
    template: `
    <div v-if="selectedElement.type">
        <div v-if="selectedElement.type === 'shuffle-column' || selectedElement.type === 'shuffle-row'">
            <p>New</p>
            <div class="add-new-element">
                <select v-model="newElementType">
                    <option value="shuffle-column">shuffle-column</option>
                    <option value="shuffle-row">shuffle-row</option>
                    <option value="shuffle-filter">shuffle-filter</option>
                </select>
                <button @click="addNewElement" class="px-6 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg focus:outline-none focus:ring focus:border-blue-300">Add new</button>
            </div>
        </div>

        <div>
            <p>Move</p>
            <div class="move-element">
                <button @click="moveElement('backward')" class="px-6 py-1 bg-lime-600 hover:bg-lime-500 text-white font-semibold rounded focus:outline-none focus:ring focus:bg-lime-600">Backward</button>
                <button @click="moveElement('forward')" class="px-6 py-1 bg-yellow-300 hover:bg-yellow-200 text-amber-950 font-semibold rounded focus:outline-none focus:ring focus:bg-yellow-300">Forward</button>
            </div >
        </div>

        <div>
            <p>Delete</p>
            <div class="move-element">
                <button @click="deleteElement" class="px-6 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded focus:outline-none focus:ring focus:border-red-300">Delete</button>
            </div >
        </div>
    </div>
    `,
});


Vue.component('node-panel', {
    props: ['scheme'],
    data() {
        return {
            inlineParamValue: '',
            selectedElement: {},
        };
    },
    computed: {
        serializedSelectedElement() {
            return JSON.stringify(this.selectedElement);
        }
    },
    watch: {
        selectedElement: {
            immediate: true,
            handler(newSelectedElement) {
                if (newSelectedElement && newSelectedElement.params) {
                    const inlineParam = newSelectedElement.params.find((param) => param.source === 'inline');
                    if (inlineParam) {
                        this.inlineParamValue = inlineParam.value;
                    }
                } else {
                    this.inlineParamValue = null;
                }
            },
        },
    },
    methods: {
        selectElement(element) {
            this.selectedElement = element;
        },
        selectParentById(id) {
            return findParentByChildId(this.$props.scheme.scheme, id)
        },
        getElementResult: function (element) {
            if (element) {
                return runElement({scheme: this.$props.scheme, element: element});
            }

            if (this.selectedElement) {
                return runElement({scheme: this.$props.scheme, element: this.selectedElement});
            }
        },
        handlerOnMoveElement: function ({ direction, id }) {
            const parent = this.selectParentById(id)

            const blinkMeAndFocus = () => {
                this.$nextTick(() => {
                    const selectedDOMElement = document.getElementById(this.selectedElement.id);
                    if (selectedDOMElement) {
                        selectedDOMElement.classList.add('blink-animation');
                        setTimeout(() => {
                            selectedDOMElement.classList.remove('blink-animation');
                            selectedDOMElement.focus();
                        }, 5000);
                    }
                });
            }

            if (parent) {
                const index = this.selectedElement.id
                    ? parent.childs.findIndex((child) => child.id === this.selectedElement.id)
                    : parent.childs.findIndex((child) => child === this.selectedElement);

                if (-1 !== index) {
                    if (direction === "forward" && index < parent.childs.length - 1) {
                        parent.childs.splice(index, 1);
                        parent.childs.splice(index + 1, 0, this.selectedElement);

                        blinkMeAndFocus();
                    } else if (direction === "backward" && index > 0) {
                        parent.childs.splice(index, 1);
                        parent.childs.splice(index - 1, 0, this.selectedElement);

                        blinkMeAndFocus();
                    }
                }
            }
        },
        handlerOnRemoveElement: function (id) {
            const parent = this.selectParentById(id)

            if (parent) {
                const index = this.selectedElement.id
                    ? parent.childs.findIndex((child) => child.id === this.selectedElement.id)
                    : parent.childs.findIndex((child) => child === this.selectedElement);

                if (-1 !== index) {
                    parent.childs.splice(index, 1);
                }
            }

            eventHub.$emit('on-select-element', {});
        },
        saveInlineParamValue() {
            if (this.selectedElement && this.selectedElement.params) {
                const inlineParam = this.selectedElement.params.find((param) => param.source === 'inline');
                try {
                    const newValueAsArr = String(this.inlineParamValue).split(',').map(v => String(v).trim()).filter(v => v !== undefined);
                    if (inlineParam && Array.isArray(newValueAsArr)) {
                        inlineParam.value = newValueAsArr;
                    }
                } catch (error) {
                    throw new Error(`Ошибка при обновлении значения свойства!`)
                }
            }
        },
    },
    created: function () {
        eventHub.$on('on-select-element', this.selectElement);
    },
    template: `
    <div v-if="selectedElement" class="flex flex-col border-1 border">
        <!-- Properties -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Properties</h2>
            </div>
            <div class="flex flex-col p-2">
                <div v-if="selectedElement.id!=null">
                    <div v-if="'shuffle-filter' == selectedElement.type">
                        <input v-model="selectedElement.id" />
                    </div>
                    <span v-else>id: {{ selectedElement.id }}</span>
                    
                </div>

                <div v-if="selectedElement.type">
                    <span>type: {{ selectedElement.type }}</span>
                </div>

                <div v-if="selectedElement.result != null" class="text-gray-400">
                    <div v-if="'shuffle-filter' == selectedElement.type">
                        <input v-model="selectedElement.result" />
                    </div>
                    <span v-else>type: {{ selectedElement.result }}</span>
                </div>
            </div>           
        </div>

        <!-- Childs -->
        <div v-if="selectedElement.childs">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">
                    Childs
                </h2>
            </div>
            
            <div class="flex flex-col p-2">
                <div v-for="child in selectedElement.childs" :key="child.id">
                    {{ child.type }} <span class="text-gray-400"> -> {{ getElementResult(child) }}</span>
                </div>
            </div>
        </div>

        <!-- Params -->
        <div v-for="param in selectedElement.params" :key="param.name">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Param: {{ param.name }}</h2>
            </div>

            <div class="flex flex-col p-2">
                <div>name: {{ param.name }}</div>
                <div>type: {{ param.type }}</div>
                <div>source: {{ param.source }}</div>

                <div v-if="param.key">key: {{ param.key }}</div>

                <!-- <div v-if="param.source == 'inline'">
                    <input v-model="inlineParamValue" @keydown.enter="saveInlineParamValue" />
                    <br /><span class="italic text-sm">(укажите значения свойства через запятую, чтобы сохранить новое значение - нажмите Enter)</span>
                </div> -->
                <div v-if="param.source == 'inline'">
                    inline-value: {{ param.value }}
                </div>
                <div v-else-if="param.source == 'local'" class="text-gray-400">
                    local-value: {{ scheme.params.local[param.key] }}
                </div>
                <div v-else-if="param.source == 'incoming'" class="text-gray-400">
                    incoming-value: {{ scheme.params.incoming[param.key] }}
                </div>
            </div>
        </div>

        <!-- Result -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Result</h2>
            </div>
            <div class="flex flex-col p-2">
                <div>
                    getElementResult = {{ getElementResult(selectedElement) }}
                </div>
            </div>
        </div>

        <!-- Operations -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Operations</h2>
            </div>
            <div class="flex flex-col p-2">
                <node-moving-subpanel :selected-element="selectedElement" @on-move-element="handlerOnMoveElement" @on-remove-element="handlerOnRemoveElement" />
            </div>
        </div>

        <!-- Selected element dump -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Raw</h2>
            </div>
            <div class="flex flex-col p-2">
                <collapse-extend-text :text="serializedSelectedElement" :maxLength="10" />
            </div>
        </div>
    </div>
    `,
});

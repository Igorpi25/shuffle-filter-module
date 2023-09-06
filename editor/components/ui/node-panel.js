Vue.component('node-panel', {
    props: ['local', 'incoming', 'schema', 'selectedItem'],
    data() {
        return {
            inlineParamValue: '',
        };
    },
    computed: {
        serializedSelectedItem() {
            return JSON.stringify(this.selectedItem);
        }
    },
    watch: {
        selectedItem: {
            immediate: true,
            handler(newSelectedItem) {
                if (newSelectedItem && newSelectedItem.params) {
                    const inlineParam = newSelectedItem.params.find((param) => param.source === 'inline');
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
        selectElementById(id) {
            return findChildById(this.$props.schema, id)
        },
        selectParentById(id) {
            return findParentByChildId(this.$props.schema, id)
        },
        getSchemeResult: function (scheme) {
            if (scheme) {
                return runElement(scheme, this.$props.local || {}, this.$props.incoming || {});
            }

            if (this.$props.selectedItem) {
                return runElement(this.selectedItem, this.$props.local || {}, this.$props.incoming || {});
            }
        },
        handlerOnMoveItem: function ({ direction, id }) {
            const parent = this.selectParentById(id)

            const blinkMeAndFocus = () => {
                this.$nextTick(() => {
                    const selectedItemElement = document.getElementById(this.selectedItem.id);
                    if (selectedItemElement) {
                        selectedItemElement.classList.add('blink-animation');
                        setTimeout(() => {
                            selectedItemElement.classList.remove('blink-animation');
                            selectedItemElement.focus();
                        }, 5000);
                    }
                });
            }

            if (parent) {
                const index = this.selectedItem.id
                    ? parent.childs.findIndex((child) => child.id === this.selectedItem.id)
                    : parent.childs.findIndex((child) => child === this.selectedItem);

                if (-1 !== index) {
                    if (direction === "forward" && index < parent.childs.length - 1) {
                        parent.childs.splice(index, 1);
                        parent.childs.splice(index + 1, 0, this.selectedItem);

                        blinkMeAndFocus();
                    } else if (direction === "backward" && index > 0) {
                        parent.childs.splice(index, 1);
                        parent.childs.splice(index - 1, 0, this.selectedItem);

                        blinkMeAndFocus();
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
        saveInlineParamValue() {
            if (this.selectedItem && this.selectedItem.params) {
                const inlineParam = this.selectedItem.params.find((param) => param.source === 'inline');
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
    template: `
    <div v-if="selectedItem" class="flex flex-col border-1 border">
        <!-- Properties -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Properties</h2>
            </div>
            <div class="flex flex-col p-2">
                <div v-if="selectedItem.id!=null">
                    <div v-if="'shuffle-filter' == selectedItem.type">
                        <input v-model="selectedItem.id" />
                    </div>
                    <span v-else>id: {{ selectedItem.id }}</span>
                    
                </div>

                <div v-if="selectedItem.type">
                    <span>type: {{ selectedItem.type }}</span>
                </div>

                <div v-if="selectedItem.result != null" class="text-gray-400">
                    <div v-if="'shuffle-filter' == selectedItem.type">
                        <input v-model="selectedItem.result" />
                    </div>
                    <span v-else>type: {{ selectedItem.result }}</span>
                </div>
            </div>           
        </div>

        <!-- Childs -->
        <div v-if="selectedItem.childs">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">
                    Childs
                </h2>
            </div>
            
            <div class="flex flex-col p-2">
                <div v-for="child in selectedItem.childs" :key="child.id">
                    {{ child.type }} <span class="text-gray-400"> -> {{ getSchemeResult(child) }}</span>
                </div>
            </div>
        </div>

        <!-- Params -->
        <div v-for="param in selectedItem.params" :key="param.name">
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Param: {{ param.name }}</h2>
            </div>

            <div class="flex flex-col p-2">
                <div>name: {{ param.name }}</div>
                <div>type: {{ param.type }}</div>
                <div>source: {{ param.source }}</div>

                <div v-if="param.key">key: {{ param.key }}</div>

                <div v-if="param.source == 'inline'">
                    <input v-model="inlineParamValue" @keydown.enter="saveInlineParamValue" />
                    <br /><span class="italic text-sm">(укажите значения свойства через запятую, чтобы сохранить новое значение - нажмите Enter)</span>
                </div>
                <div v-else-if="param.source == 'local'" class="text-gray-400">
                    local-value: {{ local[param.key] }}
                </div>
                <div v-else-if="param.source == 'incoming'" class="text-gray-400">
                    incoming-value: {{ incoming[param.key] }}
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
                    getSchemeResult = {{ getSchemeResult(selectedItem) }}
                </div>
            </div>
        </div>

        <!-- Operations -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Operations</h2>
            </div>
            <div class="flex flex-col p-2">
                <node-moving-subpanel :selected-item="selectedItem" @on-move-item="handlerOnMoveItem" @on-remove-item="handlerOnRemoveItem" />
            </div>
        </div>

        <!-- Selected item dump -->
        <div>
            <div class="flex bg-gray-200 p-2 rounded-b-lg">
                <h2 class="text-bold">Raw</h2>
            </div>
            <div class="flex flex-col p-2">
                <collapse-extend-text :text="serializedSelectedItem" :maxLength="10" />
            </div>
        </div>
    </div>
    `,
});

Vue.component('shuffle-chain', {
    props: {
        schema: {
            type: Object,
            required: true,
        },
    },
    emits: ['on-select-item'],
    data: function () {
        return {}
    },
    methods: {
        onChildrenSelectItem(item) {
            if (item) {
                this.$emit("on-select-item", item)
            }
        },
        onSelectById(id) {
            var item = this.selectElementById(id);
            if (item) {
                this.$emit("on-select-item", item)
            }
        },
        selectElementById(id) {
            return findChildById(this.$props.schema, id)
        }
    },
    template: `
    <component :is="schema.type" :id="schema.id" @on-select-id="onSelectById">
        <template v-if="schema.childs">
            <shuffle-chain v-for="child in schema.childs" :key="child.id" :schema="child" :id="child.id" @on-select-item="onChildrenSelectItem"/>
        </template>
        <template v-if="schema.type === 'shuffle-aggregation-list'">
            <div v-for="param in schema.params">
                <div class="flex flex-col text-gray-500 text-sm">
                    <div class="">{{param.name}}</div>
                    <div>
                        <span class="text-xs"><{{param.source}}></span>
                        <span v-if="param.key" class="text-xs">key: '{{param.key}}'</span>
                    </div>
                </div>
            </div>
        </template>
    </component>
    `,
});


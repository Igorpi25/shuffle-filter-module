Vue.component('shuffle-chain', {
    props: {
        schema: {
            type: Object,
            required: true,
        },
    },
    emits: ['on-select-child'],
    data: function () {
        return {}
    },
    methods: {
        onSelectId(id) {
            eventHub.$emit('on-select-element', this.schema);
        },
    },
    template: `
    <component :is="schema.type" :id="schema.id" @on-select-id="onSelectId">
        <template v-if="schema.childs">
            <shuffle-chain v-for="child in schema.childs" :key="child.id" :schema="child" :id="child.id"/>
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


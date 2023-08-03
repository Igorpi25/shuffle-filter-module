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
            return searchInSchemeById(this.$props.schema, id)
        },
        getSchemeResult: function (scheme) {
            return runScheme(scheme);
        }
    },
    template: `
    <component :is="schema.type" :id="schema.id" @on-select-id="onSelectById">
        <template v-if="schema.childs">
            <shuffle-chain v-for="child in schema.childs" :key="child.id" :schema="child" :id="child.id" @on-select-item="onChildrenSelectItem"/>
        </template>
    </component>
    `,
});


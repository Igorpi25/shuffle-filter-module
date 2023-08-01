Vue.component('shuffle-chain', {
    props: {
        schema: {
            type: Object,
            required: true,
        },
    },
    data: function () {
        return {}
    },
    methods: {
        onFocus: function () {
            var item = this.selectElementById(this.id || this.schema.id);
            this.$emit("selected-item-changed", item);
        },
        onSelectedChange(item) {
            this.$emit("selected-item-changed", item)
        },
        selectElementById(id) {
            var item = searchInSchemeById(this.schema, id);
            this.$emit("selected-item-changed", item);
        },
        getSchemeResult: function (scheme) {
            return runScheme(scheme);
        }
    },
    template: `
    <component :is="schema.type" :id="schema.id">
        <template v-if="schema.childs">
            <shuffle-chain v-for="child in schema.childs" :key="child.id" :schema="child" :id="schema.id" @focus="onFocus" @selected-item-changed="onSelectedChange" />
        </template>
    </component>
    `,
});


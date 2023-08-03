Vue.component('shuffle-filter', {
    data: function () {
        return {}
    },
    emits: ['on-select-id'],
    methods: {
        onFocus: function () {
            this.$emit("on-select-id", this.id)
        },
    },
    props: ['id'],
    template: `
    <div @focus="onFocus" tabindex="-1" class="flex h-16 w-16 justify-center items-center bg-gray-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2">
        {{id}}
    </div>
    `,
});

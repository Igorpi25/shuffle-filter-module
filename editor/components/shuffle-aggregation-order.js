Vue.component('shuffle-aggregation-order', {
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
    <div @focus="onFocus" tabindex="-1" class="flex flex-col w-fit h-fit p-2 space-y-2 justify-center items-center bg-blue-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2"> 
        <slot></slot>
    </div>
    `,
});

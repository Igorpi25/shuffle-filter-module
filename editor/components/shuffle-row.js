Vue.component('shuffle-row', {
    data: function () {
        return {
        }
    },
    emits: ['on-select-id'],
    methods: {
        onFocus: function () {
            this.$emit("on-select-id", this.id)
        },
    },
    props: ['id'],
    template: `
    <div @focus="onFocus" tabindex="-1" :title="id" class="flex flex-col p-1 items-center bg-blue-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2">
        <div class="w-32 h-4 truncate text-xs text-gray-500">
            {{id}}
        </div>
        <div class="flex flex-row w-fit h-fit p-1 space-x-2 justify-center items-center"> 
            <slot></slot>
        </div>
    </div>
    `,
});

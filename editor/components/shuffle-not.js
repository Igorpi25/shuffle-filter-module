Vue.component('shuffle-not', {
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
    <div @focus="onFocus" tabindex="-1" class="flex flex-row w-fit h-fit p-2 space-x-2 justify-center items-center bg-red-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2"> 
        <slot></slot>
    </div>
    `,
});

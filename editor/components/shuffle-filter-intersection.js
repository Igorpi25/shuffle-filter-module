Vue.component('shuffle-filter-intersection', {
    data: function () {
        return {}
    },
    methods: {
        onFocus: function () {
            this.$emit("on-select-id", this.id)
        }
    },
    props: ['id'],
    template: `
    <div class="flex items-center">
        <div class="flex-none text-gray-400">-</div>
        <div @focus="onFocus" tabindex="-1" class="flex h-16 w-16 p-2 justify-center items-center bg-stone-300 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2">
            <span class="text-gray-600 text-center text-ellipsis text-xs">{{id}}</span>
        </div>
        <div class="flex-none text-gray-400">-</div>
    </div>
    `,
});
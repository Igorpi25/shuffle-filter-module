Vue.component('shuffle-column', {
    data: function () {
        return {}
    },
    methods: {
        onFocus: function () {
            if (typeof this.selectElementById === 'function') {
                this.selectElementById(this.id);
            }
        },
        selectElementById(id) {
            const parent = this.$parent;
            if (parent && parent?.schema && typeof this.selectElementById === 'function') {
                this.$parent.selectElementById(this.id);
            } else if (this.$root && this.$root?.schema && typeof this.$root.selectElementById === 'function') {
                this.$root.selectElementById(this.id);
            }
        },
    },
    props: ['id'],
    template: `
    <div @focus="onFocus" tabindex="-1" class="flex flex-col w-fit h-fit p-2 space-y-2 justify-center items-center bg-green-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2" > 
        <slot></slot>
    </div>
    `,
});

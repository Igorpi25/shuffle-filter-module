Vue.component('shuffle-row', {
    data: function () {
      return {}
    },
    methods: {
        onFocus: function() {
            this.$root.selectElementById(this.id);
        }
    },
    props: ['id'],
    template: `
    <div @focus="onFocus" tabindex="-1"class="flex flex-row w-fit h-fit p-2 space-x-2 justify-center items-center bg-blue-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2" > 
        <slot></slot>
    </div>
    `,
  });
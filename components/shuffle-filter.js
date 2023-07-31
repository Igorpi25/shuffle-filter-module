Vue.component('shuffle-filter', {
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
    <div @focus="onFocus" tabindex="-1" class="flex h-16 w-16 justify-center items-center bg-gray-100 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2">
        {{id}}
    </div>
    `,
  });
Vue.component('shuffle-filter-intersection', {
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
    <div class="flex items-center">
        <div class="flex-none text-gray-400">-</div>
        <div @focus="onFocus" tabindex="-1" class="flex h-16 w-16 justify-center items-center bg-stone-300 outline-indigo-600 outline-1 hover:outline-dashed focus:outline focus:outline-2">
            <span class="text-gray-600">{{id}}</span>
        </div>
        <div class="flex-none text-gray-400">-</div>
    </div>
    `,
  });
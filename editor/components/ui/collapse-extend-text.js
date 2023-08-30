Vue.component('collapse-extend-text', {
    props: {
        text: {
            type: String,
            required: true,
        },
        maxLength: {
            type: Number,
            default: 100,
        },
    },
    data() {
        return {
            expanded: false,
        };
    },
    computed: {
        truncatedText() {
            return this.expanded ? this.text : this.text.slice(0, this.maxLength);
        },
        showToggleButton() {
            return this.text.length > this.maxLength;
        },
    },
    methods: {
        toggleText() {
            this.expanded = !this.expanded;
        },
    },
    template: `
    <div>
      <p v-if="!expanded">{{ truncatedText }} <span v-if="showToggleButton" @click="toggleText" class="text-blue-500 cursor-pointer">...Read More</span></p>
      <p v-else>{{ text }} <span v-if="showToggleButton" @click="toggleText" class="text-blue-500 cursor-pointer">Read Less</span></p>
    </div>
  `,
});

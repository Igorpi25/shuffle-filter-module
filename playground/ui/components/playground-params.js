Vue.component('playground-params', {
    methods: {
    },
    props: {
        params: {
            type: Object,
            required: true,
        },
    },
    template: `
    <div class="flex flex-col p-2 border"> 
        <div>params:</div>
        <div v-for="(value, key) in params" class="p-2">
            {{key}}: {{value}}
        </div>
    </div>
    `,
});

Vue.component('playground-scheme', {
    methods: {
        getResult() {
            return runScheme(this.scheme);
        },
    },
    props: {
        scheme: {
            type: Object,
            required: true,
        },
    },
    template: `
    <div class="flex flex-col p-2 border">
        <!-- Id -->
        <div class="flex p-2 bg-gray-100">
            id: {{scheme.id}}
        </div>

        <!-- Head -->
        <div class="flex flex-col p-2 bg-gray-100">
            head:

            <!-- Incoming -->
            <div v-if="scheme.params.incoming " class="flex flex-col p-2">
                incoming:
                <div v-for="(value, key) in scheme.params.incoming" class="p-2">
                    {{key}}: {{value}}
                </div>
            </div> 

            <!-- Outgoing -->
            <div v-if="scheme.params.outgoing" class="flex flex-col p-2">
                outgoing:
                <div v-for="(value, key) in scheme.params.outgoing" class="p-2">
                    {{key}}: {{value}}
                </div>
            </div> 

            <!-- Local -->
            <div v-if="scheme.params.local" class="flex flex-col p-2">
                local:
                <div v-for="(value, key) in scheme.params.local" class="p-2">
                    {{key}}: {{value}}
                </div>
            </div>
        </div>

        <!-- Body -->
        <div class="flex flex-col p-2" :class="(getResult())?'bg-green-100':'bg-red-100'">
            body:
            <div class="flex flex-col p-2">
                result: {{getResult()}}
            </div>
        </div>
    </div>
    `,
});

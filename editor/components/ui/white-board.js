Vue.component('white-board', {
    props: ['scheme'],
    data: function () {
        return {
            stubVisibility: true,
        };
    },
    computed: {
        runSchemeResult() {
            return runScheme(this.scheme);
        },
    },
    methods: {
        onFocus: function () {
            eventHub.$emit("on-select-element", {});
        },
    },
    created: function () {
        eventHub.$on('on-select-element', (element)=> {
            if(Object.keys(element).length === 0) {
                this.stubVisibility = true;
            } else {
                this.stubVisibility = false;
            }
        });
    },
    template: `
    <div @focus="onFocus" tabindex="-1" class="flex py-16 px-2 space-x-2 overflow-scroll">
        <!-- Params -->
        <div class="flex flex-col space-y-2 border p-4">
            <!-- Url Params -->
            <div class="flex flex-col p-2 border"> 
                <div>URL params:</div>
                <div v-for="(value, key) in this.$root.getUrlParams()" class="p-2 bg-gray-100">
                    {{key}}: {{value}}
                </div>
            </div>
            <!-- Incoming -->
            <div v-if="this.$props.scheme.params?.incoming" class="flex flex-col w-80 h-fit p-2 space-y-2 border border-blue-100 justify-center items-strech">
                <div class="flex justify-start">Incoming params:</div>
                <div v-if="this.$props.scheme.type=='aggregation'" class="flex flex-col space-y-4 p-2">
                    <div class="flex flex-col space-y-2">
                        <div>chain:</div> 
                        <div class="text-xs text-gray-400 p-2 bg-gray-100">
                            {{scheme.id}}
                        </div>
                        <div>user:</div>
                        <div class="text-xs text-gray-400 p-2 bg-gray-100">
                            {{scheme.params.incoming.scheme.params.incoming.user}}
                        </div>
                        <div>places:</div>
                        <div v-for="item in scheme.params.incoming.items" class="p-2 bg-gray-100">
                            <div>{{item.id}}</div>
                            <div class="text-xs text-gray-400">{{item.value}}</div>
                        </div>
                    </div>
                </div>
                <div v-else v-for="(value, key) in scheme.params?.incoming" :key="key" class="flex bg-gray-100 p-2 justify-start text-sm">
                    <span>{{key}}: {{value}}</span>
                </div>
            </div>
            <!-- Local -->
            <div v-if="this.$props.scheme.params?.local" class="flex flex-col w-80 h-fit p-2 space-y-2 border justify-center items-strech">
                <div class="flex justify-start">Local params:</div>
                <div v-for="(value, key) in scheme.params?.local" :key="key" class="flex bg-gray-100 p-2 justify-start text-sm">
                    {{key}}: {{value}}
                </div>
            </div>
        </div>

        <div v-if="this.$props.scheme.scheme" class="flex-none text-gray-400">
            ->
        </div>
    
        <!-- Scheme -->
        <div v-if="this.$props.scheme.scheme" class="p-2 space-y-2 border">
            <div class="flex justify-start">Scheme</div>
            <shuffle-chain :schema="this.$props.scheme.scheme"/>
        </div>

        <div v-if="this.$props.scheme.scheme" class="flex-none text-gray-400">
            ->
        </div>

        <!-- Result -->
        <div v-if="(scheme.scheme)&&((scheme.scheme.type=='shuffle-row')||(scheme.scheme.type=='shuffle-column')||(scheme.scheme.type=='shuffle-filter')||((scheme.scheme.type=='shuffle-filter-intersection')))" class="flex items-center justify-center w-16 h-16 p-2 border">
            <span class="text-gray-400">{{runSchemeResult}}</span>
        </div>  
        <div v-if="(scheme.scheme)&&((scheme.scheme.type=='shuffle-aggregation-list')||(scheme.scheme.type=='shuffle-aggregation-filter')||(scheme.scheme.type=='shuffle-aggregation-join')||(scheme.scheme.type=='shuffle-aggregation-order'))" class="flex flex-col space-y-2 p-2 w-80 h-fit border">
            <div v-for="child in runSchemeResult" class="text-gray-600 p-2  bg-stone-100">
                {{child.id}}
            </div>
        </div>  

        <!-- stub -->
        <div v-if="stubVisibility" class="flex-none  w-60">
            
        </div>
            
    </div>
    `,
});

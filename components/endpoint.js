Vue.component('endpoint', {
    methods: {
        getUrlParams() {
            return this.$route.query;
        },
        getInjectedScheme() {
            let params = this.getUrlParams();

            let scheme = JSON.parse(JSON.stringify(this.scheme));

            scheme.params.incoming.user = params.user;
            scheme.params.incoming.place = params.place;

            return scheme;
        }
    },
    
    props: {
        scheme: {
            type: Object,
            required: true,
        },
    },
    template: `
    <div class="flex flex-col p-2"> 
        <div>
            Тестовый endoint <span class="font-bold"></span>
        </div>

        Scheme
        <endpoint-scheme :scheme="scheme"></endpoint-scheme>

        GetUrlParams
        <endpoint-params :params="getUrlParams()"></endpoint-params>

        Injected Scheme
        <endpoint-scheme :scheme="getInjectedScheme()"></endpoint-scheme>
    </div>
    `,
});

Vue.component('side-menu', {
    props: ['scheme'],
    data: function() {
        return {
            switcher: '',
        };
    },
    created: function () {
        eventHub.$on('on-select-element', (element)=> {
            if(Object.keys(element).length === 0) {
                this.switcher = '';
            }else{
                this.switcher = 'element-properties';
            }
        });
    },
    template: `
    <div  v-show="switcher!==''" tabindex="-1" class="w-60 overflow-scroll">
        <!-- Selected Element panel -->
        <div v-show="switcher==='element-properties'" class="flex flex-col border-1 border">
            <node-panel :scheme="this.$props.scheme"></node-panel>
        </div>
        <!-- Save/Load scheme panel -->
        <save-load-panel v-show="switcher==='save-load-panel'" :scheme="this.$props.scheme"></save-load-panel>
    </div>
    `,
});

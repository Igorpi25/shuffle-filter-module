
var app = new Vue({ 
    el: '#app',
    data: {
        runSchemeResult: '(runSchemeResult)',
        message: '(nothing selected)',
        selectedItem: Object, 
        scheme: {
            id: 'Main',
            type: 'row',
            childs: [
                {
                    id: 'D',
                    type: 'column',
                    childs: [
                        {
                            id: 'A',
                            type: 'row',
                            childs: [
                                {
                                    id:'A1',
                                    type:'filter',
                                    result: false,
                                },
                                {
                                    id:'A2',
                                    type:'filter',
                                    result: true,
                                },
                            ],
                        },
                        {
                            id:'B',
                            type:'column',
                            childs:[
                                {
                                    id:'B1',
                                    type:'filter',
                                    result: true,
                                },
                                {
                                    id:'B2',
                                    type:'filter',
                                    result: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'C1',
                    type: 'filter',
                    result: true,
                },
                {
                    id: 'Z',
                    type: 'column',
                    childs: [
                        {
                            id: 'Z1',
                            type: 'filter',
                            result: false,
                        },
                        {
                            id: 'Z2',
                            type: 'filter',
                            result: true,
                        },
                    ],
                },
            ],
        },
    },
    methods: {
        onFocus: function() {
            this.selectElementById(this.id);
        },
        selectElementById: function(id)  {
            var item = searchInSchemeById(this.scheme, id);
            this.selectedItem = item;
        },
        getSchemeResult: function(scheme) {
            return runScheme(scheme);
        }
      }
});


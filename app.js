
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
                                    type:'filter-intersection',
                                    params:[
                                        {
                                            name: 'Alpha',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['cafe', 'kids', 'beach'],
                                        },
                                        {
                                            name: 'Beta',
                                            type: 'set',
                                            source: 'local',
                                            key: "ballooning-fest",
                                        }
                                    ]
                                },
                                {
                                    id:'A2',
                                    type:'filter-intersection',
                                    params:[
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        },
                                        {
                                            name: 'Cafe',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
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
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday','saturday'],
        },
        incoming: {
            'user': ['cafe','kids','family'],
            'place': ['cafe','coffe','tea','chicken','pizza','latte','free-hot-water'],
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
            return runScheme(scheme, this.local, this.incoming);
        }
      }
});


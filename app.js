function searchInSchemeById(element, matchingId){
    if(element.id == matchingId){
         return element;
    }else if (element.childs != null){
         var i;
         var result = null;
         for(i=0; result == null && i < element.childs.length; i++){
              result = searchInSchemeById(element.childs[i], matchingId);
         }
         return result;
    }
    return null;
}

var app = new Vue({ 
    el: '#app',
    data: {
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
                                },
                                {
                                    id:'A2',
                                    type:'filter',
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
                                },
                                {
                                    id:'B2',
                                    type:'filter',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'C1',
                    type: 'filter',
                },
                {
                    id: 'Z',
                    type: 'column',
                    childs: [
                        {
                            id: 'Z1',
                            type: 'filter',
                        },
                        {
                            id: 'Z2',
                            type: 'filter',
                        },
                    ],
                },
            ],
        },
    },
    methods: {
        selectElementById: function(id)  {
            var item = searchInSchemeById(this.scheme, id);
            this.selectedItem = item;
        }
      }
});


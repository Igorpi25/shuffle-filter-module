var CommonScheme = {
    id: 'CommonScheme',
    type: 'shuffle-column',
    childs: [
        {
            id: 'Restoran group',
            type: 'shuffle-row',
            childs: [
                {
                    id: 'Рестораны',
                    type: 'shuffle-filter-intersection',
                    params: [
                        {
                            name: 'Alpha',
                            type: 'set',
                            source: 'inline',
                            value: ['Рестораны'],
                        },
                        {
                            name: 'Beta',
                            type: 'set',
                            source: 'incoming',
                            key: "place",
                        }
                    ]
                },
                {
                    id: 'Свойства ресторана',
                    type: 'shuffle-column',
                    childs: [
                        {
                            id: 'Cofe',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Вкусный кофе',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Вкусный кофе'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Ценитель кофе', 'Гурман', 'Гедонист'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'Live music',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Живая музыка',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Живая музыка'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Меломан', 'Люблю танцевать', 'Человек-праздник', 'Живу в ритме нон-стоп'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'Childs room',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Детская комната',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Детская комната'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['С детьми', 'Семьянин'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Cafe group',
            type: 'shuffle-row',
            childs: [
                {
                    id: 'Кафе',
                    type: 'shuffle-filter-intersection',
                    params: [
                        {
                            name: 'Alpha',
                            type: 'set',
                            source: 'inline',
                            value: ['Кафе'],
                        },
                        {
                            name: 'Beta',
                            type: 'set',
                            source: 'incoming',
                            key: "place",
                        }
                    ]
                },
                {
                    id: 'Свойства ресторана',
                    type: 'shuffle-column',
                    childs: [
                        {
                            id: 'Cofe',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Вкусный кофе',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Вкусный кофе'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Ценитель кофе', 'Гурман', 'Гедонист'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'Childs menu',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Детское меню',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Детское меню'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['С детьми', 'Любящие супруги'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'Childs room',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Детская комната',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Детская комната'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['С детьми', 'Семьянин'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Pubs',
            type: 'shuffle-row',
            childs: [
                {
                    id: 'Пабы',
                    type: 'shuffle-filter-intersection',
                    params: [
                        {
                            name: 'Alpha',
                            type: 'set',
                            source: 'inline',
                            value: ['Пабы'],
                        },
                        {
                            name: 'Beta',
                            type: 'set',
                            source: 'incoming',
                            key: "place",
                        }
                    ]
                },
                {
                    id: 'Свойства паба',
                    type: 'shuffle-column',
                    childs: [
                        {
                            id: 'Пивная карта',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Пивная карта',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Пивная карта'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Ценитель пива'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'Алкогольная карта',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Алкогольная карта',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Алкогольная карта'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Любитель выпить'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'Gastro',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'Гастро',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойство',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Гастро'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Разборчивый', 'Любитель сытно поесть'],
                                        },
                                        {
                                            name: 'User',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    ],
}

var ActiveTigerInFamilyRestoran = {
    id: 'ActiveTigerInFamilyRestoran',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // ActiveTiger
            'user': [
                'ActiveTiger',
                'Меломан',
                'Любитель выпить',
                'Люблю танцевать ',
                'Слежу за знаменитостями',
                'Человек - праздник',
                'Люблю музыку',
                'Фолк',
                'Кантри','Блюз',
                'Люблю экстрим',
                'Люблю красивые фото',
                'Азартный',
                'Люблю активный отдых',
                'Тусовщик',
                'С друзьями',
                'На приколе',
                'Открыт к новым впечатлениям',
                'Живу в ритме нон-стоп',
                'Провожу время с пользой',
                'Гедонист',
            ],
            // Family Restoran
            'place': [
                'Family Restoran',
                'Рестораны',
                'Винная карта',
                'Чайная карта',
                'Спокойная атмосфера',
                'Веганское меню',
                'Алкогольная карта',
                'Детская комната',
            ],
        },
    },
    scheme: JSON.parse(JSON.stringify(CommonScheme)),
};

var ActiveTigerInItalianClassicRestoran = {
    id: 'ActiveTigerInItalianClassicRestoran',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // ActiveTiger
            'user': [
                'ActiveTiger',
                'Меломан',
                'Любитель выпить',
                'Люблю танцевать ',
                'Слежу за знаменитостями',
                'Человек - праздник',
                'Люблю музыку',
                'Фолк',
                'Кантри','Блюз',
                'Люблю экстрим',
                'Люблю красивые фото',
                'Азартный',
                'Люблю активный отдых',
                'Тусовщик',
                'С друзьями',
                'На приколе',
                'Открыт к новым впечатлениям',
                'Живу в ритме нон-стоп',
                'Провожу время с пользой',
                'Гедонист',
            ],
            // Italian Classic Restoran
            'place': [
                'Italian Classic Restoran',
                'Рестораны',
                'Кондиционеры на терассе',
                'Вкусный кофе',
                'Живая музыка',
                'Винная карта',
                'Сомилье',
                'Чайная карта',
                'Спокойная атмосфера',
                'Веганское меню',
                'Алкогольная карта',
            ],
        },
    },
    scheme: JSON.parse(JSON.stringify(CommonScheme)),
};

var ActiveTigerInPub = {
    id: 'ActiveTigerInPub',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // ActiveTiger
            'user': [
                'ActiveTiger',
                'Меломан',
                'Любитель выпить',
                'Люблю танцевать ',
                'Слежу за знаменитостями',
                'Человек - праздник',
                'Люблю музыку',
                'Фолк',
                'Кантри','Блюз',
                'Люблю экстрим',
                'Люблю красивые фото',
                'Азартный',
                'Люблю активный отдых',
                'Тусовщик',
                'С друзьями',
                'На приколе',
                'Открыт к новым впечатлениям',
                'Живу в ритме нон-стоп',
                'Провожу время с пользой',
                'Гедонист',
            ],
            // Scottish Pub
            'place': [
                'Пабы',
                'Живая музыка',
                'Винная карта',
                'Алкогольная карта',
                'Крафтовое пиво',
                'Пивная карта',
                'Большие порции',
                'Исконный стиль',
            ],
        },
    },
    scheme: JSON.parse(JSON.stringify(CommonScheme)),
};

var FamilyFunInFamilyRestoran = {
    id: 'FamilyFunInFamilyRestoran',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // FamilyFan
            'user': [
                'Няня',
                'Любящие супруги',
                'С детьми',
                'Со второй половинкой',
                'Любитель сытно поесть',
                'Есть питомец',
                'Люблю красивые фото',
            ],
            // Family Restoran
            'place': [
                'Family Restoran',
                'Рестораны',
                'Винная карта',
                'Чайная карта',
                'Спокойная атмосфера',
                'Веганское меню',
                'Алкогольная карта',
                'Детская комната',
            ],
        },
    },
    scheme: JSON.parse(JSON.stringify(CommonScheme)),
};

var FamilyFunInItalianClassicRestoran = {
    id: 'FamilyFunInItalianClassicRestoran',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // FamilyFan
            'user': [
                'Няня',
                'Любящие супруги',
                'С детьми',
                'Со второй половинкой',
                'Любитель сытно поесть',
                'Есть питомец',
                'Люблю красивые фото',
            ],
            // Italian Classic Restoran
            'place': [
                'Italian Classic Restoran',
                'Рестораны',
                'Кондиционеры на терассе',
                'Вкусный кофе',
                'Живая музыка',
                'Винная карта',
                'Сомилье',
                'Чайная карта',
                'Спокойная атмосфера',
                'Веганское меню',
                'Алкогольная карта',
            ],
        },
    },
    scheme: JSON.parse(JSON.stringify(CommonScheme)),
};

var FamilyFunInPub = {
    id: 'FamilyFunInPub',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // FamilyFan
            'user': [
                'Няня',
                'Любящие супруги',
                'С детьми',
                'Со второй половинкой',
                'Любитель сытно поесть',
                'Есть питомец',
                'Люблю красивые фото',
            ],
            // Scottish Pub
            'place': [
                'Пабы',
                'Живая музыка',
                'Винная карта',
                'Алкогольная карта',
                'Крафтовое пиво',
                'Пивная карта',
                'Большие порции',
                'Исконный стиль',
            ],
        },
    },
    scheme: JSON.parse(JSON.stringify(CommonScheme)),
};

var ActiveTigerAsIncomingParam = JSON.parse(JSON.stringify(ActiveTigerInFamilyRestoran));
var FamilyFunAsIncomingParam = JSON.parse(JSON.stringify(FamilyFunInFamilyRestoran));

var Places = [
    {   
        id: 'Family Restoran',
        type: 'shuffle-aggregation-item',
        value: [
            'Рестораны',
            'Винная карта',
            'Чайная карта',
            'Спокойная атмосфера',
            'Веганское меню',
            'Алкогольная карта',
            'Детская комната',
        ]
    },
    {
        id: 'Italian Classic Restoran',
        type: 'shuffle-aggregation-item',
        value: [
            'Рестораны',
            'Кондиционеры на терассе',
            'Вкусный кофе',
            'Живая музыка',
            'Винная карта',
            'Сомилье',
            'Чайная карта',
            'Спокойная атмосфера',
            'Веганское меню',
            'Алкогольная карта',
        ],
    },
    {
        id: 'Scottish Pub',
        type: 'shuffle-aggregation-item',
        value: [
            'Пабы',
            'Живая музыка',
            'Винная карта',
            'Алкогольная карта',
            'Крафтовое пиво',
            'Пивная карта',
            'Большие порции',
            'Исконный стиль',
        ],
    }
];

var AggregationScheme = {
    id: 'AggregationScheme',
    type: 'shuffle-aggregation-filter',
    childs: [
        {
            id: 'places-list',
            type: 'shuffle-aggregation-list',
            childs: Places,
        },
    ]
};

var ActiveTigerAggregation = {
    id: 'ActiveTigerAggregation',
    type: 'aggregation',
    params: {
        incoming: {
            chain: ActiveTigerAsIncomingParam,
            items: Places,
        }
    } ,
    scheme: JSON.parse(JSON.stringify(AggregationScheme)),
};

var FamilyFunAggregation = {
    id: 'FamilyFunAggregation',
    type: 'aggregation',
    params: {
        incoming: {
            chain: FamilyFunAsIncomingParam,
            items: Places,
        }
    } ,
    scheme: JSON.parse(JSON.stringify(AggregationScheme)),
};

var MainChain = {
    id: 'MainChain',
    type: 'filtering',
    params: {
        local: {
            'digits': [1, 2, 3],
        },
        incoming: {
            'mixed': [
                'string1',
                1,
            ],
            'strings': [
                'string1',
                'string2',
            ],
        },
    },
    scheme: {
        id: 'Main',
        type: 'shuffle-row',
        childs: [
            {
                id: 'D',
                type: 'shuffle-column',
                childs: [
                    {
                        id: 'A',
                        type: 'shuffle-row',
                        childs: [
                            {
                                id: 'A1',
                                type: 'shuffle-filter-intersection',
                                params: [
                                    {
                                        name: 'Alpha',
                                        type: 'set',
                                        source: 'inline',
                                        value: ['cafe', 'kids', 'beach'],
                                    },
                                    {
                                        name: 'Digits',
                                        type: 'set',
                                        source: 'local',
                                        key: "digits",
                                    }
                                ]
                            },
                            {
                                id: 'A2',
                                type: 'shuffle-filter-intersection',
                                params: [
                                    {
                                        name: 'Mixed',
                                        type: 'set',
                                        source: 'incoming',
                                        key: 'mixed',
                                    },
                                    {
                                        name: 'Strings',
                                        type: 'set',
                                        source: 'incoming',
                                        key: 'strings',
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        id: 'B',
                        type: 'shuffle-column',
                        childs: [
                            {
                                id: 'B1',
                                type: 'shuffle-filter',
                                result: true,
                            },
                            {
                                id: 'B2',
                                type: 'shuffle-filter',
                                result: false,
                            },
                        ],
                    },
                ],
            },
            {
                id: 'C1',
                type: 'shuffle-filter',
                result: true,
            },
            {
                id: 'Z',
                type: 'shuffle-column',
                childs: [
                    {
                        id: 'Z1',
                        type: 'shuffle-filter',
                        result: false,
                    },
                    {
                        id: 'Z2',
                        type: 'shuffle-filter',
                        result: true,
                    },
                ],
            },
        ],
    }
};

var SecondChain = {
    id: 'SecondChain',
    type: 'filtering',
    scheme: {
        id: 'SecondChain',
        type: 'shuffle-row',
        childs: [
            {
                id: 'K',
                type: 'shuffle-column',
                childs: [
                    {
                        id: 'M',
                        type: 'shuffle-row',
                        childs: [
                            {
                                id: 'M1',
                                type: 'shuffle-filter',
                                result: false,
                            },
                        ],
                    },
                    {
                        id: 'X',
                        type: 'shuffle-column',
                        childs: [
                            {
                                id: 'X1',
                                type: 'shuffle-filter',
                                result: false,
                            },
                            {
                                id: 'X2',
                                type: 'shuffle-filter',
                                result: true,
                            },
                        ],
                    },
                ],
            },
            {
                id: 'G1',
                type: 'shuffle-filter',
                result: true,
            },
            {
                id: 'G2',
                type: 'shuffle-filter',
                result: true,
            },
            {
                id: 'F',
                type: 'shuffle-column',
                childs: [
                    {
                        id: 'F1',
                        type: 'shuffle-filter',
                        result: false,
                    },
                    {
                        id: 'F2',
                        type: 'shuffle-filter',
                        result: true,
                    },
                    {
                        id: 'F3',
                        type: 'shuffle-filter',
                        result: true,
                    },
                ],
            },
        ],
    }
};

function generateChain(numChildren, maxDepth, isLastFilter = true) {
    var chain = {
        id: 'Chain',
        type: 'shuffle-row',
        childs: [],
    };

    function getRandomType() {
        var types = ['shuffle-column', 'shuffle-row', 'shuffle-filter'];
        var randomIndex = Math.floor(Math.random() * types.length);
        return types[randomIndex];
    }

    function generateRandomChild(depth) {
        if (depth >= maxDepth) {
            // Если достигли максимальной глубины, то самый вложенный элемент обязан быть shuffle-filter
            return {
                id: Math.random().toString(36).substr(2, 4),
                type: 'shuffle-filter',
                result: false,
            };
        }

        var type = getRandomType();

        if (type === 'shuffle-filter' && isLastFilter) {
            // Если это самый вложенный элемент и должен быть shuffle-filter
            return {
                id: Math.random().toString(36).substr(2, 4),
                type: 'shuffle-filter',
                result: false,
            };
        }

        if (type === 'shuffle-filter') {
            // Если не самый вложенный элемент, то пропускаем shuffle-filter
            var parentTypes = ['shuffle-row', 'shuffle-column'];
            type = parentTypes[Math.floor(Math.random() * parentTypes.length)];
        }

        if (type === 'shuffle-row' || type === 'shuffle-column') {
            var numFilters = Math.floor(Math.random() * 2) + 2; // Генерируем случайное число от 2 до 3 для количества shuffle-filter
            var childs = [];
            for (var i = 0; i < numFilters; i++) {
                childs.push({
                    id: Math.random().toString(36).substr(2, 4),
                    type: 'shuffle-filter',
                    result: false,
                });
            }
            // Если тип элемента shuffle-row или shuffle-column, устанавливаем isLastFilter в false
            return {
                id: Math.random().toString(36).substr(2, 4),
                type: type,
                childs: childs.concat(generateRandomChild(depth + 1)), // Добавляем рекурсивно сгенерированные дочерние элементы
            };
        }

        return {
            id: Math.random().toString(36).substr(2, 4),
            type: type,
            childs: [],
        };
    }

    // Генерируем корневой элемент и его дочерние элементы
    var numChilds = Math.floor(Math.random() * numChildren) + 1;
    for (var i = 0; i < numChilds; i++) {
        chain.childs.push(generateRandomChild(1));
    }

    return {
        scheme: chain,
    };
}

// Export are variables to the window
if (typeof window !== 'undefined') {
    window.chains = [];
    window.chains.push({ name: 'ActiveTigerAggregation', value: ActiveTigerAggregation });
    window.chains.push({ name: 'ActiveTigerInFamilyRestoran', value: ActiveTigerInFamilyRestoran });
    window.chains.push({ name: 'ActiveTigerInItalianClassicRestoran', value: ActiveTigerInItalianClassicRestoran });
    window.chains.push({ name: 'ActiveTigerInPub', value: ActiveTigerInPub });
    window.chains.push({ name: 'FamilyFunInFamilyRestoran', value: FamilyFunInFamilyRestoran });
    window.chains.push({ name: 'FamilyFunInItalianClassicRestoran', value: FamilyFunInItalianClassicRestoran });
    window.chains.push({ name: 'FamilyFunInPub', value: FamilyFunInPub });
    window.chains.push({ name: 'FamilyFunAggregation', value: FamilyFunAggregation });
    window.chains.push({ name: 'MainChain', value: MainChain });
    window.chains.push({ name: 'SecondChain', value: SecondChain });
    window.chains.push({ name: '5 elements with depth 5 random', value: generateChain(5, 5) });
    window.chains.push({ name: '10 elements with depth 5 random', value: generateChain(10, 5) });
    window.chains.push({ name: '32 elements with depth 10 random', value: generateChain(32, 10) });
    window.chains.push({ name: '64 elements with depth 12 random', value: generateChain(64, 12) });
    window.chains.push({ name: '128 elements with depth 28 random', value: generateChain(128, 28) });

    // Export other schemas as needed
    // window.Schema2 = Schema2;
    // window.Schema3 = Schema3;
}
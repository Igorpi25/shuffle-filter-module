
var MainChain = {
    id: 'MainChain',
    type: 'filtering',
    params: {
        local: {
            'active-seal': ['coffee', 'guitar', 'swimming'],
        },
        incoming: {
            'place': ['starbucks', 'beach', 'cafe'],
            'user': ['coffee', 'guitar', 'swimming', 'calisthenics', 'drink', 'beer'],
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
                                        name: 'Required',
                                        type: 'set',
                                        source: 'inline',
                                        value: ['cafe', 'kids', 'beach'],
                                    },
                                    {
                                        name: 'Incoming',
                                        type: 'set',
                                        source: 'incoming',
                                        key: "place",
                                    }
                                ]
                            },
                            {
                                id: 'A2',
                                type: 'shuffle-filter-intersection',
                                params: [
                                    {
                                        name: 'Required',
                                        type: 'set',
                                        source: 'local',
                                        key: 'active-seal',
                                    },
                                    {
                                        name: 'Incoming',
                                        type: 'set',
                                        source: 'incoming',
                                        key: 'user',
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
                                result: false,
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

var CommonScheme = {
    id: 'CommonScheme',
    type: 'shuffle-column',
    childs: [
        {
            id: 'restaurant-group',
            type: 'shuffle-row',
            childs: [
                {
                    id: 'place-is-restaurant',
                    type: 'shuffle-filter-intersection',
                    params: [
                        {
                            name: 'What',
                            type: 'set',
                            source: 'inline',
                            value: ['restaurant'],
                        },
                        {
                            name: 'Where',
                            type: 'set',
                            source: 'incoming',
                            key: "place",
                        }
                    ]
                },
                {
                    id: 'restaurant-column',
                    type: 'shuffle-column',
                    childs: [
                      	{
                            id: 'mapping-air-conditioners-on-terrace-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['air-conditioners-on-terrace'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['loving-spouses', 'with-the-other-half'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'mapping-tasty-coffee-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['tasty-coffee'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['coffee-connoisseur', 'selective-person', 'hedonist'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'mapping-live-music-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['live-music'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['melomaniac', 'like-to-dance ', 'celebration-person', 'live-in-a-non-stop-rhythm'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'mapping-children-room-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['children-room'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['with-children'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'mapping-bay-view-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['bay-view'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['aesthete', 'with-the-other-half'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                       {
                            id: 'mapping-city-view-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['city-view'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['aesthete', 'with-the-other-half'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                       {
                            id: 'mapping-large-portions-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['large-portions'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['hearty-eater', 'loving-spouses'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'user',
                                        }
                                    ]
                                },
                            ],
                        },
                      {
                            id: 'mapping-wine-list-to-user',
                            type: 'shuffle-row',
                            childs: [
                                {
                                    id: 'property-place',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['wine-list'],
                                        },
                                        {
                                            name: 'Where',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                                {
                                    id: 'property-user',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'What',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['wine-connoisseur', 'selective-person'],
                                        },
                                        {
                                            name: 'Where',
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
        incoming: {
            // ActiveTiger
            'user': [
                'active-tiger',
                'stripes',
                'melomaniac',
                'drinker',
                'like-to-sing',
                'like-to-dance',
                'follow-celebrities',
                'celebration-person',
                'love-country',
              	'love-blues',
              	'love-folk',
              	'love-jazz',
              	'love-chanson',
              	'love-electronic-music',
								'love-rock',
              	'love-hip-hop',
              	'love-reggae',
              	'love-funk',
              	'love-disco',
              	'love-pop',
              	'love-metal',
                'like-extreme',
                'like-beautiful-photos',
                'gambling',
                'like-active-vacations',
                'party-person',
                'with-friends',
              	'in-on-the-joke',
                'open-to-new-impressions',
                'live-in-a-non-stop-rhythm',
              	'spend-my-time-in-a-good-way', 
                'hedonist',
            ],
            // Family Restoran
            'place': [
                'family-restoran',
                'restaurant',
                'wine-list',
                'tea-list',
                'craft-beer',
                'vegan-menu',
                'alcoholic-menu',
                'сhildren-room',
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

var ArabScheme = {
    id: 'ArabScheme',
    type: 'shuffle-column',
    childs: [
        {
            id: 'russian path',
            type: 'shuffle-row',
            childs: [
                {
                    id: 'Russian?',
                    type: 'shuffle-filter-intersection',
                    params: [
                        {
                            name: 'Alpha',
                            type: 'set',
                            source: 'inline',
                            value: ['russian'],
                        },
                        {
                            name: 'Beta',
                            type: 'set',
                            source: 'incoming',
                            key: "user",
                        }
                    ]
                },
                CommonScheme,
            ]
        },
        {
            id: 'arab path',
            type: 'shuffle-row',
            childs: [
                {
                    id: 'Are you resident?',
                    type: 'shuffle-filter-intersection',
                    params: [
                        {
                            name: 'Alpha',
                            type: 'set',
                            source: 'inline',
                            value: ['resident'],
                        },
                        {
                            name: 'Beta',
                            type: 'set',
                            source: 'incoming',
                            key: "user",
                        }
                    ]
                },
                {
                    id: 'Arab flow',
                    type: 'shuffle-filter',
                    value: 'true',
                },
            ]
        }
    ],
}

var ArabInFamilyRestoran = {
    id: 'ArabInFamilyRestoran',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // ActiveTiger, Arab
            'user': [
                'ActiveTiger',
                'arab',
                'resident',
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
    scheme: JSON.parse(JSON.stringify(ArabScheme)),
};

var RussianInFamilyRestoran = {
    id: 'ArabInFamilyRestoran',
    type: 'filtering',
    params: {
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // ActiveTiger, Russian
            'user': [
                'ActiveTiger',
                'russian',
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
    scheme: JSON.parse(JSON.stringify(ArabScheme)),
};

var ActiveTigerAsIncomingParam = JSON.parse(JSON.stringify(ActiveTigerInFamilyRestoran));
var FamilyFunAsIncomingParam = JSON.parse(JSON.stringify(FamilyFunInFamilyRestoran));

var Places = [
    {   
        id: 'Family Restoran',
        type: 'shuffle-aggregation-item',
        date: '2019-09-09 23:00:00',
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
        date: '1812-10-02 00:00:00',
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
        date: '1943-01-20 00:00:00',
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
    params: [
        {
            name: 'Filtering scheme',
            type: 'scheme',
            source: 'incoming',
            key: 'scheme',
        },
        {
            name: 'Target',
            type: 'target',
            source: 'incoming',
            key: 'target',
        },
    ],
    childs: [
        {
            id: 'places-list',
            type: 'shuffle-aggregation-list',
            params: [
                {
                    name: 'Places from incoming',
                    type: 'items',
                    source: 'incoming',
                    key: 'items',
                },
            ],
        },
        {
            id: 'join-order',
            type: 'shuffle-aggregation-join',
            childs: [
                {
                    id: 'places-list-second',
                    type: 'shuffle-aggregation-list',
                    params: [
                        {
                            name: 'Second places',
                            type: 'items',
                            source: 'incoming',
                            key: 'items',
                        },
                    ],
                },
                {
                    id: 'places-list-third',
                    type: 'shuffle-aggregation-list',
                    params: [
                        {
                            name: 'Third places',
                            type: 'items',
                            source: 'incoming',
                            key: 'items',
                        },
                    ],
                }
            ]
        },
    ]
};

var ActiveTigerAggregation = {
    id: 'ActiveTigerAggregation',
    type: 'aggregation',
    params: {
        incoming: {
            scheme: ActiveTigerAsIncomingParam,
            items: Places,
            target: 'place',
        }
    } ,
    scheme: JSON.parse(JSON.stringify(AggregationScheme)),
};

var FamilyFunAggregation = {
    id: 'FamilyFunAggregation',
    type: 'aggregation',
    params: {
        incoming: {
            scheme: FamilyFunAsIncomingParam,
            items: Places,
            target: 'place',
        }
    } ,
    scheme: JSON.parse(JSON.stringify(AggregationScheme)),
};

// Aggregation New Components Samples

// shuffle-aggregation-join

var JoinSampleScheme = {
    id: 'JoinSampleScheme',
    type: 'shuffle-aggregation-filter',
    params: [
        {
            name: 'Filtering scheme',
            type: 'scheme',
            source: 'incoming',
            key: 'scheme',
        },
        {
            name: 'Target',
            type: 'target',
            source: 'incoming',
            key: 'target',
        },
    ],
    childs: [
        {
            id: 'places-list',
            type: 'shuffle-aggregation-list',
            params: [
                {
                    name: 'Places from incoming',
                    type: 'items',
                    source: 'incoming',
                    key: 'items',
                },
            ],
        },
        {
            id: 'join-order',
            type: 'shuffle-aggregation-join',
            childs: [
                {
                    id: 'places-list-second',
                    type: 'shuffle-aggregation-list',
                    params: [
                        {
                            name: 'Second places',
                            type: 'items',
                            source: 'incoming',
                            key: 'items',
                        },
                    ],
                },
                {
                    id: 'places-list-third',
                    type: 'shuffle-aggregation-list',
                    params: [
                        {
                            name: 'Third places',
                            type: 'items',
                            source: 'incoming',
                            key: 'items',
                        },
                    ],
                }
            ]
        },
    ]
};

var JoinSampleChain = {
    id: 'JoinSampleChain',
    type: 'aggregation',
    params: {
        incoming: {
            scheme: ActiveTigerAsIncomingParam,
            items: Places,
            target: 'place',
        }
    } ,
    scheme: JSON.parse(JSON.stringify(JoinSampleScheme)),
};

// shuffle-aggregation-order

var OrderSampleScheme = {
    id: 'OrderSampleScheme',
    type: 'shuffle-aggregation-order',
    params: [
        {
            name: 'Order dir',
            type: 'order-direction',
            source: 'inline',
            value: 'asc',
        },
        {
            name: 'Order by',
            type: 'order-by',
            source: 'inline',
            value: 'date',
        },
    ],
    childs: [
        {
            id: 'places-list',
            type: 'shuffle-aggregation-list',
            params: [
                {
                    name: 'Places from incoming',
                    type: 'items',
                    source: 'incoming',
                    key: 'items',
                },
            ],
        },
    ],
};

var OrderSampleChain = {
    id: 'OrderSampleChain',
    type: 'aggregation',
    params: {
        incoming: {
            scheme: ActiveTigerAsIncomingParam,
            items: Places,
            target: 'place',
        }
    } ,
    scheme: JSON.parse(JSON.stringify(OrderSampleScheme)),
};

// shuffle-not

var NotSampleScheme = {
    id: 'NotSampleScheme',
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
                    id: 'Кальянная',
                    type: 'shuffle-column',
                    childs: [
                        {
                            id: 'Заядлый кальянщик',
                            type: 'shuffle-filter-intersection',
                            params: [
                                {
                                    name: 'Свойства',
                                    type: 'set',
                                    source: 'inline',
                                    value: ['Любитель кальянов'],
                                },
                                {
                                    name: 'User',
                                    type: 'set',
                                    source: 'incoming',
                                    key: 'user',
                                }
                            ]
                        },
                        {
                            id: 'Обычный человек',
                            type: 'shuffle-not',
                            childs: [
                                {
                                    id: 'Свойства',
                                    type: 'shuffle-filter-intersection',
                                    params: [
                                        {
                                            name: 'Свойства',
                                            type: 'set',
                                            source: 'inline',
                                            value: ['Кальяны'],
                                        },
                                        {
                                            name: 'Place',
                                            type: 'set',
                                            source: 'incoming',
                                            key: 'place',
                                        }
                                    ]
                                },
                            ]
                        },
                    ],
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

var NotSampleChain = {
    id: 'NotSampleChain',
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
    scheme: JSON.parse(JSON.stringify(NotSampleScheme)),
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
    
    window.chains.push({ name: 'MainChain', value: MainChain });

    //ActiveTiger. index from 1
    window.chains.push({ name: 'ActiveTigerInFamilyRestoran', value: ActiveTigerInFamilyRestoran });
    window.chains.push({ name: 'ActiveTigerInItalianClassicRestoran', value: ActiveTigerInItalianClassicRestoran });
    window.chains.push({ name: 'ActiveTigerInPub', value: ActiveTigerInPub });
    window.chains.push({ name: 'ActiveTigerAggregation', value: ActiveTigerAggregation });
    
    //FamilyFun. index from 5
    window.chains.push({ name: 'FamilyFunInFamilyRestoran', value: FamilyFunInFamilyRestoran });
    window.chains.push({ name: 'FamilyFunInItalianClassicRestoran', value: FamilyFunInItalianClassicRestoran });
    window.chains.push({ name: 'FamilyFunInPub', value: FamilyFunInPub });
    window.chains.push({ name: 'FamilyFunAggregation', value: FamilyFunAggregation });

    //Arab&Russian. index from 9
    window.chains.push({ name: 'ArabInFamilyRestoran', value: ArabInFamilyRestoran });
    window.chains.push({ name: 'RussianInFamilyRestoran', value: RussianInFamilyRestoran });
    
    window.chains.push({ name: '5 elements with depth 5 random', value: generateChain(5, 5) });
    window.chains.push({ name: '10 elements with depth 5 random', value: generateChain(10, 5) });
    window.chains.push({ name: '32 elements with depth 10 random', value: generateChain(32, 10) });
    window.chains.push({ name: '64 elements with depth 12 random', value: generateChain(64, 12) });
    window.chains.push({ name: '128 elements with depth 28 random', value: generateChain(128, 28) });

    //New component samples. index from 16
    window.chains.push({ name: 'JoinSampleChain', value: JoinSampleChain });
    window.chains.push({ name: 'OrderSampleChain', value: OrderSampleChain });
    window.chains.push({ name: 'NotSampleChain', value: NotSampleChain });
}
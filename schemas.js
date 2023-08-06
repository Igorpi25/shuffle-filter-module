var ActiveTiger = {
    id: 'ActiveTiger',
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
                                            value: ['Меломан', 'Люблю танцевать' , 'Человек-праздник', 'Живу в ритме нон-стоп'],
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
                            id: 'Пабы',
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
};

var MainChain = {
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
                                    name: 'Beta',
                                    type: 'set',
                                    source: 'local',
                                    key: "ballooning-fest",
                                }
                            ]
                        },
                        {
                            id: 'A2',
                            type: 'shuffle-filter-intersection',
                            params: [
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
};

var SecondChain = {
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

    return chain;
}

// Export are variables to the window
if (typeof window !== 'undefined') {
    window.chains = [];
    window.chains.push({ name: 'ActiveTiger', value: ActiveTiger });
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
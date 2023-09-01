var index = new Vue({
    router: new VueRouter(),
    el: '#app',
    data: {
        pages: [
            {
                name: 'editor',
                path: 'editor',
                description: 'Редактор где создаются Схемы',
            },
            {
                name: 'playground',
                path: 'playground/ui',
                description: 'Playground для удобства тестирования Схемы, перед интеграцией в Backend',
            },
            {
                name: 'playground-raw',
                path: 'playground/raw',
                description: 'Playground но без UI. Сразу возвращает результат работы Схемы',
            },
            {
                name: 'schemes',
                path: 'schemes',
                description: 'Тут можно посмотреть индексы и параметры всех Схем',
            },
        ],
        examples: [
            {
                name: 'editor',
                path: 'editor/#/?index=2',
                description: 'Схема фильрации (index=2)',
            },
            {
                name: 'editor',
                path: 'editor/#/?index=4',
                description: 'Схема агрегации (index=4)',
            },
            {
                name: 'playground',
                path: 'playground/ui/#/?index=2&user=coffee&user=beer&user=bachata&place=cafe&place=icecream',
                description: 'Схема фильтрации(index=2) в Playground. Результат true/false',
            },
            {
                name: 'playground',
                path: 'playground/ui/#/?index=2&user=Ценитель%20кофе&user=Гурман&place=Кафе&place=Вкусный%20кофе',
                description: 'Схема фильтрации(index=2) в Playground. Результат true/true',
            },
            {
                name: 'playground',
                path: 'playground/ui/#/?index=4&user=coffee&user=beer&user=bachata&place=cafe&place=icecream',
                description: 'Схема агрегации(index=4) в Playground',
            },
            {
                name: 'playground-raw',
                path: 'playground/raw/#/?index=4&user=coffee&user=beer&user=bachata&place=cafe&place=icecream',
                description: 'Схема агрегации(index=4) в Playground, raw-режим',
            }
        ],
    },
});

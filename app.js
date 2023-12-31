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
                path: 'editor/#/?index=1',
                description: 'Схема фильрации Places (index=1)',
            },
            {
                name: 'editor',
                path: 'editor/#/?index=4',
                description: 'Схема агрегации (index=4)',
            },
            {
                name: 'playground',
                path: 'playground/ui/#/?index=2&user=coffee&user=beer&user=bachata&place=cafe&place=icecream',
                description: 'Запуск фильтрации(index=2) в Playground. Результат true/false',
            },
            {
                name: 'playground',
                path: 'playground/ui/#/?index=2&user=Ценитель%20кофе&user=Гурман&place=Кафе&place=Вкусный%20кофе',
                description: 'Запуск фильтрации(index=2) в Playground',
            },
            {
                name: 'playground',
                path: 'playground/ui/#/?index=4&user=coffee&user=beer&user=bachata&place=cafe&place=icecream',
                description: 'Запуск агрегации(index=4) в Playground',
            },
            {
                name: 'playground-raw',
                path: 'playground/raw/#/?index=2&user=Ценитель%20кофе&user=Гурман&place=Кафе&place=Вкусный%20кофе',
                description: 'Запуск фильтрации(index=2) в Playground. Результат true/false',
            },
            {
                name: 'playground-raw',
                path: 'playground/raw/#/?index=4',
                description: 'Запуск агрегации(index=4) в Playground, raw-режим. Результат массив объектов',
            },
            {
                name: 'editor',
                path: 'editor/#/?index=19',
                description: 'Схема фильрации Events (index=19)',
            },
        ],
        componentSamples: [
            {
                name: 'editor',
                path: 'editor/#/?index=16',
                description: 'shuffle-aggregation-join',
            },
            {
                name: 'editor',
                path: 'editor/#/?index=17',
                description: 'shuffle-aggregation-order',
            },
            {
                name: 'editor',
                path: 'editor/#/?index=18',
                description: 'shuffle-not',
            },
        ],
    },
});

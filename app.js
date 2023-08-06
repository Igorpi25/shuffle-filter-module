var app = new Vue({
    el: '#app',
    data:
    {
        runSchemeResult: '(runSchemeResult)',
        message: '(nothing selected)',
        selectedScheme: chains[0].value,
        selectedItem: {},
        local: {
            'ballooning-fest': ['sunday', 'beach', 'family'],
            'hollydays': ['sunday', 'saturday'],
        },
        incoming: {
            // ActiveTiger
            // 'user': [
            //     'Полоски',
            //     'Меломан',
            //     'Любитель выпить',
            //     'Люблю танцевать ',
            //     'Слежу за знаменитостями',
            //     'Человек - праздник',
            //     'Люблю музыку',
            //     'Фолк',
            //     'Кантри','Блюз',
            //     'Люблю экстрим',
            //     'Люблю красивые фото',
            //     'Азартный',
            //     'Люблю активный отдых',
            //     'Тусовщик',
            //     'С друзьями',
            //     'На приколе',
            //     'Открыт к новым впечатлениям',
            //     'Живу в ритме нон-стоп',
            //     'Провожу время с пользой',
            //     'Гедонист',
            // ],
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
            // 'place': [
            //     'Рестораны',
            //     'Кондиционеры на терассе',
            //     'Вкусный кофе',
            //     'Живая музыка',
            //     'Винная карта',
            //     'Сомилье',
            //     'Чайная карта',
            //     'Спокойная атмосфера',
            //     'Веганское меню',
            //     'Алкогольная карта',
            // ],
            // Family Restoran
            'place': [
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
    computed: {
        varsOfSchemes() {
            return chains || []
        },
        serializedLocal() {
            return JSON.stringify(this.local || {})
        },
        serializedIncoming() {
            return JSON.stringify(this.incoming || {})
        }
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
        },
        getSchemeResult() {
            if (this.selectedScheme) {
                return runScheme(this.selectedScheme, this.local, this.incoming);
            } else {
                return 'false';
            }
        },
    },
});

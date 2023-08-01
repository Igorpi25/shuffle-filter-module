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
                            type: 'shuffle-filter',
                            result: false,
                        },
                        {
                            id: 'A2',
                            type: 'shuffle-filter',
                            result: true,
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
                {
                    id: 'Z3',
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

// Export are variables to the window
if (typeof window !== 'undefined') {
    window.MainChain = MainChain;
    window.SecondChain = SecondChain;
    // Export other schemas as needed
    // window.Schema2 = Schema2;
    // window.Schema3 = Schema3;
}
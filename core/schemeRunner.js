function getParamValue({scheme, param}) {
    switch (param.source) {
        case 'inline':
            return param.value;
        case 'local':
            return scheme.params.local[param.key];
        case 'incoming':
            return scheme.params.incoming[param.key];
        default:
            return [];
    }
}

function runFilterIntersection({scheme, element}) {

    let first = getParamValue({scheme: scheme, param: element.params[0]});

    for (let i = 1; i < element.params.length; i++) {
        let second = getParamValue({scheme: scheme, param: element.params[i]});
        if (0 < first.filter(x => second.indexOf(x) !== -1).length) return true;
    }
    
    return false;
}

function runFilter({scheme, element}) {
    const result = "string" === typeof element.result ? element.result === "true" : !!element.result;
    return result;
}

function runRow({scheme, element}) {
    for (let child of element.childs) {
        if (!runElement({scheme: scheme, element: child})) return false;
    }
    return true;
}

function runColumn({scheme, element}) {
    for (let child of element.childs) {
        if (runElement({scheme: scheme, element: child})) return true;
    }
    return false;
}

function runNot({scheme, element}) {
    for (let child of element.childs) {
        if (!runElement({scheme: scheme, element: child})) return true;
    }
    return false;
}

function runAggregationItem({scheme, element}) {
    return element;
}

function calculateFilteringSchemeWithIncomingValue({filteringScheme, key, value}) {
    
    filteringScheme.params.incoming[key] = value;

    return runScheme(filteringScheme);
}

function runAggregationList({scheme, element}) {
    let result = [];
    for (let param of element.params) {
       let items = getParamValue({scheme: scheme, param: param});
       result.push(...items);
    }
    return result;
}

function runAggregationJoin({scheme, element}) {
    let items = [];
    for (let child of element.childs) {
        items.push(...runElement({scheme: scheme, element: child}));
    }
    return items;
}

function runAggregationOrder({scheme, element}) {
    let items = [];
    for (let child of element.childs) {
        items.push(...runElement({scheme: scheme, element: child}));
    }

    let orderDirection = getParamValue({scheme: scheme, param: element.params.find((param) => param.type === 'order-direction')});
    let orderBy = getParamValue({scheme: scheme, param: element.params.find((param) => param.type === 'order-by')});

    items.sort(function(a, b) {
        if(a[orderBy] < b[orderBy]) { return -1; }
        if(a[orderBy] > b[orderBy]) { return 1; }
        return 0;
    });

    if (orderDirection === 'desc') {
        items.reverse();
    }

    return items;
}

function runAggregationFilter({scheme, element}) {
    
    let items = [];
    for (let child of element.childs) {
        items.push(...runElement({scheme: scheme, element: child}));
    }

    let filteringScheme = getParamValue({scheme: scheme, param: element.params.find((param) => param.type === 'scheme')});
    let targetKey = getParamValue({scheme: scheme, param: element.params.find((param) => param.type === 'target')});

    let filteringSchemeCopy = JSON.parse(JSON.stringify(filteringScheme)); //use copy to prevent unlimited cycle

    let result = [];
    for (let item of items) {
        if(calculateFilteringSchemeWithIncomingValue({
            filteringScheme: filteringSchemeCopy,
            key: targetKey,
            value: item.value,
        }) === true) {
            result.push(item);
        }
    }

    return result;
    
}

function runElement({scheme, element}) {
    switch (element.type) {
        case 'shuffle-filter':
            return runFilter({scheme: scheme, element: element});
        case 'shuffle-filter-intersection':
            return runFilterIntersection({scheme: scheme, element: element});
        case 'shuffle-row':
            return runRow({scheme: scheme, element: element});
        case 'shuffle-not':
            return runNot({scheme: scheme, element: element});
        case 'shuffle-column':
            return runColumn({scheme: scheme, element: element});
        case 'shuffle-aggregation-list':
            return runAggregationList({scheme: scheme, element: element});
        case 'shuffle-aggregation-join':
            return runAggregationJoin({scheme: scheme, element: element});
        case 'shuffle-aggregation-order':
            return runAggregationOrder({scheme: scheme, element: element});
        case 'shuffle-aggregation-filter':
            return runAggregationFilter({scheme: scheme, element: element});
        default:
            return false;
    }
}

function runScheme(scheme) {
    return runElement({scheme: scheme, element: scheme.scheme});
}
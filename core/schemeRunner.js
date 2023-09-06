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

function runAggregationItem({scheme, element}) {
    return element;
}

// TODO hardcoded. target ignored
function calculateItemInScheme({scheme, item}) {
    
    let chain = scheme.params.incoming.chain;

    chain.params.incoming.place = item.value;

    return runElement({ scheme: chain, element: chain.scheme});
}

function runAggregationList({scheme, element}) {
    let result = []
    for (let child of element.childs) {
        if(child.type == 'shuffle-aggregation-item'){
            result.push(child);
        }
    }
    return result;
}

function runAggregationFilter({scheme, element}) {
    
    let result = []
    for (let child of element.childs) {
        if(child.type == 'shuffle-aggregation-item'){
            if(calculateItemInScheme({scheme: scheme, item: child})){
                result.push(child);
            }
        }else if(child.type == 'shuffle-aggregation-list'){
            result.push(...runAggregationFilter({scheme:scheme, element: child}))
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
        case 'shuffle-column':
            return runColumn({scheme: scheme, element: element});
        case 'shuffle-aggregation-item':
            return runAggregationItem({scheme: scheme, element: element});
        case 'shuffle-aggregation-list':
            return runAggregationList({scheme: scheme, element: element});
        case 'shuffle-aggregation-filter':
            return runAggregationFilter({scheme: scheme, element: element});
        default:
            return false;
    }
}

function runScheme(scheme) {
    return runElement({scheme: scheme, element: scheme.scheme});
}
function getParamValue(param, local, incoming) {
    switch (param.source) {
        case 'inline':
            return param.value;
        case 'local':
            return local[param.key];
        case 'incoming':
            return incoming[param.key];
        default:
            return [];
    }
}

function runFilterIntersection(element, local, incoming) {
    if (0 < element.params.length && element.params.length % 2 !== 0) {
        throw new Error('Number of params should be even.');
    }

    let first = getParamValue(element.params[0], local, incoming);
    let second = getParamValue(element.params[1], local, incoming);

    if (!Array.isArray(first) || !Array.isArray(second)) {
        throw new Error('Params should be arrays.');
    }

    return 0 < first.filter(x => second.indexOf(x) !== -1).length;
}

function runFilter(element, local, incoming) {
    const result = "string" === typeof element.result ? element.result === "true" : !!element.result;
    return result;
}

function runRow(element, local, incoming) {
    for (let child of element.childs) {
        if (!runElement(child, local, incoming)) return false;
    }
    return true;
}

function runColumn(element, local, incoming) {
    for (let child of element.childs) {
        if (runElement(child, local, incoming)) return true;
    }
    return false;
}

function runAggregationItem(element, local, incoming) {
    return element;
}

// TODO hardcoded. target ignored
function calculateItemInScheme(item, local, incoming) {
    
    let chain = incoming.chain;

    chain.params.incoming.place = item.value;

    return runElement(chain.scheme,chain.params.local,chain.params.incoming);
}

function runAggregationList(element, local, incoming) {
    let result = []
    for (let child of element.childs) {
        if(child.type == 'shuffle-aggregation-item'){
            result.push(child);
        }
    }
    return result;
}

function runAggregationFilter(element, local, incoming) {
    let result = []
    for (let child of element.childs) {
        if(child.type == 'shuffle-aggregation-item'){
            if(calculateItemInScheme(child,local,incoming)){
                result.push(child);
            }
        }else if(child.type == 'shuffle-aggregation-list'){
            result.push(...runAggregationFilter(child,local, incoming))
        }   
    }
    return result;
}

function runElement(element, local, incoming) {
    switch (element.type) {
        case 'shuffle-filter':
            return runFilter(element, local, incoming);
        case 'shuffle-filter-intersection':
            return runFilterIntersection(element, local, incoming);
        case 'shuffle-row':
            return runRow(element, local, incoming);
        case 'shuffle-column':
            return runColumn(element, local, incoming);
        case 'shuffle-aggregation-item':
            return runAggregationItem(element, local, incoming);
        case 'shuffle-aggregation-list':
            return runAggregationList(element, local, incoming);
        case 'shuffle-aggregation-filter':
            return runAggregationFilter(element, local, incoming);
        default:
            return false;
    }
}

function runScheme(scheme) {
    return runElement(scheme.scheme, scheme.params?.local, scheme.params?.incoming);
}
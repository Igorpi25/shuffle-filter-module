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

function runFilterIntersection(node, local, incoming) {
    if (0 < node.params.length && node.params.length % 2 !== 0) {
        throw new Error('Number of params should be even.');
    }

    let first = getParamValue(node.params[0], local, incoming);
    let second = getParamValue(node.params[1], local, incoming);

    if (!Array.isArray(first) || !Array.isArray(second)) {
        throw new Error('Params should be arrays.');
    }

    return 0 < first.filter(x => second.indexOf(x) !== -1).length;
}

function runFilter(scheme, local, incoming) {
    const result = "string" === typeof scheme.result ? scheme.result === "true" : !!scheme.result;
    return result;
}

function runRow(scheme, local, incoming) {
    for (let child of scheme.childs) {
        if (!runNode(child, local, incoming)) return false;
    }
    return true;
}

function runColumn(scheme, local, incoming) {
    for (let child of scheme.childs) {
        if (runNode(child, local, incoming)) return true;
    }
    return false;
}

function runAggregationItem(scheme, local, incoming) {
    return scheme;
}

// TODO hardcoded. target ignored
function calculateItemInScheme(item, local, incoming) {
    
    let chain = incoming.chain;

    chain.params.incoming.place = item.value;

    return runNode(chain.scheme,chain.params.local,chain.params.incoming);
}

function runAggregationList(scheme, local, incoming) {
    let result = []
    for (let child of scheme.childs) {
        if(child.type == 'shuffle-aggregation-item'){
            result.push(child);
        }
    }
    return result;
}

function runAggregationFilter(scheme, local, incoming) {
    let result = []
    for (let child of scheme.childs) {
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

function runNode(node, local, incoming) {
    switch (node.type) {
        case 'shuffle-filter':
            return runFilter(node, local, incoming);
        case 'shuffle-filter-intersection':
            return runFilterIntersection(node, local, incoming);
        case 'shuffle-row':
            return runRow(node, local, incoming);
        case 'shuffle-column':
            return runColumn(node, local, incoming);
        case 'shuffle-aggregation-item':
            return runAggregationItem(node, local, incoming);
        case 'shuffle-aggregation-list':
            return runAggregationList(node, local, incoming);
        case 'shuffle-aggregation-filter':
            return runAggregationFilter(node, local, incoming);
        default:
            return false;
    }
}

function runScheme(scheme) {
    return runNode(scheme.scheme, scheme.params?.local, scheme.params?.incoming);
}
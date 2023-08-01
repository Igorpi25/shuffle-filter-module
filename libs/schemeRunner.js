function getParamValue(param, local, incoming) {
    switch(param.source) {
        case 'inline': return param.value;
        case 'local': return local[param.key];
        case 'incoming': return incoming[param.key];
        default: return [];
    }
}

function runFilterIntersection(scheme, local, incoming) {
    
    let first = getParamValue(scheme.params[0], local, incoming);
    let second = getParamValue(scheme.params[1], local, incoming);
 
    let common = first.filter(x => second.indexOf(x) !== -1)
    
    return common.length>0;
}

function runFilter(scheme, local, incoming) {
    return scheme.result;
}

function runRow(scheme, local, incoming) {
    for(let child of scheme.childs) {
        if(!runScheme(child, local, incoming))return false
    }
    return true;
}

function runColumn(scheme, local, incoming) {
    for(let child of scheme.childs) {
        if(runScheme(child, local, incoming))return true
    }
    return false;
}

function runScheme(scheme, local, incoming) {
    switch(scheme.type) {
        case 'filter': return runFilter(scheme, local, incoming);
        case 'filter-intersection': return runFilterIntersection(scheme, local, incoming);
        case 'row': return runRow(scheme, local, incoming);
        case 'column': return runColumn(scheme, local, incoming);
        default: return false;
    }
}
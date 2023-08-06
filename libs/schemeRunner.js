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

function runFilterIntersection(scheme, local, incoming) {
    if (scheme.params.length % 2 !== 0) {
        throw new Error('Number of params should be even.');
    }

    let params = scheme.params;
    let result = true;

    for (let i = 0; i < params.length; i += 2) {
        let first = getParamValue(params[i], local, incoming);
        let second = getParamValue(params[i + 1], local, incoming);

        if (!Array.isArray(first) || !Array.isArray(second)) {
            throw new Error('Params should be arrays.');
        }

        let common = first.filter(x => second.indexOf(x) !== -1);

        if (common.length === 0) {
            result = false;
            break;
        }
    }

    return result;
}

function runFilter(scheme, local, incoming) {
    const result = "string" === typeof scheme.result ? scheme.result === "true" : !!scheme.result;
    return result;
}

function runRow(scheme, local, incoming) {
    for (let child of scheme.childs) {
        if (!runScheme(child, local, incoming)) return false;
    }
    return true;
}

function runColumn(scheme, local, incoming) {
    for (let child of scheme.childs) {
        if (runScheme(child, local, incoming)) return true;
    }
    return false;
}

function runScheme(scheme, local, incoming) {
    switch (scheme.type) {
        case 'shuffle-filter':
            return runFilter(scheme, local, incoming);
        case 'shuffle-filter-intersection':
            return runFilterIntersection(scheme, local, incoming);
        case 'shuffle-row':
            return runRow(scheme, local, incoming);
        case 'shuffle-column':
            return runColumn(scheme, local, incoming);
        default:
            return false;
    }
}

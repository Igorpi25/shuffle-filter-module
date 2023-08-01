function runFilter(scheme) {
    return scheme.result;
}

function runRow(scheme) {
    for (let child of scheme.childs) {
        if (!runScheme(child)) return false
    }
    return true;
}

function runColumn(scheme) {
    for (let child of scheme.childs) {
        if (runScheme(child)) return true
    }
    return false;
}

function runScheme(scheme) {
    switch (scheme.type) {
        case 'shuffle-filter': return runFilter(scheme);
        case 'shuffle-row': return runRow(scheme);
        case 'shuffle-column': return runColumn(scheme);
        default: return false;
    }
}
function findChildById(element, matchingId) {
    if (element.id == matchingId) {
        return element;
    } else if (element.childs != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.childs.length; i++) {
            result = findChildById(element.childs[i], matchingId);
        }
        return result;
    }
    return null;
}

function findParentByChildId(element, matchingId) {
    if (element.id === matchingId) {
        return null; // Найден элемент с заданным ID, но мы ищем родительский элемент
    }

    if (element.childs) {
        for (const child of element.childs) {
            if (child.id === matchingId) {
                return element; // Найден родительский элемент с заданным ID
            }

            const parentElement = findParentByChildId(child, matchingId);
            if (parentElement) {
                return parentElement; // Найден родительский элемент в дочернем элементе
            }
        }
    }

    return null; // Родительский элемент не найден
}


function searchInSchemeById(element, matchingId) {
    if (element.id == matchingId) {
        return element;
    } else if (element.childs != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.childs.length; i++) {
            result = searchInSchemeById(element.childs[i], matchingId);
        }
        return result;
    }
    return null;
}

function findParentShuffleElement(tree, matchingId) {
    if (tree.id === matchingId) {
        return null; // Найден элемент с заданным ID, но мы ищем родительский элемент
    }

    if (tree.childs) {
        for (const child of tree.childs) {
            if (child.id === matchingId) {
                return tree; // Найден родительский элемент с заданным ID
            }

            const parentElement = findParentShuffleElement(child, matchingId);
            if (parentElement) {
                return parentElement; // Найден родительский элемент в дочернем элементе
            }
        }
    }

    return null; // Родительский элемент не найден
}


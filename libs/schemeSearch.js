function searchInSchemeById(element, matchingId){
    if(element.id == matchingId){
         return element;
    }else if (element.childs != null){
         var i;
         var result = null;
         for(i=0; result == null && i < element.childs.length; i++){
              result = searchInSchemeById(element.childs[i], matchingId);
         }
         return result;
    }
    return null;
}

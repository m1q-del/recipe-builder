function merge(recipe, csvList) {
    const parsed = csvList.split(',').map((element)=>{return element.trim()})
    
    return [...recipe, ...parsed]
}
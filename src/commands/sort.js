function sortRecipe(recipe, direction){
    const sorted = [...recipe].sort()

    if(direction === "desc"){
        return sorted.reverse()
    }

    return sorted
}
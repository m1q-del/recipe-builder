function replace(recipe, oldVal, newVal){

    const index = recipe.indexOf(oldVal)

    if(index === -1){
        return [...recipe]
    }

    const newRecipe = [...recipe]

    newRecipe[index] = newVal

    return newRecipe
}

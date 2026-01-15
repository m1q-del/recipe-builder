function exists(recipe, ingredient){
    for(let i = 0; i < recipe.length; i++){
        const element = recipe[i]

        if(element === ingredient){
            return true
        }
    }

    return false
}

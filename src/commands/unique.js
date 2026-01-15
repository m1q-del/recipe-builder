function unique(recipe){
    const newArr = []

    for(let i = 0; i < recipe.length; i++){
        const element = recipe[i]

        if(newArr.indexOf(element) === -1){
            result.push(element)
        }
    }

    return result
}

function list(recipe){
    let result = ""

    for(let i = 0; i < recipe.length; i++){
        const element = recipe[i]

        result += `${i + 1}. ${element}\n`
}
return result
}

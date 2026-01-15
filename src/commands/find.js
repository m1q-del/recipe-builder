function find(recipe, substring){
    const searchStr = substring.toUpperCase()

    return recipe.filter((item)=>{
        item.toUpperCase().includes(searchStr)
    })
}

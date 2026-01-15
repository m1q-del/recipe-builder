function undo(history){
    if(history.length <=1){
        return null
    }

    return history[history.length - 2]
}

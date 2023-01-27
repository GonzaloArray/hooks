export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(td => td.id !== action.payload)
        case '[TODO] Toggle Todo':
            return initialState.map(td => {
                
                if (td.id === action.payload) {
                    return{
                        ...td,
                        done: !td.done
                    }
                }

                return td
            })

        default:
            return initialState;
    }

}
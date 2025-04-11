type ActionType = {
    type: string

}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'


export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
// if (action.type === TOGGLE_CONSTANT) {
//     return !state
// }
//     return state

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed};
        default:
            // return state;
            throw new Error('Bad action type') // зарегистрировать ошибку, вместе стета того же самого значения
    }

}
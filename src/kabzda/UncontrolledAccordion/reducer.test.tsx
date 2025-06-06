import { expect, test } from 'vitest'
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer.tsx";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})

test('reduce should be error, because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    // action


    //expection
    expect(()=>reducer(state,{type: 'FAKETYPE'} )).toThrowError()
})
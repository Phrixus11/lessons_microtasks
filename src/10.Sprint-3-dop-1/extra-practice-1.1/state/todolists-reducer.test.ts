import {addTodolistAC, todolistsReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {TodolistType} from "../App_sprint3_1.1.tsx";
import {beforeEach, expect, test} from 'vitest';


let todolistId1: string;
let todolistId2: string;
let startState: Array<TodolistType> = [];

beforeEach(() => {
    todolistId1 = v1();
    todolistId2 = v1();
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
})


test('correct todolist should be added', () => {
    const newTodolistTitle = "New Todolist";

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
    expect(endState[0].filter).toBe("all");
});



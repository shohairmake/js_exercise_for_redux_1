import {
    addTodo,
    deleteTodo,
    toggleTodoCompleted,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO_COMPLETED
} from '../../actions/todoActionCreator';

describe('action/todoActionCreator.js test', () => {
    it("addTodo function", () => {
        const text = 'dummy';
        const action = addTodo(text);

        expect(action).toStrictEqual({
            type: ADD_TODO,
            text
        });
    });

    it("deleteTodo function", () => {
        const indexValue = 1;
        const action = deleteTodo(indexValue);

        expect(action).toStrictEqual({
            type: DELETE_TODO,
            index: indexValue
        });
    });

    it("toggleTodoCompleted function", () => {
        const indexValue = 1;
        const action = toggleTodoCompleted(indexValue);

        expect(action).toStrictEqual({
            type: TOGGLE_TODO_COMPLETED,
            index: indexValue
        });
    });
});


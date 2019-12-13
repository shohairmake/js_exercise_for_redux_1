import { todoReducer } from '../../reducers/todoReducer';
import Todo from '../../models/Todo';
import {
    addTodo,
    deleteTodo,
    toggleTodoCompleted
} from '../../actions/todoActionCreator';
const dummyArrayCreate = () => {
    return [1, 2, 3].map(num => {
        const dummy = 'dummy' + num;
        return new Todo(dummy);
    });
};

describe('reducers/todoReducer test', () => {
    describe('addTodo function', () => {
        it('Passing the addTodo action will add a Todo instance to that action to the array', () => {
            const dummy = 'dummy';
            const action = addTodo(dummy);
            const initialState = [];
            const newState = todoReducer(initialState, action);
            expect(Array.isArray(newState)).toStrictEqual(true);
            expect(newState.length).toStrictEqual(1);
            expect(newState[0] instanceof Todo).toStrictEqual(true);
            expect(newState[0].text).toStrictEqual(dummy);
            expect(newState[0].hasCompleted()).toStrictEqual(false);        });
    });
    describe('deleteTodo function', () => {
        it('Passing the deleteTodo action will delete the Todo instance to that action', () => {
            const initialState = dummyArrayCreate();
            const index = 2;
            const action = deleteTodo(index);
            const newState = todoReducer(initialState, action);
            expect(Array.isArray(newState)).toStrictEqual(true);
            expect(newState.length).toStrictEqual(2);
            newState.forEach((todo, index) => {
                expect(todo).toStrictEqual(initialState[index]);
            });
        });
    });
    describe('toggleTodoCompleted function', () => {
        it('Todo instance becomes true, if toggleTodoCompleted action is passed', () => {
            const initialState = dummyArrayCreate();
            const expectCompletedProp = [false, false, true];
            const index = 2;
            const action = toggleTodoCompleted(index);
            const newState = todoReducer(initialState, action);
            expect(Array.isArray(newState)).toStrictEqual(true);
            expect(newState.length).toStrictEqual(3);
            newState.forEach((todo, index) => {
                expect(todo.hasCompleted()).toStrictEqual(expectCompletedProp[index]);
            });
        });
    });
});
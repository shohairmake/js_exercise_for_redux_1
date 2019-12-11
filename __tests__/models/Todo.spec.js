import Todo from '../../models/Todo';

describe('model/todo.js test', () => {
    it("it has a getter for this._text", () => {
        const text = 'dummy';
        const todo = new Todo(text);

        expect(todo.text).toStrictEqual(text);
    });

    it("can get the value by hasCompleted method", () => {
        const todo = new Todo('dummy');
        expect(todo.hasCompleted()).toStrictEqual(todo._completed);
    });

    it("can be change the value by toggle method", () => {
        const todo = new Todo('dummy');
        expect(todo.hasCompleted()).toStrictEqual(false);
        todo.toggle();
        expect(todo.hasCompleted()).toStrictEqual(true);
    });
});
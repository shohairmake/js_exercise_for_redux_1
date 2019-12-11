import Todo from '../../models/Todo';

describe('model/todo.js test', () => {
    it("it has a getter for this._text", () => {
        const text = 'dammy';
        const todo = new Todo(text);

        expect(todo.text).toStrictEqual(text);
    });

    it("can get the value by hasCompleted method", () => {
        const todo = new Todo('dammy');
        expect(todo.hasCompleted()).toStrictEqual(todo._completed);
    });

    it("can be change the value by toggle method", () => {
        const todo = new Todo('dammy');
        expect(todo._completed).toStrictEqual(false);
        todo.toggle();
        expect(todo._completed).toStrictEqual(true);
    });
});
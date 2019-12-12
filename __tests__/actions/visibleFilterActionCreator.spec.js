import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';

describe('actions/visibleFilterActionCreator.js test', () => {
    it("show all method", () => {
        expect(showAll()).toStrictEqual({
            type: SHOW_ALL
        });
    });

    it("showActive method", () => {
        expect(showActive()).toStrictEqual({
            type: SHOW_ACTIVE
        });
    });

    it("showCompleted method", () => {
        expect(showCompleted()).toStrictEqual({
            type: SHOW_COMPLETED
        });
    });
});
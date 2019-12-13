import { visibleFilterReducer } from '../../reducers/visibleFilterReducer';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';

describe('reducer/visibleFilterReducer test', () => {
    const createInithialState = () => {
        const mockAction = {};
        const state = visibleFilterReducer(undefined, mockAction);
        return state;
    };

    it("The initial value of state is SHOW_ALL", () => {
        const state = createInithialState();
        expect(state).toStrictEqual(SHOW_ALL);
    });

    it("return string 'SHOW_ALL' when action.type === SHOW_ALL", () => {
        const state = createInithialState();
        const action = showAll();
        const newState = visibleFilterReducer(state, action);
        expect(newState).toStrictEqual(SHOW_ALL);
    });

    it("return SHOW_ACTIVE when action.type === SHOW_ACTIVE", () => {

        const state = createInithialState();
        const action = showActive();
        const newState = visibleFilterReducer(state, action);
        expect(newState).toStrictEqual(SHOW_ACTIVE);
    });

    it("return SHOW_COMPLETED when action.type === SHOW_COMPLETED", () => {

        const state = createInithialState();
        const action = showCompleted();
        const newState = visibleFilterReducer(state, action);
        expect(newState).toStrictEqual(SHOW_COMPLETED);
    });
});
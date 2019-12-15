import store from '../../store';
import { SHOW_ALL } from '../../actions/visibleFilterActionCreator';

describe('store/index TEST', () => {
    it('it has a state by combineReducers', () => {
        expect(store.getState()).toStrictEqual({
            todos: [],
            visibleFilter: SHOW_ALL
        });
    });
});

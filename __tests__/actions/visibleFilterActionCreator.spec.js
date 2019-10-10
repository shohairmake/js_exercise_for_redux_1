import {
  // 定数
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  SET_VISIBILITY_FILTER,

  // 関数
  showAll,
  showActive,
  showCompleted
} from '../../actions/visibleFilterActionCreator';

describe('todoActionCreatorのテスト', () => {
  it('showAll関数', () => {
    expect( showAll() ).toStrictEqual(
      {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_ALL
      }
    );
  });

  it('showActive関数', () => {
    expect( showActive() ).toStrictEqual(
      {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_ACTIVE
      }
    );
  });

  it('showCompleted関数', () => {
    expect( showCompleted() ).toStrictEqual(
      {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_COMPLETED
      }
    );
  });
});


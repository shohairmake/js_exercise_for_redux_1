export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const showAll = () => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_ALL
  };
};

export const showActive = () => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_ACTIVE
  };
};

export const showCompleted = () => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_COMPLETED
  };
};
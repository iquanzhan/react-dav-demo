export default {
    namespace: 'products',
    state: [
        1,2,3,4,5,20
    ],
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };
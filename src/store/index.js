import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// 상태변화값 저장
const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  plugins: [createPersistedState()],
  // 상태변화값 저장
});

export default store;

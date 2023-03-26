// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { rootReducer } from './reducers';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasksReducer from './slices/tasksSlice';
import statsReducer from './slices/statsSlice';
import settingsReducer from './slices/settingsSlice';
import pomodoroReducer from './slices/pomodoroSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    stats: statsReducer,
    settings: settingsReducer,
    pomodoro: pomodoroReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

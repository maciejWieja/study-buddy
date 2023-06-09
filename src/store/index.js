import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from './api/notes';
import { groupsApi } from './api/groups';
import { studentsApi } from './api/students';

export * from './api/notes';
export * from './api/groups';
export * from './api/students';

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(notesApi.middleware, groupsApi.middleware, studentsApi.middleware),
});

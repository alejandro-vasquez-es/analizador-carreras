import { configureStore } from '@reduxjs/toolkit';
import { semesterSlice } from './semester/semesterSlice';


export const store = configureStore({
	reducer: {
		semester: semesterSlice.reducer,
	}
})
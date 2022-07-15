import { createSlice, current } from '@reduxjs/toolkit';
import { initialCourses, reorder } from '../../helpers';

export const semesterSlice = createSlice({
	name: 'semester',
	initialState: {
		semesters: initialCourses,
		coursesOutside: []
	},
	reducers: {
		onRemoveCourse: (state, { payload }) => {
			state.semesters = state.semesters.map((semester, index) => {
				return (payload.semesterIndex === index)
					? semester.filter(course =>
						(course.id != payload.id)
					)
					: semester
			})
		},
		onAddCourse: (state, { payload }) => {
			state.semesters = state.semesters.map((semester, index) => {
				const newArr = semester;
				if (payload.semesterIndex === index) newArr.splice(payload.destinationIndex, 0, payload.item);
				return newArr;
			}
			);
		},
		onUpdateSemester: (state, { payload }) => {
			state.semesters = state.semesters.map((semester, index) => (
				(payload.semesterIndex === index)
					? reorder(semester, payload.startIndex, payload.endIndex)
					: semester
			));
		},
		onAddCourseOutside: (state, { payload }) => {
			state.coursesOutside.splice(payload.destinationIndex, 0, payload.course);
		},
		onUpdateCoursesOutside: (state, { payload }) => {
			state.coursesOutside = reorder(current(state.coursesOutside), payload.sourceIndex, payload.destinationIndex);
		},
		onRemoveOutsideCourse: (state, { payload }) => {
			state.coursesOutside = state.coursesOutside.filter(course => payload != course.id)
		}
	}
});

export const { onRemoveCourse, onAddCourse, onUpdateSemester, onUpdateCoursesOutside, onRemoveOutsideCourse, onAddCourseOutside } = semesterSlice.actions;
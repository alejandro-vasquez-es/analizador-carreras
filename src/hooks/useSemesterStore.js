import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onRemoveCourse, onUpdateSemester, onAddCourse, onUpdateCoursesOutside, onRemoveOutsideCourse, onAddCourseOutside } from '../store/semester/semesterSlice';

export const useSemesterStore = () => {

	const dispatch = useDispatch();

	const { semesters, coursesOutside } = useSelector(state => state.semester);

	const removeCourse = payload => dispatch(onRemoveCourse(payload));
	const addCourse = payload => dispatch(onAddCourse(payload));
	const updateSemester = payload => dispatch(onUpdateSemester(payload));
	const updateCoursesOutside = payload => dispatch(onUpdateCoursesOutside(payload));
	const removeCourseOutside = id => dispatch(onRemoveOutsideCourse(id));
	const addCourseOutside = payload => dispatch(onAddCourseOutside(payload));

	return {
		//* properties
		semesters,
		coursesOutside,

		//* methods
		removeCourse,
		addCourse,
		updateSemester,
		updateCoursesOutside,
		removeCourseOutside,
		addCourseOutside
	}

}
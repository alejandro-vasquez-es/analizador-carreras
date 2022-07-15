import { validate } from './';

export const dragEnd = (props) => {

	const { result, semesters, coursesOutside, removeCourse, updateSemester, updateCoursesOutside, removeCourseOutside, addCourse, addCourseOutside } = props;

	const {
		source,
		destination,
		draggableId: idSelected,
	} = result;

	const sourceSemesterName = source?.droppableId;
	const sourceSemesterIndex = sourceSemesterName?.substr(sourceSemesterName.length - 1) - 1;

	const destinationSemesterName = destination?.droppableId;
	const destinationSemesterIndex = destinationSemesterName?.substr(destinationSemesterName.length - 1) - 1;

	if (!destination) return;

	// Move from semester to courses
	if (destination.droppableId == 'courses' && source.droppableId != 'courses') {

		const newItem = semesters[sourceSemesterIndex].find(course => course.id == idSelected);
		addCourseOutside({
			destinationIndex: destination.index,
			course: newItem
		})
		removeCourse({
			semesterIndex: sourceSemesterIndex,
			id: idSelected
		})

		return;
	}

	// reordering inside courses
	if (destination.droppableId == 'courses' && source.droppableId == 'courses') {

		updateCoursesOutside({
			sourceIndex: source.index,
			destinationIndex: destination.index,
		})

	}

	// reordering inside a semester
	if (source.droppableId == destination.droppableId && source.droppableId != 'courses') {

		if (source.index === destination.index) return;

		updateSemester({
			semesterIndex: sourceSemesterIndex,
			startIndex: source.index,
			endIndex: destination.index
		});

	}

	// moving from courses to a semester
	if (source.droppableId == 'courses' && destination.droppableId != 'courses') {

		const actualCourse = coursesOutside.find(course => course.id == idSelected);
		if (validate(actualCourse)) {
			addCourse({
				semesterIndex: destinationSemesterIndex,
				destinationIndex: destination.index,
				item: actualCourse
			});
			removeCourseOutside(idSelected);
		}
	}

	// moving from a semester to a different semester
	if (source.droppableId != 'courses' && destination.droppableId != 'courses' && source.droppableId != destination.droppableId) {

		const actualCourse = semesters[sourceSemesterIndex].find(course => course.id == idSelected);
		if (validate(actualCourse)) {
			addCourse({
				semesterIndex: destinationSemesterIndex,
				destinationIndex: destination.index,
				item: actualCourse,
			});
			removeCourse({
				semesterIndex: sourceSemesterIndex,
				id: idSelected
			})
		}

	}

}
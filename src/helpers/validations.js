import Swal from 'sweetalert2';

export const validate = (semesterDestinationIndex, semesters, actualCourse, semesterSourceIndex) => {

	return (
		areAllCoursesRequiredAproved(semesterDestinationIndex, semesters, actualCourse) &&
		hasNeededCredits(semesterDestinationIndex, semesters, actualCourse, semesterSourceIndex)
	);
	//Todo: validate when i can move a course to this semester
}

const areAllCoursesRequiredAproved = (semesterDestinationIndex, semesters, actualCourse) => {

	const { requiredCourses } = actualCourse;
	const coursesRquieredAproved = [];

	for (let i = 0; i < semesterDestinationIndex; i++) {
		const semester = semesters[i];

		semester.forEach(({ id }) => {

			if (requiredCourses.some(idRequired => idRequired == id)) {
				coursesRquieredAproved.push(id);
			}

		});
	}


	const difference = requiredCourses.filter(course => !coursesRquieredAproved.includes(course));

	if (difference.length > 0)
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: `No se puede colocar el curso en este semestre! Faltan cursos por ganar: ${difference.join(', ')}`
		});

	return (requiredCourses.length == coursesRquieredAproved.length);

}

const hasNeededCredits = (semesterDestinationIndex, semesters, actualCourse, semesterSourceIndex) => {

	if (actualCourse.creditsRequired == null) return true;

	let { creditsRequired } = actualCourse;
	creditsRequired = parseInt(creditsRequired.split('cr')[0]);


	let actualCredits = 0;

	for (let i = 0; i < semesterDestinationIndex; i++) {
		const semester = semesters[i];

		semester.forEach(course => {
			actualCredits += course.credits;
		});
	}

	if (semesterSourceIndex < semesterDestinationIndex)
		actualCredits -= actualCourse.credits;

	if (creditsRequired > actualCourse) {
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: `No se puede colocar el curso en este semestre! Tienes ${actualCredits}cr y necesitas ${creditsRequired}cr`
		});
		return false
	}

	return true;
}

//Todo: when the course is not available in the semester

//Todo: when the course is moved and in futures semesters of the source are courses that required
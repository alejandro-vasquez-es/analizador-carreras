import { Draggable } from 'react-beautiful-dnd';
import { Course } from './';

export const CoursesList = ({ courses }) => {
	return (
		courses.map((course, i) => (
			<Draggable
				key={course.id}
				draggableId={course.id}
				index={i}
			>
				{
					(draggableProvided) =>
						<Course
							course={course}
							draggableProvided={draggableProvided}
						/>
				}
			</Draggable>
		)))
}

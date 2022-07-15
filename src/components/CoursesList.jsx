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
				{(draggableProvided) => (
					<li
						{...draggableProvided.draggableProps}
						ref={draggableProvided.innerRef}
						{...draggableProvided.dragHandleProps}
						className='m-0 p-0 flex-1 min-w-1/5 max-w-1/4'
					>
						<Course course={course} />
					</li>
				)}
			</Draggable>
		)))
}

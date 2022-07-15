import { Droppable } from 'react-beautiful-dnd';

import { useSemesterStore } from '../hooks'
import { CoursesList } from '.';

export const OutsideCourses = () => {

	const { coursesOutside } = useSemesterStore();

	return (
		<div className='flex flex-row w-full'>
			<h2 className='text-xl font-bold mt-4'>Cursos:</h2>

			<Droppable
				direction='horizontal'
				droppableId='courses'
			>
				{(droppableProvided) => (
					<ul
						{...droppableProvided.droppableProps}
						ref={droppableProvided.innerRef}
						className='flex flex-row m-3 items-center flex-wrap w-full overflow-x-hidden min-h-4rm center rounde-lg border-dashed border-2 border-blue-300'
					>
						<CoursesList courses={coursesOutside} />
						{droppableProvided.placeholder}
					</ul>
				)}
			</Droppable>
		</div>
	)
}

import { Droppable } from 'react-beautiful-dnd';

import { useSemesterStore } from '../hooks'
import { CoursesList } from '.';

export const OutsideCourses = () => {

	const { coursesOutside } = useSemesterStore();

	return (
		<div className='flex flex-row w-full sticky top-0 bg-neutral-800 p-2 rounde-sm'>
			<h2 className='text-xl font-bold mt-4'>Cursos:</h2>

			<Droppable
				direction='horizontal'
				droppableId='courses'
			>
				{(droppableProvided) => (
					<ul
						{...droppableProvided.droppableProps}
						ref={droppableProvided.innerRef}
						className='lg:flex-wrap flex flex-row overflow-x-auto grow items-center m-3 min-h-4rm center rounde-lg border-dashed border-2 border-neutral-700'
					>
						<CoursesList courses={coursesOutside} />
						{droppableProvided.placeholder}
					</ul>
				)}
			</Droppable>
		</div>
	)
}

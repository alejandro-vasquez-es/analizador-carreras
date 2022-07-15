import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSemesterStore } from '../hooks/useSemesterStore'
import { Item } from './Item';

export const Courses = () => {

	const { coursesOutside } = useSemesterStore();

	return (
		<div className='flex flex-row w-full'>
			<h2 className='text-xl font-bold mt-4'>Cursos:</h2>

			<Droppable
				direction='horizontal'
				droppableId='courses'
			>{(droppableProvided) => (
				<ul
					{...droppableProvided.droppableProps}
					ref={droppableProvided.innerRef}
					className='flex flex-row m-3 items-center flex-wrap w-full overflow-x-hidden'
				>
					{coursesOutside.map((course, i) => (
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
									className='m-0 p-0 flex-1 max-w-1/4'
								>
									<Item course={course} />
								</li>
							)}
						</Draggable>
					))}
					{droppableProvided.placeholder}
				</ul>
			)}
			</Droppable>
		</div>
	)
}

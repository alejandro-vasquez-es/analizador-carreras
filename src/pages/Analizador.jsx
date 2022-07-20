
import { DragDropContext } from 'react-beautiful-dnd';

import { Table, OutsideCourses } from '../components';
import { useSemesterStore } from '../hooks';
import { dragEnd } from '../helpers';

export const Analizador = () => {

	const semestersInfo = useSemesterStore();

	return (
		<div className='w-screen flex gap-4 flex-col items-center my-8 container mx-auto px-4 '>
			<h1 className="text-4xl font-bold text-center">
				Analizador carreras CUNOC
			</h1>

			<DragDropContext onDragEnd={(result) => dragEnd({ result, ...semestersInfo })}>

				<OutsideCourses />
				<Table />

			</DragDropContext>

		</div >
	)

}

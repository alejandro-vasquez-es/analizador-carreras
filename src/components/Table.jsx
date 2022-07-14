import { Draggable, Droppable } from 'react-beautiful-dnd'
import { CicleList } from './CicleList';
import { Item } from './Item'


export const Table = ({ cicles }) => {

	return (

		<div className='mt-4 bg-neutral-700 p-1 shadow rounded-lg'>

			{cicles.map((courses, i) => (
				<CicleList courses={courses} key={i} semestre={`Semestre ${i + 1}`} />
			))}

		</div>

	)
}

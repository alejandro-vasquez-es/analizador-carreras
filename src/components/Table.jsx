import { CicleList } from './CicleList';

export const Table = ({ semesters }) => {

	return (

		<div className='mt-4 bg-neutral-700 p-1 shadow rounded-lg w-full'>

			{semesters.map((courses, i) => (
				<CicleList courses={courses} key={i} semestre={`Semestre ${i + 1}`} />
			))}

		</div >

	)
}

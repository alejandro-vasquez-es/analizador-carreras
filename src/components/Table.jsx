import { Semester } from './';
import { useSemesterStore } from '../hooks';

export const Table = () => {

	const { semesters } = useSemesterStore();

	return (

		<div className='bg-neutral-700 p-1 shadow rounded-lg w-full'>

			{semesters.map((courses, i) => (
				<Semester courses={courses} key={i} semesterName={`Semestre ${i + 1}`} />
			))}

		</div >

	)
}

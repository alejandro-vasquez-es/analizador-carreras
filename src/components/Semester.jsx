import { Droppable } from 'react-beautiful-dnd';

import { CoursesList } from './';

export const Semester = ({ courses, semesterName }) => {

  return (
    <Droppable
      direction='horizontal'
      droppableId={semesterName}
    >
      {(droppableProvided) => (

        <div
          ref={droppableProvided.innerRef}
          className='flex p-2 gap-1'
        >
          <h2 className='shrink-0 mt-4  font-bold text-lg text-neutral-400 '>{semesterName}</h2>
          <ul
            {...droppableProvided.droppableProps}
            className='lg:flex-wrap flex flex-row overflow-x-auto grow items-center'
          >
            <CoursesList courses={courses} />
            {droppableProvided.placeholder}
          </ul>
        </div>
      )}
    </Droppable>
  )
}

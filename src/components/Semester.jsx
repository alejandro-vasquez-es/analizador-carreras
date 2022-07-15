import { Droppable } from 'react-beautiful-dnd';

import { CoursesList } from './';

export const Semester = ({ courses, semesterName }) => {

  return (
    <Droppable
      direction='horizontal'
      droppableId={semesterName}
    >
      {(droppableProvided) => (
        <ul
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          className='flex flex-row m-3 items-center flex-wrap'
        >
          <h2 className='font-bold text-xl text-neutral-400 mr-'>{semesterName}</h2>
          <CoursesList courses={courses} />
          {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  )
}

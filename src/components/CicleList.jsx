import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Item } from './Item';

export const CicleList = ({ courses: initialCourses, semestre }) => {

  const [courses, setCourses] = useState(initialCourses);


  return (
    <Droppable
      direction='horizontal'
      droppableId={semestre}
    >
      {(droppableProvided) => (
        <ul
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          className='flex flex-row m-3 items-center'
        >
          <h2 className='font-bold text-xl text-neutral-400 mr-5'>{semestre}</h2>
          {
            courses.map((course, index) => (
              <Draggable
                key={course.id}
                draggableId={course.id}
                index={index}
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
            )
            )
          }
          {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  )
}

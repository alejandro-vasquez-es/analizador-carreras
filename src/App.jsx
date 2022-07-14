
import { useState } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';


import { initialCourses, reorder } from './helpers';
import { Table } from './components/Table';

const App = () => {

  const dragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    setCourses((prevCourses) =>
      reorder(prevCourses, source.index, destination.index)
    );
  }

  return (
    <div className='flex flex-col items-center container'>
      <h1 className="text-4xl font-bold">
        Analizador carreras CUNOC
      </h1>
      <DragDropContext onDragEnd={dragEnd}>
        <Table cicles={initialCourses} />
      </DragDropContext>
    </div >
  )

}


export default App;

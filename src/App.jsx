
import { DragDropContext } from 'react-beautiful-dnd';

import { Table, OutsideCourses } from './components';
import { useSemesterStore } from './hooks';
import { dragEnd } from './helpers';

const App = () => {

  const semestersInfo = useSemesterStore();

  return (
    <div className='flex flex-col items-center container overflow-x-hidden'>
      <h1 className="text-4xl font-bold">
        Analizador carreras CUNOC
      </h1>

      <DragDropContext onDragEnd={(result) => dragEnd({ result, ...semestersInfo })}>

        <OutsideCourses />
        <Table />

      </DragDropContext>

    </div >
  )

}


export default App;

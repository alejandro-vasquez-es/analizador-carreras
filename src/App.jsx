
import { Provider } from 'react-redux';

import { Table } from './components/Table';
import { store } from './store';
import { Courses } from './components/Courses';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSemesterStore } from './hooks/useSemesterStore';

const App = () => {

  const { semesters, coursesOutside, removeCourse, updateSemester, updateCoursesOutside, removeCourseOutside, addCourse, addCourseOutside } = useSemesterStore();

  const dragEnd = (result) => {

    const {
      source,
      destination,
      draggableId: idSelected, // id selected
    } = result;

    const sourceSemesterName = source?.droppableId;
    const sourceSemesterIndex = sourceSemesterName?.substr(sourceSemesterName.length - 1) - 1;

    const destinationSemesterName = destination?.droppableId;
    const destinationSemesterIndex = destinationSemesterName?.substr(destinationSemesterName.length - 1) - 1;

    if (!destination) return;

    if (destination.droppableId == 'courses' && source.droppableId != 'courses') { //send from semester to courses

      const newItem = semesters[sourceSemesterIndex].find(course => course.id == idSelected);
      addCourseOutside({
        destinationIndex: destination.index,
        course: newItem
      })
      removeCourse({
        semesterIndex: sourceSemesterIndex,
        id: idSelected
      })

      return;
    }

    if (destination.droppableId == 'courses' && source.droppableId == 'courses') { // reordering inside courses

      updateCoursesOutside({
        sourceIndex: source.index,
        destinationIndex: destination.index,
      })

    }

    if (source.droppableId == destination.droppableId && source.droppableId != 'courses') { // reordering inside a semester

      if (source.index === destination.index) return;

      updateSemester({
        semesterIndex: sourceSemesterIndex,
        startIndex: source.index,
        endIndex: destination.index
      });

    }

    if (source.droppableId == 'courses' && destination.droppableId != 'courses') { // moving from courses to a semester
      const newItem = coursesOutside.find(course => course.id == idSelected);
      addCourse({
        semesterIndex: destinationSemesterIndex,
        destinationIndex: destination.index,
        item: newItem
      });
      removeCourseOutside(idSelected);
    }

    if (source.droppableId != 'courses' && destination.droppableId != 'courses' && source.droppableId != destination.droppableId) { // moving from a semester to a different semester

      const newItem = semesters[sourceSemesterIndex].find(course => course.id == idSelected);
      addCourse({
        semesterIndex: destinationSemesterIndex,
        destinationIndex: destination.index,
        item: newItem,
      });
      removeCourse({
        semesterIndex: sourceSemesterIndex,
        id: idSelected
      })

    }

  }

  return (
    <div className='flex flex-col items-center container overflow-x-hidden'>
      <h1 className="text-4xl font-bold">
        Analizador carreras CUNOC
      </h1>

      <DragDropContext onDragEnd={dragEnd}>

        <Courses />
        <Table semesters={semesters} />

      </DragDropContext>

    </div >
  )

}


export default App;

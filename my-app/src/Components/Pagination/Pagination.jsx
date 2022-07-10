import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { taskSelector } from '../../redux/selector';

export default function Pagination() {

  const dispatch = useDispatch();

  const {tasks} = useSelector(taskSelector.getState);

  const [tasksPerPage] = useState(13);
  const [currentPage,setCurrentPage] = useState(1)

  const lastTaskIndex = currentPage * tasksPerPage;
  const firstTaskIndex = lastTaskIndex - tasksPerPage;
  const currentTask = tasks?.slice(firstTaskIndex, lastTaskIndex);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(tasks?.length / tasksPerPage); i++) {
    pageNumber.push(i)
  }

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_TASK', payload: currentTask})
  }, [currentTask, dispatch]);

  return (
    <div>
      <ul className="pagination" style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
        {
          pageNumber.map(number => (
            <li className="page-item" key={number}>
              <a onClick={() => setCurrentPage(number)} href='!#' className='page-link'>
                { number }
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

import Task from "../Task/Task"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axios from "axios";
import { perSelector } from '../../redux/selector';

export default function Tasks() {

const {currentTask} = useSelector(perSelector.getState);
// console.log(currentTask)
 
  const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220710T183302Z&X-Amz-Expires=86400&X-Amz-Signature=e747cc36a562fe70e28db9505295c4b00f8313a6762cfd0c4499e28f96857c14&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject';

  const [loading, setLoading] = useState(false);
  

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true)
    axios.get(url) 
      .then((dataFromServer) => {
        // console.log(dataFromServer)
        if (dataFromServer.data.length) {
          // console.log(' ----->>>>',dataFromServer.data)
          dispatch({ type: 'GET_TASKS', payload: dataFromServer.data })
          setLoading(false)          
        }
      })

  }, [dispatch]);

  

  return (
  <>
    {loading ? ('Loading...') :
      (currentTask?.map((task) => <Task task={ task } key={ task.id }/>))
    }
  </>
  )
}

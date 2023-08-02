import {useDispatch} from 'react-redux';
import {  getLaunches} from '../../redux/store/launchesSlice'; 
import { useEffect } from 'react';
import Row from '../Row/Row';
import { selectLaunches } from '../../redux/store/launchesSlice';
import { useSelector } from 'react-redux';
import { decrease } from '../../redux/store/launchesSlice';
import './List.scss'

function List() {
   const dispatch = useDispatch();
   const launches = useSelector(selectLaunches);

   useEffect(()=>{
      dispatch(getLaunches());
      dispatch(decrease())
   },[]);

   
   
  return (
   <table className='table'>
      <tr><td>Название ракеты/миссии</td>
      <td>Дата запуска</td>
      <td>Описание</td>
      </tr>
      {launches.map((launch)=>{
         console.log(launch,'in MAP')

         return <Row {...launch}  />
      })}
   </table>
  );
}

export default List;

import './App.scss';
import {  selectServerErrors,
  selectIsLoading, selectLaunches, increase,decrease } from '../../redux/store/launchesSlice';
import { useSelector, useDispatch } from 'react-redux';
import {Alert, Spin, Button} from 'antd';
import List from '../List/List';


function App() {
   const dispatch = useDispatch(); 
   const error = useSelector(selectServerErrors);
   const isLoading = useSelector(selectIsLoading);
   const launches = useSelector(selectLaunches);


   if(isLoading && launches.length === 0 ){
             
      return  <div className='wrap'><Spin size="large"/>
      </div>
   }

   if(error){
      return <Alert
      message="Error"
      description="Sorry its error"
      type="error"
    />

   }

   const inc = () =>{

      dispatch(increase())

   }

   const dec = () =>{

      dispatch(decrease())

   }
   
  

  return (
    <div className="App">
      <header className="SpaceX launches">
      SpaceX launches
      </header>
      <div className='buttons'>
         <Button className='button' onClick={inc}>По возрастанию</Button>
         <Button className='button' onClick={dec}>По убыванию</Button>
      </div>
      <List/>
    </div>
  );
}

export default App;

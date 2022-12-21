import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import DatesAction from './components/DatesAction';
import DatesCount from './components/DatesCount';
import DatesList from './components/DatesList';
import { person } from './data';
import React,{useState,useEffect} from 'react'
function App() {
/*   sm small 12 col 
py padding from top and bottom y-axis
px padding on x-axis
mx-3 margin x-axis
d-inline as one line
fs-5 fontsize
border-bottom ready library at react bootstrap as <br>
 */
const [personData, setPersonData] = useState(person)
const onDelete=()=>{
  setPersonData([])
}

const onViewData=()=>{
  setPersonData(person)
}
//useEffect used for delete data and cant return when refresh page because it render for one time
useEffect(() => {
  setPersonData([])
}, [])
  return (
    <div className='font color-body'>

      <Container className='py-5'>
      <DatesCount person={personData}/>
      <DatesList person={personData}/>
      <DatesAction deleteData={onDelete} onViewData={onViewData} />
      

      
      </Container>
    </div>
  );
}

export default App;

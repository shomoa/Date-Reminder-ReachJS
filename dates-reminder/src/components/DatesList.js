import React from 'react'
import { Row, Col } from 'react-bootstrap';

const DatesList = ({person}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm='8' className=''>

    <div className='rectangle'>
    {person.length ? (person.map((item)=>{
      return(<div key={item.id} className="d-flex border-bottom mx-3 my-3">
      <img className='img-style'  src='matched-bg2-designify.png'  alt='not found img'/>
<div className='px-2 py-3 '>
<p className=' fs-7 my-0'> {item.name}</p>  
<p className=' fs-8 my-0'>{item.date}</p>
</div>
      </div>)
    })):<h2 className="p-2 text-center">لا يوجد مواعيد اليوم</h2>}  {/* or null */}
    </div>
    </Col>
     </Row>
  )
}

export default DatesList

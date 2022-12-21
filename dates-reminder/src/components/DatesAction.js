import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

const DatesAction = ({deleteData,onViewData}) => { 
  return (
    <Row className='justify-content-center my-2'>
    <Col sm='8' className='d-flex justify-content-between'>
    <Button onClick={deleteData} className="btn btn-primary p-2">مسح الكل</Button>
    <Button onClick={onViewData} className="btn btn-primary p-2">عرض الكل</Button> 

    </Col>
     </Row>
  )
}

export default DatesAction

import React from 'react'
import { Row, Col } from 'react-bootstrap';
//perrson not defined so send it as props
const DatesCount = ({person}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm='8' className=''>
    لديك {person.length } مواعيد اليوم
    </Col>
     </Row>
  )
}

export default DatesCount
//call it without {} when import
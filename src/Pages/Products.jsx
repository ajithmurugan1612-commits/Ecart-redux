
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Products() {
  return (
    <div className='m-5'>
        <div className='row pt-5'>
            {/* duplicate column according to products */}
            <div className='col-3'>
                {/* cards */}
                <Card className='shadow p-2'>
      <Card.Img style={{height:"250px"}} variant="top" src="https://pariscornerindia.com/cdn/shop/files/blue_1800x1800_25fe3dda-f051-41e5-8381-caea31fbd6d2.jpg?v=1708061835" />
      <Card.Body className='text-center'>
        <Card.Title>Perfume</Card.Title>
        <Link to={'/products/:id'} className='btn btn-primary'>View More</Link>        
      </Card.Body>
    </Card>
            </div>
        </div>
  
    </div>
  )
}

export default Products

import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'


function Wishlist() {
  return (
    <div className='container my-5 pt-5'>
      <h1 className="pt-5 text-primary fw-bold">User's Wishlist</h1>
      <div className="row pt-5">
        <div className="col-3">
            {/* cards */}
            <Card >
      <Card.Img style={{height:'250px'}} variant="top" src="https://victorias.lk/wp-content/uploads/2021/12/366725841_614265780879235_7084599823403240879_n-1.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>VS Bombshell Perfume</Card.Title>
        <div>
            <button className='btn btn-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
            <button className='btn btn-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>        
            </div>
       
       
      </Card.Body>
    </Card>
            

        </div>
      </div>
    </div>
  )
}

export default Wishlist

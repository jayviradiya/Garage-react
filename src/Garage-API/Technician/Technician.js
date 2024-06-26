import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Technician = () => {

  const [appoinment, setAppoinment] = useState([])

  const history = useHistory()

  const getAppointment = () => {
    axios.get('https://garage-node.onrender.com/appointment/find')
      .then((res) => {
        console.log(res.data.data);
        setAppoinment(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }

  useEffect(() => {
    getAppointment()
  }, [])

   const card = () => {
    history.push('/invoice')
   }

  return (
    <div>

      <div className="container-fluid martop mb-5 martop">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-6 col-12 p-0">
              <img  width="100%" src="https://cfw.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoidGFydW5tb3RvcnMuY29tIiwidiI6NDAyNDQ4MDMzNiwiaSI6IjI4ZWY3NjNlLTVlYWQtNDUyOC01NTNkLTE5NjRmMjUyODYwMCJ9/wp-content/uploads/elementor/thumbs/Engine-brake-and-transmission-experts-q2ru83jqdzlhto2t43ni8azezp0rwen73rk99g7qe0.jpg" alt="" />
            </div>
            <div className="col-sm-6 col-12">
              <h1 className='mb-4 pt-5'>Technicaian</h1>
              <Link to="/service" className="service fw-bold">Add service..!</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid text-dark'>
        <div className="container">
          <div className="row d-flex pb-4">
            {
              appoinment.map((el,index) => {
                return <div className="col-lg-4 col-md-6 col-12 p-0 bg-white bor" key={index} onClick={card}>
                  
                    <div className="m-2 text-dark pos-rel border border-4">
                      <div className='p-2'>
                        <h2 className='text-center text-white bg-dark'>----- Technician -----</h2>
                        <h4 className='pt-1 mb-0 fw-bold' >Date : {el.appointmentDate}</h4>
                        <p className='pt-1  mb-0 fs-18'>{el.notes}</p>
                        <div className='mt-2'>
                          <a href="" className="text-dark details fw-bold ">More Details..!</a>
                        </div>
                      </div>
                    </div>
               
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technician
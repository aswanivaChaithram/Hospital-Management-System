import React from 'react'
import './DoctorCard.css'
import { useAppointments } from '../../context/AppointmentContext'

const DoctorCard = ({ doctor }) => {
  const { openRegistration } = useAppointments()
  const { name, image, specialization, department, experience, availabilityTime, fee, available } = doctor

  return (
    <div className='doctor-card'>
      <div className="doctor-img-name">
        <img src={image} alt="" />
        <h2>{name}</h2>
      </div>
      <div className="doctor-card-info">
        <p><b>Specialization:</b> {specialization}</p>
        <p><b>Department:</b> {department}</p>
        <p><b>Experience:</b> {experience}</p>
        <p><b>Availability Time:</b> {availabilityTime}</p>
        <p><b>Fee:</b> {fee}</p>
        <button
          className={`availability-btn ${available ? 'available' : 'not-available'}`}
          disabled={!available}
          onClick={() => openRegistration(doctor)}
        >
          {available ? "Available" : "Not Available"}
        </button>
      </div>
    </div>
  )
}

export default DoctorCard
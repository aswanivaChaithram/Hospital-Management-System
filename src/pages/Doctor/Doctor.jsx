import React from 'react'
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import { doctor } from '../../assets/doctor'
import './Doctor.css'
import Registration from '../../components/Registration/Registration'
import { useAppointments } from '../../context/AppointmentContext'

const Doctor = () => {
  const { showRegistration } = useAppointments()

  return (
    <div className='doctors'>
      <h1>Meet Our Team</h1>

      {showRegistration && <Registration />}

      <div className="doctors-list">
        {doctor.map((doc, index) => (
          <DoctorCard key={index} doctor={doc} />
        ))}
      </div>
    </div>
  )
}

export default Doctor
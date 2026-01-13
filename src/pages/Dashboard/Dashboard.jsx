import React from 'react'
import './Dashboard.css'
import { useAppointments } from '../../context/AppointmentContext'

const Dashboard = () => {
  const { appointments, removeAppointment } = useAppointments()

  return (
    <div className="dashboard">
      <h1>Upcoming Appointments</h1>

      <div className="table-container">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Specialization</th>
              <th>Department</th>
              <th>Date</th>
              <th>Fee</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="7">No upcoming appointments</td>
              </tr>
            ) : (
              appointments.map((a) => (
                <tr key={a.id}>
                  <td data-label="Doctor">{a.doctorName}</td>
                  <td data-label="Specialization">{a.specialization}</td>
                  <td data-label="Department">{a.department}</td>
                  <td data-label="Date">{a.date}</td>
                  <td data-label="Fee">₹{a.fee}</td>
                  <td className="cancel-cell">
                    <button className="cancel-btn" onClick={() => removeAppointment(a.id)}>Cancel</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
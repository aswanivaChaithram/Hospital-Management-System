import React from 'react'
import './Admin.css'
import { useAppointments } from '../../context/AppointmentContext'

const Admin = () => {
  const { appointments } = useAppointments()

  return (
    <div className="admin">
      <h1>Patient's Appointment details</h1>

      <div className="table-container">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Fee</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="9">
                    No upcoming appointments
                </td>
              </tr>
            ) : (
              appointments.map((a) => (
                <tr key={a.id}>
                  <td data-label="Patient Name">{a.patientName}</td>
                  <td data-label="Age">{a.age}</td>
                  <td data-label="Phone Number">{a.phone}</td>
                  <td data-label="Gender">{a.gender}</td>
                  <td data-label="Date">{a.date}</td>
                  <td data-label="Doctor Name">{a.doctorName}</td>
                  <td data-label="Department">{a.department}</td>
                  <td data-label="Fee">₹{a.fee}</td>
                  <td className="action-cell">
                    <button className="add-btn">Confirm</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="add-doctor">
        <h1>Add Doctor</h1>

        <div className="form-grid">
          <input type="text" placeholder="Doctor Name" />
          <input type="text" placeholder="Specialization" />
          <input type="text" placeholder="Department" />
          <input type="text" placeholder="Experience" />
          <input type="text" placeholder="Availability Time" />
          <input type="text" placeholder="Fee" />
        </div>

        <button className="add-doctor-btn">ADD</button>
      </div>
    </div>
  )
}

export default Admin
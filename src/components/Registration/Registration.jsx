import React, { useState } from 'react'
import './Registration.css'
import cross_icon from '../../assets/cross_icon.png'
import { useAppointments } from '../../context/AppointmentContext'

const Registration = () => {
  const { selectedDoctor, confirmAppointment, setShowRegistration } = useAppointments()
  const [form, setForm] = useState({ name: '', age: '', phone: '', gender: '', date: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));


  const submit = (e) => {
    e.preventDefault()
    setSuccess(true);

    setTimeout(() => {
    confirmAppointment(form);
    setShowRegistration(false);
  }, 2000);
  }

  return (
    <div className='registration'>
      <div className="registration-container">

        <div className="registration-header">
          <h2>Register for Appointment {selectedDoctor ? `- ${selectedDoctor.name}` : ''}</h2>
          <img src={cross_icon} alt="Close" onClick={() => setShowRegistration(false)} />
        </div>

        <form className="registration-form" onSubmit={submit}>
          <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Patient Name" required />
          <input name="age" value={form.age} onChange={handleChange} type="number" placeholder='Age' required />
          <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" required />

          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input name="date" value={form.date} onChange={handleChange} type="date" required />
          <button type="submit">Confirm Appointment</button>

          {success && (
          <div className="success-message">
            Appointment successfully completed 
          </div>
        )}
        </form>

      </div>
    </div>
  )
}

export default Registration
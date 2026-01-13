import React, { createContext, useContext, useState } from 'react';

const AppointmentContext = createContext();
export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const openRegistration = (doctor) => {
    setSelectedDoctor(doctor);
    setShowRegistration(true);
  };

  const confirmAppointment = (formData) => {
    const newAppt = {
      id: Date.now(),
      patientName: formData.name,
      age: formData.age,
      gender: formData.gender,
      date: formData.date,
      phone: formData.phone,
      doctorId: selectedDoctor?.id,
      doctorName: selectedDoctor?.name,
      specialization: selectedDoctor?.specialization,
      department: selectedDoctor?.department,
      fee: selectedDoctor?.fee,
    };
    setAppointments(prev => [...prev, newAppt]);
  };

  const removeAppointment = (id) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
    setSelectedDoctor(null); 
  }

  return (
    <AppointmentContext.Provider value={{
      appointments,
      selectedDoctor,
      showRegistration,
      openRegistration,
      confirmAppointment,
      removeAppointment,
      setShowRegistration,
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

# Hospital Management System

A comprehensive web application for managing hospital operations and patient appointments. Built with React, Vite, and React Router for seamless appointment booking and hospital administration.

## Features

### Patient Features
- **Browse Doctors**: Explore doctors by specialization and department
- **Book Appointments**: Schedule appointments with available doctors
- **View Doctor Details**: Check specialization, experience, availability, and consultation fees
- **Manage Appointments**: View and cancel confirmed appointments from personal dashboard
- **Filter by Department**: Search doctors by their specialty area
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Admin Features
- **Dashboard Analytics**: Monitor all appointments and hospital operations
- **Manage Doctor Availability**: Update doctor schedules and availability status
- **Patient Records**: Access patient appointment history and details

### General Features
- **User Authentication**: Login system for patients and admin users
- **Dynamic Navigation**: Real-time badge count for appointments
- **Informative Content**: About section, blog posts, and patient reviews
- **Contact System**: Direct communication channel with hospital
- **Responsive Layout**: Mobile-first design approach

## Tech Stack

- **Framework**: React 19.2
- **Build Tool**: Vite 7.2
- **Routing**: React Router DOM 7.11
- **Styling**: CSS3 
- **State Management**: React Context API

## Getting Started

### Prerequisites
1. Install Node.js from [nodejs.org](https://nodejs.org)
   - Verify installation in PowerShell:
   ```powershell
   node -v
   npm -v
   ```

### Installation

1. **Navigate to Frontend Directory**
   ```powershell
   cd "Hospital Management System\frontend"
   ```

2. **Install Dependencies**
   ```powershell
   npm install
   ```

3. **Start Development Server**
   ```powershell
   npm run dev
   ```
   - Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```powershell
npm run build
```

### Preview Production Build
```powershell
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── About/           # Hospital information section
│   │   ├── Blog/            # Blog posts and articles
│   │   ├── Contact/         # Contact form component
│   │   ├── DoctorCard/      # Individual doctor card display
│   │   ├── Footer/          # Footer navigation
│   │   ├── Header/          # Hero section with CTA
│   │   ├── Login/           # User authentication
│   │   ├── Navbar/          # Navigation bar with badges
│   │   ├── Registration/    # Patient registration form
│   │   └── Reviews/         # Patient reviews section
│   ├── pages/               # Main application pages
│   │   ├── Home.jsx         # Homepage with all sections
│   │   ├── Admin/           # Admin dashboard
│   │   ├── Dashboard/       # Patient dashboard
│   │   └── Doctor/          # Doctors listing page
│   ├── context/             # Context API setup
│   │   └── AppointmentContext.jsx  # Appointment state management
│   ├── assets/              # Images and data
│   │   └── doctor.js        # Doctor database with specializations
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── package.json
└── vite.config.js
```

## Core Features Breakdown

### Doctor Management
- **12+ Doctors**: Cardiologists, Orthopedists, Neurologists, Dermatologists, Pediatricians, ENT specialists, Gynecologists, and more
- **Specializations**: Each doctor has department, experience level, consultation fees, and availability status
- **Availability Times**: Doctors have defined morning, afternoon, or evening slots
- **Consultation Fees**: Range from ₹400 - ₹700 per consultation

### Appointment System
- **Quick Booking**: Select doctor and fill patient details (name, age, gender, phone, date)
- **Appointment Tracking**: Each appointment gets a unique ID
- **Appointment History**: View all booked and past appointments
- **Cancellation**: Remove appointments when needed
- **Badge Notification**: Real-time appointment count in navigation

### State Management with Context API
- `appointments`: Array of all booked appointments
- `selectedDoctor`: Currently selected doctor for booking
- `showRegistration`: Registration form visibility toggle
- Functions: `openRegistration()`, `confirmAppointment()`, `removeAppointment()`

## Available Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page with all hospital info |
| `/doctors` | Doctor | Browse and filter all doctors |
| `/dashboard` | Dashboard | Patient appointment management |
| `/admin` | Admin | Hospital administration panel |

## Customization

### Add New Doctors
Edit [src/assets/doctor.js](src/assets/doctor.js):
```javascript
{
    id: 13,
    name: "Dr. Name",
    image: doctor_image,
    specialization: "Specialization",
    department: "Department",
    experience: "X years",
    availabilityTime: "HH:MM AM/PM - HH:MM AM/PM",
    fee: 500,
    available: true
}
```

### Update Styling
- Global styles: [src/index.css](src/index.css)
- Component styles: Individual `.css` files in component directories
- Header background: [src/components/Header/Header.css](src/components/Header/Header.css)
- Doctor cards: [src/components/DoctorCard/DoctorCard.css](src/components/DoctorCard/DoctorCard.css)

### Modify Hospital Information
- Update hospital name in [src/components/Header/Header.jsx](src/components/Header/Header.jsx)
- Edit about content: [src/components/About/About.jsx](src/components/About/About.jsx)
- Customize contact info: [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx)

## Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## Deployment

### GitHub Pages
```powershell
npm run deploy
```

Ensure your `package.json` includes the homepage URL for GitHub Pages deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)


## Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.11.0"
}
```


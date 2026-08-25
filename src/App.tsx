import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'

import AMC from './pages/services/AMC'
import ComputerIT from './pages/services/ComputerIT'
import EWaste from './pages/services/EWaste'
import GeM from './pages/services/GeM'
import RentalIT from './pages/services/RentalIT'
import ScanningDigitization from './pages/services/ScanningDigitization'

import Government from './pages/industries/Government'
import Banking from './pages/industries/Banking'
import Education from './pages/industries/Education'
import Corporate from './pages/industries/Corporate'

import IndianPost from './pages/clients/IndianPost'
import IndianRailways from './pages/clients/IndianRailways'
import ESIC from './pages/clients/ESIC'
import StateGovernment from './pages/clients/StateGovernment'

import Footer from './components/Footer'
import Navbar from './components/Navbar'


/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      })
    }
  }, [pathname])

  return null
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* =========================
            HOME
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            SERVICES
        ========================== */}

        <Route
          path="/services/computer-it-hardware"
          element={<ComputerIT />}
        />

        <Route
          path="/services/amc"
          element={<AMC />}
        />

        <Route
          path="/services/e-waste"
          element={<EWaste />}
        />

        <Route
          path="/services/gem"
          element={<GeM />}
        />

        <Route
          path="/services/rental-it"
          element={<RentalIT />}
        />

        <Route
          path="/services/scanning-digitization"
          element={<ScanningDigitization />}
        />


        {/* =========================
            INDUSTRIES
        ========================== */}

        <Route
          path="/industries/government"
          element={<Government />}
        />

        <Route
          path="/industries/banking"
          element={<Banking />}
        />

        <Route
          path="/industries/education"
          element={<Education />}
        />

        <Route
          path="/industries/corporate"
          element={<Corporate />}
        />


        {/* =========================
            CLIENTS
        ========================== */}

        <Route
          path="/clients/indian-post"
          element={<IndianPost />}
        />

        <Route
          path="/clients/indian-railways"
          element={<IndianRailways />}
        />

        <Route
          path="/clients/esic"
          element={<ESIC />}
        />

        <Route
          path="/clients/state-government"
          element={<StateGovernment />}
        />

      </Routes>


      {/* =========================
          FOOTER
      ========================== */}

      <Footer />

    </>
  )
}

export default App
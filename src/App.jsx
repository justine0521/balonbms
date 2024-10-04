import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RequestForm from './Components/RequestForm';
// import { ActiveSectionProvider } from './Components/ActiveSectionContext';

import BarangayClearance from './Request-Certificate/BaragayClearance'
import CertificateOfResidency from './Request-Certificate/CertificateOfResidency'
import CertificateOfIndigency from './Request-Certificate/CertificateOfIndigency'
import CommonLaw from './Request-Certificate/CommonLaw'
import BusinessClearance from './Request-Certificate/BusinessClearance'
import TravelPermit from './Request-Certificate/TravelPermit'
import Guardianship from './Request-Certificate/Guardianship'
import JobSeeker from './Request-Certificate/JobSeeker'
import CertificateForSoloParent from './Request-Certificate/CertificateForSoloParent'

import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import TrackRequest from './Pages/TrackRequest';
import Faq from './Pages/Faq';
import Location from './Pages/Location';
import Announcement from './Pages/Announcement';
import Captain from './Pages/Captain';


function App() {
  return (
    <main>
      <BrowserRouter>
        {/* <ActiveSectionProvider> */}
          <Header />
          <Routes>
            {/* Navbar */}
            <Route path="/" element={<Home />} />
            <Route path='/pages/about' element={<About />} />
            <Route path='/pages/service' element={<Service />} />
            <Route path='/pages/news' element={<Announcement />} />
            <Route path='/pages/faq' element={<Faq />} />
            <Route path='/pages/track-request' element={<TrackRequest />} />

            <Route path="/barangay-clearance-form" element={<BarangayClearance />} />
            <Route path='/certificate-of-residency-form' element={<CertificateOfResidency />} />
            <Route path='/certificate-of-indigency-form' element={<CertificateOfIndigency />} />
            <Route path='/common-law-form' element={<CommonLaw />} />
            <Route path='/business-clearance-form' element={<BusinessClearance />} />
            <Route path='/travel-permit-form' element={<TravelPermit />} />
            <Route path='/guardianship-form' element={<Guardianship />} />
            <Route path='/job-seeker-form' element={<JobSeeker />} />
            <Route path='/certificate-for-solo-parent-form' element={<CertificateForSoloParent />} />
           
          </Routes>
          <Footer />
        {/* </ActiveSectionProvider> */}
      </BrowserRouter>
    </main>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeNursingPage from "./pages/HomeNursingPage";
import HomeDoctorConsultationPage from "./pages/HomeDoctorConsultationPage";
import ElderlyCarePage from "./pages/ElderlyCarePage";
import PhysiotherapyPage from "./pages/PhysiotherapyPage";
import EmergencyCarePage from "./pages/EmergencyCarePage";
import TelemedicinePage from "./pages/TelemedicinePage";
import EquipmentRentalPage from "./pages/EquipmentRentalsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-nursing" element={<HomeNursingPage />} />
        <Route path="/home-doctor" element={<HomeDoctorConsultationPage />} />
        <Route path="/elderly-care" element={<ElderlyCarePage />} />
        <Route path="/physiotherapy" element={<PhysiotherapyPage />} />
        <Route path="/emergency-care" element={<EmergencyCarePage />} />
        <Route path="/telemedicine" element={<TelemedicinePage />} />
        <Route path="/equipments" element={<EquipmentRentalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
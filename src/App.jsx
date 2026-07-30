import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeNursingPage from "./pages/HomeNursingPage";
import HomeDoctorConsultationPage from "./pages/HomeDoctorConsultationPage";
import ElderlyCarePage from "./pages/ElderlyCarePage";
import PhysiotherapyPage from "./pages/PhysiotherapyPage";
import EmergencyCarePage from "./pages/EmergencyCarePage";
import ApplicationForm from "./pages/ApplicationForm";
import TelemedicinePage from "./pages/TelemedicinePage";
import EquipmentRentalPage from "./pages/EquipmentRentalsPage";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/home-nursing" element={<HomeNursingPage />} />
          <Route path="/home-doctor" element={<HomeDoctorConsultationPage />} />
          <Route path="/elderly-care" element={<ElderlyCarePage />} />
          <Route path="/physiotherapy" element={<PhysiotherapyPage />} />
          <Route path="/emergency-care" element={<EmergencyCarePage />} />
          <Route path="/telemedicine" element={<TelemedicinePage />} />
          <Route path="/equipments" element={<EquipmentRentalPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login-page/index";
import AuthenticatedUser from"../pages/authenticated/index"
import UnauthenticatedUser from"../pages/unauthenticated/index"
import ContactsPage from "../pages/contacts";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Autenticado" element={<AuthenticatedUser/>} />
      <Route path="/NaoAutenticado" element={<UnauthenticatedUser/>} />
      <Route path="/Contatos" element={<ContactsPage/>} />
      
    </Routes>
  </Router>
);

export default AppRoutes;

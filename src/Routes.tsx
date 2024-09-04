import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Rede from "./pages/Rede";
import SobreNos from "./pages/SobreNos";
import Eventos from "./pages/Eventos";
import NossosParceiros from "./pages/NossosParceiros";
import Erro404 from "./pages/Erro404";
import Logo from "./pages/Logo";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/rede-nej-poa" element={<Rede />} />
			<Route path="/sobre-nos" element={<SobreNos />} />
			<Route path="/eventos" element={<Eventos />} />
			<Route path="/nossos-parceiros" element={<NossosParceiros />} />
			<Route path="/404" element={<Erro404 />} />
			<Route path="*" element={<Erro404 />} />
			<Route path="/logo" element={<Logo />} />
    </Routes>
  );
};

export default AppRoutes;
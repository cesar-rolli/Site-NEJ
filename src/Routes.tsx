import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Rede from "./pages/Rede";
import SobreNos from "./pages/SobreNos";
import Eventos from "./pages/Eventos";
import NossosParceiros from "./pages/NossosParceiros";
import Nejflix from "./pages/Nejflix";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/rede-nej-poa" element={<Rede />} />
			<Route path="/sobre-nos" element={<SobreNos />} />
			<Route path="/eventos" element={<Eventos />} />
			<Route path="/nossos-parceiros" element={<NossosParceiros />} />
			<Route path="/nejflix" element={<Nejflix />} />
    </Routes>
  );
};

export default AppRoutes;
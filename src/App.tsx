import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa tus vistas

import Home from "./views/Home.tsx";
import Details from "./views/Details.tsx";
import SectionView from "./views/SectionView.tsx";
import QuienesSomos from "./views/QuienesSomos.tsx";

import PreguntasFrecuentes from "./views/PreguntasFrecuentes.tsx";

import PoliticasDePrivacidad from "./views/PoliticasDePrivacidad.tsx";
import TerminosYCondiciones from "./views/TerminosYCondiciones.tsx";
import TerminosYCondicionesPromocionales from "./views/TerminosYCondicionesPromocionales.tsx";
import SearchResults from "./views/SearchResults.tsx";
import PoliticasDeEntrega from "./views/PoliticasDeEntrega.tsx";
import OffersView from "./views/OffersView.tsx";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/details", element: <Details /> },

    // Rutas generadas a partir del nav
    { path: "/Penal", element: <SectionView /> },
    { path: "/Civil", element: <SectionView /> },
    { path: "/Familia", element: <SectionView /> },
    { path: "/Administrativo", element: <SectionView /> },
    { path: "/Constitucional", element: <SectionView /> },
    { path: "/Ofertas", element: <OffersView /> },
    // Nueva ruta para la búsqueda
    { path: "/search", element: <SearchResults /> },

    // Rutas generadas a partir de tu array
    { path: "/quienes-somos", element: <QuienesSomos /> },
    { path: "/preguntas-frecuentes", element: <PreguntasFrecuentes /> },

    { path: "/politicas-de-privacidad", element: <PoliticasDePrivacidad /> },
    { path: "/terminos-y-condiciones", element: <TerminosYCondiciones /> },
    {
      path: "/terminos-y-condiciones-promocionales",
      element: <TerminosYCondicionesPromocionales />,
    },
    { path: "/politicas-de-entrega", element: <PoliticasDeEntrega /> },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;

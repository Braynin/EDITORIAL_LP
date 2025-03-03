import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa tus vistas

import Home from "../public/_redirects/Home.tsx";
import Details from "../public/_redirects/Details.tsx";
import SectionView from "../public/_redirects/SectionView.tsx";
import QuienesSomos from "../public/_redirects/QuienesSomos.tsx";

import PreguntasFrecuentes from "../public/_redirects/PreguntasFrecuentes.tsx";

import PoliticasDePrivacidad from "../public/_redirects/PoliticasDePrivacidad.tsx";
import TerminosYCondiciones from "../public/_redirects/TerminosYCondiciones.tsx";
import TerminosYCondicionesPromocionales from "../public/_redirects/TerminosYCondicionesPromocionales.tsx";
import SearchResults from "../public/_redirects/SearchResults.tsx";
import PoliticasDeEntrega from "../public/_redirects/PoliticasDeEntrega.tsx";
import OffersView from "../public/_redirects/OffersView.tsx";

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

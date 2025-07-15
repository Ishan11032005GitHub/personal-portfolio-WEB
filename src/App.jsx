import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import NavBar from './NavBar';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Education from './Education';
import ContactMe from './ContactMe';
import VoiceNavigation from './VoiceNavigation';
import VoiceNavigationMannual from './VoiceNavigationMannual';
import Projects from './Projects';
const ErrorPage = () => (
  <div style={{ padding: "20px" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);
const Layout = () => (
  <>
    <NavBar />
    <Outlet />
    <VoiceNavigation />
  </>
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />, // ✅ This handles unknown paths
    children: [
      {
        path: '/',
        element: <Introduction />
      },
      {
        path: '/About',
        element: <AboutMe />
      },
      {
        path: '/Education',
        element: <Education />
      },
      {
        path: '/Projects',
        element: <Projects />
      },
      {
        path: '/Contact',
        element: <ContactMe />
      },
      {
        path: '/Mannual',
        element: <VoiceNavigationMannual />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
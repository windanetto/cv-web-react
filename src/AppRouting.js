import { useRoutes } from "react-router-dom";
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

const AppRouting = () => {
  const routes = useRoutes([
    { path: '/', element: <About /> },
    { path: 'experience', element: <Experience /> },
    { path: 'education', element: <Education /> },
    { path: 'skills', element: <Skills /> }
  ]);

  return routes;
}

export default AppRouting;
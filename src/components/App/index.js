import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header&Footer/Header/header';
import Footer from '../Header&Footer/Footer/footer';

import Home from '../PrincipalPages/Home/home';
import PreviousJobs from '../PrincipalPages/PreviousJobs/previousJobs';
import School from '../PrincipalPages/School/school';
import SkillsPage from '../PrincipalPages/Skills/skillsPage';
import JobsResearch from '../PrincipalPages/JobsResearch/jobsResearch';

import Contact from '../Dropdown/Contact/contact';

import './styles.scss';

function App() {
  const location = useLocation();
  const isJobsResearchPage = location.pathname === '/jobsResearch';

  return (
    <div className="app">
      <Header />

      <main className={isJobsResearchPage ? 'background-image' : 'main'}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/previousJobs"
            element={<PreviousJobs />}
          />
          <Route
            path="/school"
            element={<School />}
          />
          <Route
            path="/skills"
            element={<SkillsPage />}
          />
          <Route
            path="/jobsResearch"
            element={(
              <JobsResearch />
            )}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

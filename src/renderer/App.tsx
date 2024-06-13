import { MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import componentNames from './componentNames.json';

// Dynamically load all the streaming services
function importComponents() {
  const promises: any[] = [];

  componentNames.components.forEach((element) => {
    promises.push(
      import(`./services/${element}/main`).then((module) => ({
        [element]: module,
      })),
    );
  });

  return Promise.all(promises);
}

// Dynamically imports service-icons with links to their pages
function MainPage() {
  const [imports, setImports] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return, promise/always-return
    importComponents().then((results) => {
      setImports(results);
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="grid-container">
      {imports.map((module, index) => {
        const IconComponent = module[componentNames.components[index]].Icon;

        if (IconComponent) {
          return (
            <div className="grid-item">
              {/* Add the icon/button to the streaming service */}
              <IconComponent key={componentNames.components[index]} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

// Import the root path, also dynamically import routes for websites
export default function App() {
  const [imports, setImports] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return, promise/always-return
    importComponents().then((results) => {
      setImports(results);
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainPage />} />
        {imports.map((module, index) => {
          const { Website } = module[componentNames.components[index]];
          return (
            <Route
              key={componentNames.components[index]}
              path={`/${componentNames.components[index]}`}
              element={<Website />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

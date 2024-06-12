import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import icon from '../../assets/icon.svg';
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
    <div>
      {imports.map((module, index) => {

        const IconComponent = module[componentNames.components[index]].Icon;

        if (IconComponent) {
          return <IconComponent />;
        }
        return null;
      })}
    </div>
  );
}

// TODO: Dynamically link the routes
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

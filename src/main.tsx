import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from './pages/Home/Home.tsx'
import { FAQ } from './pages/FAQ/FAQ.tsx';
import { Travel } from './pages/travel/Travel.tsx';
import { Story } from './pages/story/Story.tsx';
import { Layout } from './components/Layout/Layout.tsx';

import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

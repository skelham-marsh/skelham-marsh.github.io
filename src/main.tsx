import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

import { Home } from './pages/Home/Home'
import { FAQ } from './pages/FAQ/FAQ';
import { Travel } from './pages/Travel/Travel';
import { Story } from './pages/Story/Story';
import { Layout } from './components/Layout/Layout';

import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

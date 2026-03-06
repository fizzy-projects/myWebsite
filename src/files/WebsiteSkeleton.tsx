import React, { useState } from 'react';
import './WebsiteSkeleton.css';
import type { tabType } from './types';
import { WebsiteHeader } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { BookReviews } from './pages/BookReviews';
import { Blog } from './pages/Blog';

const WebsiteSkeleton: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState<tabType>('home');

  return (
    <div className="portfolio-container" id='portfolio-container'>

      <WebsiteHeader activeTab={activeTab} onTabChange={(tab:tabType)=>{setActiveTab(tab)}}/>

      <main className="main-content">
        {activeTab === 'home' && <Home onTabChange={(tab:tabType)=>{setActiveTab(tab)}}/>}
        {activeTab === 'cv' && <CV/>}
        {activeTab === 'book' && <BookReviews/>}
        {activeTab === 'blog' && <Blog/>}
      </main>

      <Footer/>
    </div>
  );
};

export default WebsiteSkeleton;

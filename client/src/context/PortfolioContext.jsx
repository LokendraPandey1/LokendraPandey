import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

import { portfolioData as localData } from '../data/portfolio';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(localData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const res = await api.get('/portfolio');
        // Only update if we actually got an object with data
        if (res.data && typeof res.data === 'object' && res.data.personalInfo) {
          setPortfolioData(res.data);
        }
      } catch (error) {
        console.error('Error fetching portfolio data from API, using local backup', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);


  return (
    <PortfolioContext.Provider value={{ portfolioData, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};



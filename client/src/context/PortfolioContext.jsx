import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const res = await api.get('/portfolio');
        setPortfolioData(res.data);
      } catch (error) {
        console.error('Error fetching portfolio data', error);
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



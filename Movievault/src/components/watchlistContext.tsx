// src/context/WatchlistContext.tsx

import  { createContext, useContext, useState, ReactNode } from 'react';

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

interface WatchlistContextProps {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
}

const WatchlistContext = createContext<WatchlistContextProps | undefined>(undefined);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      if (!prev.find((item) => item.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

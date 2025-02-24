// src/context/WatchlistContext.tsx

import React from "react";
import { createContext, useContext, useState, ReactNode } from 'react';

interface MovieWithGenres {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genreNames: string;
  vote_average: number;
}

interface WatchlistContextType {
  watchlist: MovieWithGenres[];
  addToWatchlist: (movie: MovieWithGenres) => void;
  removeFromWatchlist: (movieId: number) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<MovieWithGenres[]>([]);

  const addToWatchlist = (movie: MovieWithGenres) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatchlist = (movieId: number) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}

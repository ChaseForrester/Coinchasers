import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[]; // Array of product IDs
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (productId) => set((state) => {
        const isFav = state.favorites.includes(productId);
        if (isFav) {
          return { favorites: state.favorites.filter((id) => id !== productId) };
        } else {
          return { favorites: [...state.favorites, productId] };
        }
      }),
      isFavorite: (productId) => get().favorites.includes(productId),
    }),
    {
      name: 'coinchasers-favorites', // key in localStorage
    }
  )
);

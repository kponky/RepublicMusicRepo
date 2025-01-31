import { ISiteInfo } from "@/interfaces/app.interface";
import { IArtist } from "@/interfaces/artist.interface";
import { ISlider } from "@/interfaces/slider.interface";
import { IVideo } from "@/interfaces/video.interface";
import { getArtistById, getArtists, getSliders, getVideos } from "@/lib/data";
import { create } from "zustand";

interface AppState {
  loading: boolean;
  artists: IArtist[];
  artist: IArtist | null;
  sliders: ISlider[];
  videos: IVideo[];
  fetchArtists: (perPage?: number, page?: number) => Promise<void>;
  fetchArtistById: (id: string) => Promise<void>;
  fetchSliders: (perPage?: number, page?: number) => Promise<void>;
  fetchVideos: (perPage?: number, page?: number) => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  loading: false,
  artists: [],
  artist: null,
  sliders: [],
  videos: [],

  fetchArtists: async (perPage = 10, page = 1) => {
    set({ loading: true });
    try {
      const res = await getArtists(perPage, page);
      set({ artists: res?.data?.data });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },

  fetchArtistById: async (id) => {
    set({ loading: true });
    try {
      const res = await getArtistById(id);
      set({ artist: res?.data?.data });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },

  fetchSliders: async (perPage = 10, page = 1) => {
    set({ loading: true });
    try {
      const res = await getSliders(perPage, page);
      set({ sliders: res?.data?.data });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },

  fetchVideos: async (perPage = 10, page = 1) => {
    set({ loading: true });
    try {
      const res = await getVideos(perPage, page);
      set({ videos: res?.data?.data });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));

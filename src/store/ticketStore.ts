import { create } from "zustand";
import { ITicket } from "@/interfaces/track.interface";
import { getMembership } from "@/lib/data";

interface TicketState {
  ticketId: string | null;
  membershipData: ITicket | null;
  loading: boolean;
  errorMsg: string;
  setTicketId: (id: string | null) => void;
  fetchMembership: () => Promise<void>;
}

export const useTicketStore = create<TicketState>((set, get) => ({
  ticketId: null,
  membershipData: null,
  loading: false,
  errorMsg: "",

  setTicketId: (id) => {
    set({ ticketId: id });
    if (id) {
      get().fetchMembership(); 
    }
  },

  fetchMembership: async () => {
    const { ticketId } = get();
    if (!ticketId) {
      set({ membershipData: null, loading: false });
      return;
    }

    set({ loading: true, errorMsg: "" });

    try {
      const res = await getMembership(ticketId);
      if (res?.data) {
        set({ membershipData: res.data.data, errorMsg: "", loading: false });
      } else {
        set({
          membershipData: null,
          errorMsg: "Invalid ticket or membership ID.",
          loading: false,
        });
      }
    } catch (error) {
      console.error(error);
      set({
        membershipData: null,
        errorMsg: "An error occurred while fetching ticket details.",
        loading: false,
      });
    }
  },
}));

import { create } from "zustand";

// type for data
type UserData = {
  id: string;
  email: string;
  token: string;
  lastName: string | null;
  middleName: string | null;
  firstName: string;
  membershipType: string;
  profilePicture: string;
  usertype: string;
  customerId: string | null;
  kycStatus: boolean;
  roles: string[] | null;
  claims: string[] | null;
};

type dataStore = {
  data: UserData;
  setData: (newState: UserData) => void;
};

// zustand store
export const useDataStore = create<dataStore>((set) => ({
  data: {
    id: "",
    email: "",
    token: "",
    lastName: null,
    middleName: null,
    firstName: "",
    membershipType: "",
    profilePicture: "",
    usertype: "",
    customerId: null,
    kycStatus: false,
    roles: null,
    claims: null,
  },
  setData: (newState) => set({ data: newState }),
}));

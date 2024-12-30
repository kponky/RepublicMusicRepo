import { axiosInstance } from "./axios";

export async function getMembership(value: string) {
  try {
    const res = await axiosInstance.get(
      `/nellalink/smart-meta-manager/entity/ticketmembership/retrieve-by-meta-key/${value}`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

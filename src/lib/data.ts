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
export async function getArtists(perPage: number = 10, page: number = 1) {
  try {
    const res = await axiosInstance.get(
      `/nellalink/smart-meta-manager/entity/artists?per_page=${perPage}&page=${page}&sort_by=id&sort_order=desc`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getArtistById(id: string) {
  try {
    const res = await axiosInstance.get(
      `/nellalink/smart-meta-manager/entity/artists/${id}`
    );

    return res?.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSliders(perPage: number = 10, page: number = 1) {
  try {
    const res = await axiosInstance.get(
      `/nellalink/smart-meta-manager/entity/sliders?per_page=${perPage}&page=${page}&sort_by=id&sort_order=desc`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getVideos(perPage: number = 10, page: number = 1) {
  try {
    const res = await axiosInstance.get(
      `/nellalink/smart-meta-manager/entity/videos?per_page=${perPage}&page=${page}&sort_by=id&sort_order=desc`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getSiteInformation() {
  try {
    const res = await axiosInstance.get(
      `/nellalink/smart-meta-manager/entity/sitewide/1`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

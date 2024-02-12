import { Media } from "../interfaces/Media";
import dataSource from "./dataSource";

export const getAllMedia = async () => {
  try {
    const response = await dataSource.get<Media[]>("/allMedia");
    return response.data;
  } catch (error) {
    console.error("Error fetching all media", error);
    throw error;
  }
};

export const getAllMediaById = async (id: number) => {
  try {
    const response = await dataSource.get<Media[]>(`/allMedia/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching media by id: ", error);
    throw error;
  }
};

export const getAllMediaByTitle = async (title: string) => {
  try {
    title = title.toLowerCase();
    const response = await dataSource.get<Media[]>(`/allMedia/title/${title}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching media by title: ", error);
    throw error;
  }
};

export const getAllMediaByType = async (type: string) => {
  try {
    type = type.toLowerCase();
    const response = await dataSource.get<Media[]>(`/allMedia/type/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching media by type: ", error);
    throw error;
  }
};

export const createAllMedia = async (media: Media) => {
  try {
    const response = await dataSource.post(`/allMedia`, media);
    return response;
  } catch (error) {
    console.error("Error creating media: ", error);
    throw error;
  }
};

export const editAllMediaById = async (media: Media) => {
  try {
    const response = await dataSource.put(`/allMedia/${media.id}`, media);
    return response;
  } catch (error) {
    console.error("Error editing media: ", error);
    throw error;
  }
};

export const deleteAllMediaById = async (id: number) => {
  try {
    const response = await dataSource.delete(`/allMedia/${id}`);
    return response;
  } catch (error) {
    console.error("Error editing media: ", error);
    throw error;
  }
};

import dataSource from "./dataSource";

export const getAllMedia = async () => {
  try {
    const response = await dataSource.get("/allMedia");
    return response.data;
  } catch (error) {
    console.error("Error fetching all media", error);
    throw error;
  }
};

import { AxiosError } from "axios";
import IGist from "../interfaces/IGist";
import api from "../utils/api";

export const fetchUserGist = async (username: string, page: number = 1): Promise<IGist[]> => {
  try {
    const results = await api.get(`/users/${username}/gists?page=${page}`);
    return results.data as IGist[];
  } catch (err: AxiosError | any) {
    console.error('[fetch-user-gist]', err.response);
    throw Error('Error fetching user gists');
  }
}

export const fetchGistForks = async (gistId: string): Promise<IGist[]> => {
  try {
    const results = await api.get(`/gists/${gistId}/forks`);
    return results.data as IGist[];
  } catch (err: AxiosError | any) {
    console.error('[fetch-user-gist]', err.response);
    throw Error('Error occurred fetching gist forks');
  }
}

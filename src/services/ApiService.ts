import { AxiosError } from "axios";
import IError from "../interfaces/IError";
import IGist from "../interfaces/IGist";
import api from "../utils/api";

export const fetchUserGist = async (username: string, page: number = 1): Promise<IGist[] | IError> => {
  try {
    const results = await api.get(`/users/${username}/gists?page=${page}`);
    return results.data as IGist[];
  } catch (err: AxiosError | any) {
    console.error('[fetch-user-gist]', err.response);
    return { status: err.response.status, error: err.response.data.message } as IError;
  }
}

export const fetchGistForks = async (gistId: string): Promise<IGist[] | IError> => {
  try {
    const results = await api.get(`/gists/${gistId}/forks`);
    return results.data as IGist[];
  } catch (err: AxiosError | any) {
    console.error('[fetch-user-gist]', err.response);
    return { status: err.response.status, error: err.response.data.message } as IError;
  }
}

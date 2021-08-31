import IFile from "../interfaces/IFile";
import IGist from "../interfaces/IGist";

export const sortGistForkUser = (gists: IGist[]): IGist[] => {
  return gists.sort((a, b) => {
    if (new Date(a.created_at) > new Date(b.created_at)) return -1;
    if (new Date(a.created_at) < new Date(b.created_at)) return 1;
    return 0;
  });
}

export const sliceGistArray = (gists: IGist[], slice: number = 3): IGist[] => {
  if (slice < gists.length) return gists.slice(0, slice);
  return gists;
}

export const extractFileTypes = (files: any): string[] => {
  const fileTypes: any = {};
  const fileValues: any[] = Object.values(files);
  fileValues.forEach((file: IFile) => fileTypes[file.language] = file.language);

  return Object.values(fileTypes);
}

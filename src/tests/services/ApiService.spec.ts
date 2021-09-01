import IError from "../../interfaces/IError";
import IGist from "../../interfaces/IGist";
import { fetchGistForks, fetchUserGist } from "../../services/ApiService";

test('test fetch user gists', async () => {
  const gists: IGist[] | IError = await fetchUserGist('brandonroberts');
  if (gists instanceof Array)
    expect(gists.length).toBeGreaterThan(0);
});

test('test fetch gists forks', async () => {
  const forks = await fetchGistForks('df9dccb10df6515f9b6913d1ea84e3e8');
  if (forks instanceof Array)
    expect(forks.length).toBeGreaterThan(0);
});

import { fetchGistForks, fetchUserGist } from "../../services/ApiService";

test('test fetch user gists', async () => {
  const gists = await fetchUserGist('brandonroberts');
  expect(gists.length).toBeGreaterThan(0);
});

test('test fetch gists forks', async () => {
  const forks = await fetchGistForks('1324729');
  expect(forks.length).toBeGreaterThan(0);
});

import { fetchGistForks, fetchUserGist } from "../../services/ApiService";

test('test fetch user gists', async () => {
  const gists = await fetchUserGist('brandonroberts');
  expect(gists.length).toBeGreaterThan(0);
});

test('test fetch gists forks', async () => {
  const forks = await fetchGistForks('df9dccb10df6515f9b6913d1ea84e3e8');
  expect(forks.length).toBeGreaterThan(0);
});

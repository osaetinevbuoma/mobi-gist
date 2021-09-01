import React, {
  FormEvent,
  MouseEvent,
  useState
} from "react";
import toastr from "toastr";
import IGist from "../interfaces/IGist";
import { fetchUserGist } from "../services/ApiService";
import CardLoader from "./common/CardLoader";
import GistCard from "./GistCard";
import Layout from "./layout/Layout";
import SpinnerLoader from "./common/SpinnerLoader";
import IError from "../interfaces/IError";
import "toastr/build/toastr.css";

const Home = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [gists, setGists] = useState<IGist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (username === '') return;

    setIsLoading(true);
    const gists: IGist[] | IError = await fetchUserGist(username);
    if ((gists as IError).error) {
      toastr.error((gists as IError).error);
      return;
    }
    
    setGists(gists as IGist[]);
    setPage(page + 1);
    setIsLoading(false);
  }

  const loadMore = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    if (username === '') return;
    console.log(page);

    setIsLoadingMore(true);
    const newGists: IGist[] | IError = await fetchUserGist(username, page);
    if ((newGists as IError).error) {
      toastr.error((newGists as IError).error);
      return;
    }

    console.log(newGists);

    if ((newGists as IGist[]).length > 0) {
      const g = [ ...gists ];
      g.push(...newGists as IGist[]);
      setGists(g);
      console.log(g.length);
      console.log(g);

      setPage(page + 1);
    }
    setIsLoadingMore(false);
  }

  return (
    <Layout>
      <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-12 col-md-11">
          <label className="visually-hidden" htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Github Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-1">
          <button
            type="submit"
            className="btn btn-primary"
          >
            {isLoading ? <SpinnerLoader /> : 'Submit'}
          </button>
        </div>
      </form>

      <hr className="col-12 col-md-12 mb-5" />

      {gists.length === 0 && (
        <div className="row g-5 mb-5" style={{textAlign: 'center'}}>
          <h5>Enter a GitHub username to search a user's gists</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="96"
            className="me-2"
            viewBox="0 0 64 64"
            role="img"
          >
            <title>Bootstrap</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )}

      {gists.length > 0 && (
        <>
          <div className="row g-5 mb-5">
            {isLoading ? (
              <>
                {[1, 2, 3].map(i => (
                  <div className="col-4" key={i}>
                    <CardLoader />
                  </div>
                ))}
              </>
            ) : (
              gists.map(gist => <GistCard key={gist.id} gist={gist} />)
            )}
          </div>

          <div className="row g-5 mb-5">
            <div className="col-12" style={{textAlign: 'center'}}>
              <button className="btn btn-primary" onClick={loadMore}>
                {isLoadingMore ? <SpinnerLoader /> : 'Load More'}
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Home;

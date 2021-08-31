import GistCard from "./GistCard";
import Layout from "./layout/Layout";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <form className="row g-3 align-items-center">
        <div className="col-12 col-md-11">
          <label className="visually-hidden" htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Github Username"
            />
          </div>
        </div>

        <div className="col-12 col-md-1">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>

      <hr className="col-12 col-md-12 mb-5" />

      <div className="row g-5 mb-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => <GistCard />)}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </Layout>
  );
}

export default Home;

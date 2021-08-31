import GistBadge from "./GistBadge";
import GistFork from "./GistFork";

const GistCard = (): JSX.Element => {
  return (
    <div className="col-3">
      <div className="card">
        <img src="https://picsum.photos/1000.jpg?random=2" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Description of Gist</h5>
          <hr />
          
          <div className="row card-text">
            <div className="col-6">
              <div>
                <strong>File Types</strong>
              </div>
              <GistBadge />
            </div>

            <div className="col-6">
              <div><strong>Forks</strong></div>
              <GistFork />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GistCard;

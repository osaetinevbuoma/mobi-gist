import IGist from "../interfaces/IGist";
import GistBadge from "./GistBadge";
import GistFork from "./GistFork";

interface IGistCard {
  gist: IGist;
}

const GistCard = (props: IGistCard): JSX.Element => {
  return (
    <div className="col-4">
      <div className="card">
        <img src="https://picsum.photos/1000.jpg?random=2" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.gist && props.gist.description && props.gist.description.length > 45 ? (
              `${props.gist.description.substring(0, 45)}...`
            ) : props.gist.description}

            {props.gist && !props.gist.description && ('No Description for this gist')}
          </h5>
          <hr />
          
          <div className="row card-text">
            <div className="col-5">
              <div>
                <strong>File Types</strong>
              </div>
              <GistBadge files={props.gist.files} />
            </div>

            <div className="col-7">
              <div><strong>Forks</strong></div>
              <GistFork gistId={props.gist.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GistCard;

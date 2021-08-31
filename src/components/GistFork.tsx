import React, { useEffect, useState } from "react";
import IGist from "../interfaces/IGist";
import { fetchGistForks } from "../services/ApiService";
import { sliceGistArray, sortGistForkUser } from "../services/GistService";
import { gistBaseUrl } from "../utils/api";
import SpinnerLoader from "./common/SpinnerLoader";

interface IGistFork {
  gistId: string;
}

const GistFork = (props: IGistFork): JSX.Element => {
  const [forks, setForks] = useState<IGist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (props.gistId) {
      fetchForks(props.gistId);
    }
  }, [props.gistId]);

  const fetchForks = async (id: string): Promise<void> => {
    setIsLoading(true);
    const results = await fetchGistForks(id);
    setForks(results);
    setIsLoading(false);
  }

  return (
    <>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <>
          {forks.length > 0 ? (
            sliceGistArray(sortGistForkUser(forks)).map(gist => (
              <div key={gist.id}>
                <a href={`${gistBaseUrl}/${gist.owner?.login}/${gist.id}`} target="_blank" rel="noreferrer">
                  <img
                    src={gist.owner?.avatar_url}
                    alt={gist.owner?.login}
                    className="avatar"
                  />
                </a>
                &nbsp;
                {gist.owner?.login}
              </div>
            ))
          ) : 'No forks'}
        </>
      )}
    </>
  );
}

export default GistFork;

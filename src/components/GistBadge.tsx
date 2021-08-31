const GistBadge = (): JSX.Element => {
  return (
    <>
      {[1, 2, 3, 4, 5].map(i => (<span className="badge rounded-pill bg-primary">Primary</span>))}
    </>
  );
}

export default GistBadge;

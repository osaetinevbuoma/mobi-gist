const SpinnerLoader = (): JSX.Element => {
  return (
    <div className="spinner-grow spinner-grow-sm text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default SpinnerLoader;

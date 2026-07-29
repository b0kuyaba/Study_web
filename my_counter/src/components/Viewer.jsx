const Viewer = props => {
  return (
    <div>
      <h2>Simple Counter</h2>
      <p>현재 카운트:</p>
      <h1>{props.count}</h1>
    </div>
  );
};

export default Viewer;

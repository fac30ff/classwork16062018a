const News = () => {
  let date = new Date().toISOString();
  return (
      <div className="news">{`Empty new for date ${date}.`}</div>
  );
};

const Comments = () => (
    <div className="comments">
        Empty comments
    </div>
);

const App = () => (
    <div className="app">
        App title
        <News/>
        <Comments/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
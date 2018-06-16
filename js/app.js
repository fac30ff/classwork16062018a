const News = () => (
  <div className="news">
      Empty news
  </div>
);

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
const newsArray = [
    {
  author : "I am",
    text: "lorem ipsum"
}
];

const Article = (props) => {
  var {author, text} = props.articleData;
    return (
        <div>
        <p className="news__author">{author}: </p>
        <p className="news__text">{text}</p>
    </div>
    );

};

const News = (props) => {
    const {data} = props;
  let date = new Date().toISOString();
  var newsTemplate = data.map((item, index) => {
      return (
          <Article key={index} articleData={item}/>
      );
  });
  return (
      <div className="news">
          {newsTemplate}
          <div className="news">{`Empty new for date ${date}.`}</div>
      </div>
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
        <News data={newsArray}/>
        <Comments/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
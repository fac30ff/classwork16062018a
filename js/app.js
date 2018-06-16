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
Article.defaultProp = {
    author: "Stranger"
}

Article.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
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

News.propTypes = {
    data: PropTypes.array.isRequired
};

const Comments = () => (
    <div className="comments">
        Empty comments
    </div>
);

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data: [], isLoading: false};
    };

    componentDidMount() {
        this.setState({isLoading: true}, () => {
            this.state.isLoading
        });
        fetch("/api/author")
            .then(res => res.json())
            .then(news => {
                console.log(news);
                this.setState({data: news, isLoading: false})
            });
    };

  render () {
      const {isLoading} = this.state;
      return (
          <div className="app">
              App title
              {isLoading && <div>Loading ...</div>}
              <News data={this.state.data}/>
              <Comments/>
          </div>
      );
  };
};


const App2 = () => (
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
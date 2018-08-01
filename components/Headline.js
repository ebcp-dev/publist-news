import React from 'react';

const Headline = props => {
  let { headline } = props;
  const defaultImg =
    'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg';
  let publishedDate = new Date(headline.published_at);
  let published = publishedDate.toString();

  const listAuthors = authors => {
    if (authors) {
      let authorsStr = authors.join(', ');
      return 'by ' + authorsStr;
    } else {
      return '';
    }
  };

  return (
    <div className="card mb-4">
      <img
        className="card-img-top"
        src={headline.image_url}
        // Load default image on error
        onError={e => {
          e.target.src = defaultImg;
        }}
        alt="Article Image"
      />
      <div className="card-body">
        <h4 className="card-title">
          <a>{headline.title}</a>
        </h4>
        <h5 className="blue-text pb-2">
          <strong>{headline.site.name}</strong>
        </h5>
        <small>{published}</small>
        <br />
        <p className="card-text">{listAuthors(headline.authors)}</p>
        <p className="card-text">{headline.description}</p>
        <a href={headline.url} className="btn btn-indigo" target="_blank">
          Read Article
        </a>
      </div>
      <br />
    </div>
  );
};
export default Headline;

import React from 'react';

import Headline from './Headline';

const NewsList = props => {
  let { data, order, year } = props;

  const sortByDate = order => {
    if (order === 'desc') {
      return data.sort(descDates);
    }
    if (order === 'asc') {
      return data.sort(ascDates);
    }
  };

  const descDates = (a, b) => {
    let date1 = new Date(a.published_at);
    let date2 = new Date(b.published_at);
    let result = date1.getTime() < date2.getTime() ? 1 : -1;
    return result;
  };

  const ascDates = (a, b) => {
    // Reverse descDates
    let result = descDates(a, b) * -1;
    return result;
  };

  const filterByYear = filterYear => {
    if (filterYear === 'all') {
      return data;
    }
    let newData = data.filter(obj => {
      let publishYear = new Date(obj.published_at).getFullYear().toString();
      return publishYear === filterYear;
    });
    data = newData;
    return newData;
  };

  const renderList = () => {
    // Latest news first by default
    filterByYear(year);
    sortByDate(order);
    if (data.length < 1) {
      return <h1>No articles found for this year. :(</h1>;
    }
    return (
      <div>
        <div className="text-center">
          <h4 className="blue-text">{data.length} articles found.</h4>
        </div>
        <br />
        {data.map(res => {
          return <Headline key={res.id} headline={res} />;
        })}
      </div>
    );
  };

  return (
    <div className="card-deck">
      <div>{renderList()}</div>
    </div>
  );
};

export default NewsList;

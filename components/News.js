import React, { Component } from 'react';
import axios from 'axios';

import { apiConfig } from '../config/auth';

import { NewsStyle } from './styles/NewsStyle';
import NewsList from './NewsList';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      order: 'desc',
      year: 'all'
    };
    this.sortByDate = this.sortByDate.bind(this);
    this.filterByYear = this.filterByYear.bind(this);
  }

  componentDidMount() {
    // Get request to api
    let url = apiConfig.url;
    let token = apiConfig.token;
    axios
      .post(
        url,
        { query: 'tech' },
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then(res => {
        this.setState({
          data: res.data.data
        });
      });
  }

  sortByDate(e) {
    this.setState({
      order: e.target.value
    });
  }

  filterByYear(e) {
    this.setState({
      year: e.target.value
    });
  }

  render() {
    const { data, order, year } = this.state;
    if (data) {
      return (
        <div className="container">
          <div className="form-row">
            <div className="col">
              <label htmlFor="sortByDate">Sort by Date</label>
              <select
                id="sortByDate"
                className="form-control"
                value={order}
                onChange={this.sortByDate}
              >
                <option value="desc">Latest</option>
                <option value="asc">Oldest</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="filterByYEar">Filter by Year</label>
              <select
                id="filterByYEar"
                className="form-control"
                value={year}
                onChange={this.filterByYear}
              >
                <option value="all">all</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
              </select>
            </div>
          </div>
          <hr className="my-4" />
          <NewsList order={order} year={year} data={data} />
          <style>{NewsStyle}</style>
        </div>
      );
    } else {
      // Loading spinner while waiting for data
      return (
        <div className="sk-circle">
          <style jsx>{NewsStyle}</style>
          <div className="sk-circle1 sk-child" />
          <div className="sk-circle2 sk-child" />
          <div className="sk-circle3 sk-child" />
          <div className="sk-circle4 sk-child" />
          <div className="sk-circle5 sk-child" />
          <div className="sk-circle6 sk-child" />
          <div className="sk-circle7 sk-child" />
          <div className="sk-circle8 sk-child" />
          <div className="sk-circle9 sk-child" />
          <div className="sk-circle10 sk-child" />
          <div className="sk-circle11 sk-child" />
          <div className="sk-circle12 sk-child" />
        </div>
      );
    }
  }
}

export default News;

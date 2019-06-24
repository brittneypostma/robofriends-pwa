import React, { Component } from "react";
import Header from "./Header";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import "./MainPage.css";

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = robots => {
      return robots.filter(robot => {
          return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
      })
  }
  render() {
    const {  robots, onSearchChange, isPending } = this.props;
    
    return isPending ? (
      <h1 className="tc f1">Loading</h1>
    ) : (
      <div className="tc">
        <div className="header">
          <Header />
          <SearchBox className="search" searchChange={onSearchChange} />
        </div>
        <div className="spacer" />
        <Scroll>
          <ErrorBoundry>
            <CardList className="cardList" robots={this.filterRobots(robots)} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;

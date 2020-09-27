import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";

class App extends React.Component {

  componentDidMount = () => {
    let savedState = JSON.parse(sessionStorage.getItem("online_Shopping_site_state"));
    console.log("saved state => ");
    console.log(savedState);
  }

  render () {
    return (
      <div className="App">
        <Wrapper></Wrapper>
      </div>
    )
  }

}

export default App;

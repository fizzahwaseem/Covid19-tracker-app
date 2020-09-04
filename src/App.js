import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import Styles from './App.module.css';
import { fetchData } from './api';


//mport './App.css';

class App extends React.Component {
  state = {
    data : {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render()  {
    const {data} = this.state;  
    return (
      <div className={Styles.container}>
        <Cards data= { data }/>
        <Chart/>
        <CountryPicker/>
      </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



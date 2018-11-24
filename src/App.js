import React, { Component } from 'react';
import './App.css';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import ChartPie from './ChartPie';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: [],
        };

        let self = this;

        fetch('http://localhost:3001/get', {
            method: 'GET'
        }).then(function(response) {
              if (response.status >= 400) {
                  throw new Error('Bad response from server')
              }   
              return response.json();
        }).then(function(data) {
              console.log(data);
              self.setState({ data: data});
        }).catch(function(error) {
              console.log(error);
        }); 
    }

    render() {
        const { data } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <table>
                        <tbody>
                            <tr>
                                <td><ChartLine data={data} /></td>
                                <td><ChartBar data={data} /></td>
                                <td><ChartPie data={data} /></td>
                            </tr>
                        </tbody>
                    </table>
              </header>
            </div>
        );
    }
}

export default App;

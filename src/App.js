import React, { Component } from 'react';
import './App.css';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import ChartPie from './ChartPie';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: [
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            ],
            piedata: [
                {name: 'Group A', value: 400},
                {name: 'Group B', value: 300},
                {name: 'Group C', value: 300},
                {name: 'Group D', value: 200},
                {name: 'Group E', value: 278},
                {name: 'Group F', value: 189},
            ],
        };
    }

    render() {
        const { data, piedata } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <table>
                        <tbody>
                            <tr>
                                <td><ChartLine data={data} /></td>
                                <td><ChartBar data={data} /></td>
                                <td><ChartPie data={piedata} /></td>
                            </tr>
                        </tbody>
                    </table>
              </header>
            </div>
        );
    }
}

export default App;

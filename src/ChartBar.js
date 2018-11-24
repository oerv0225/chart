import React, {Component} from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class ChartBar extends Component {
    render() {
        const { data } = this.props;

        return (
            <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
           </BarChart>
        );
    }
}

export default ChartBar;
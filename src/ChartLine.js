import React, {Component} from 'react';
import { LineChart, Line,  CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class ChartLine extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { data } = this.props;

        return (
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        )
    }
}

export default ChartLine;
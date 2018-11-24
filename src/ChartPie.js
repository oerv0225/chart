import React, {Component} from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

class ChartPie extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
            <PieChart width={800} height={400}>
                <Pie isAnimationActive={false} dataKey="uv" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart>
        );
    }
}

export default ChartPie;
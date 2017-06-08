/**
 * Created by bartek on 30.05.17.
 */
import React from "react"

import Title from './Title'
import ChartComponent from './ChartComponent'
import Input from "./Input";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state ={title : "Peak Advisor"}
    }


    changeTitle(){
        console.log("CHanging title")
        this.setState({title : "PeaknieAdbisor"})
    }

    downloadData(currency, start, end){
        var rest, mime, client;
        rest = require('rest'),
            mime = require('rest/interceptor/mime');
        console.log(currency, start, end)

        client = rest.wrap(mime);
        client({path: 'http://localhost:8080/PIK-WebApp-0.0.1-SNAPSHOT/getValue?currency=' + currency + '&start=' + start + '&end=' + end}).then(response => {
                console.log(response);
                var a = JSON.parse(response['entity']);
                this.setState({currency : a['currency']});
                // for (let key in a['times']) {
                //     console.log(key);
                //     console.log(a['times'][key]);
                //
                // }

            }
        )
    }
    render() {
        return (
            <div>
                <Title title={this.state.title}/>
                <Input changeTitle={this.changeTitle.bind(this)} downloadData={this.downloadData.bind(this)}/>
                {/*<Input changeSDate={this.setStartDate.bind(this)} changeEDate={this.setEndDate.bind(this)} setCur={this.setCur.bind(this)}/>*/}
                {/*<ChartComponent startDate={this.startDate} endDate={this.endDate} currency={this.currency}/>*/}
            </div>
        );
    }
}

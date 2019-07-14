import React, { Component } from 'react';
import BitcoinComponent from './bitcoin-component';

class BitCoinPriceContainer extends Component {
    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                const { bpi } = data
                this.setState({ bpi })
            })
    }

    render() {
        return (
            <BitcoinComponent bpi={this.state.bpi} />
        )
    }
}

export default BitCoinPriceContainer
import React, { Component } from 'react';

class FetchExample extends Component {
    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res =>
                res.json()
            )
            .then(data => {
                // console.log('data: ', data);
                const { bpi } = data;
                this.setState({ bpi });
            });
    }

    _renderCurrencies() {
        console.log('RENDER! ', this.state.bpi);
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
        return currencies //['EUR', 'GBP', 'USD']
            .map(currency => {
                return (
                    <div key={currency}>
                        1 BTC is {bpi[currency].rate}
                        <span>{currency}</span>
                    </div>
                )
            })
    }

    render() {
        return (
            <div>
                <h4>Fetch example</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample
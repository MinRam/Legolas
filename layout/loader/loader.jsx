const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, helper } = this.props;
        const { url_for, _p, __ } = helper;

        return  <div id="loader" class="loader">
            <div id="container">
                <div class="divider" aria-hidden="true"></div>
                <p class="loading-text" aria-label="Loading">
                    <span class="letter" aria-hidden="true">L</span>
                    <span class="letter" aria-hidden="true">o</span>
                    <span class="letter" aria-hidden="true">a</span>
                    <span class="letter" aria-hidden="true">d</span>
                    <span class="letter" aria-hidden="true">i</span>
                    <span class="letter" aria-hidden="true">n</span>
                    <span class="letter" aria-hidden="true">g</span>
                </p>
            </div>
        </div>;
    }
};

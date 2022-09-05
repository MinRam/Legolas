const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, config, helper } = this.props;

        var profileWidget;

        return <Fragment>
            <div id="radar" class="container about-container">
            </div>
        </Fragment>;
    }
};
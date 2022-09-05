const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, config, helper } = this.props;

        return <Fragment>
            <div id="comments" class="container comments">
                <div class="container">
                    <p>留言板开发中<span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
                    <script type="text/javascript" src="/js/component/Building.js"></script>
                </div>
            </div>
        </Fragment>;
    }
};
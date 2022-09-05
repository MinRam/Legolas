const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;
        const { url_for, _p } = helper;

        return <Fragment>
            <div class="bg-cover pd-header about-cover" style="height:90.2vh">
                <div class="container">
                    <div class="row">
                        <div class="col s10 offset-s1 m8 offset-m2 l8 offset-l2">
                            <div class="brand">
                                <div class="title center-align">
                                    404
                                </div>
                                <div class="description center-align">
                                    Can't find page.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>;
    }
};
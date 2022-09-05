const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, helper } = this.props;
        const { url_for, _p, __ } = helper;

        return  <div class="post-statis col l4 hide-on-med-and-down" data-aos="zoom-in-right">
            {site.posts && site.posts.length > 0 ?
            <div class="statis">
                <span class="count"><a href="<%- url_for('/') %>"> {site.posts.length}</a></span>
                <span class="name">{_p('common.post', 1)}</span>
            </div> : null}
            {site.categories && site.categories.length > 0 ?
            <div class="statis">
                <span class="count"><a href="<%- url_for('/categories') %>">{site.categories.length}</a></span>
                <span class="name">{_p('common.category', 1)}</span>
            </div>
            :null }
            {site.tags && site.tags.length > 0 ?
            <div class="statis">
                <span class="count"><a href="<%- url_for('/tags') %>">{site.tags.length}</a></span>
                <span class="name">{_p('common.tag', 1)}</span>
            </div> : null}
        </div>;
    }
};

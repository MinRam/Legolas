const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, helper } = this.props;
        const { url_for, _p, __ } = helper;

        return  <div class="my-skills">
                    <div class="title center-align" data-aos="zoom-in-up">
                        <i class="fas fa-book"/>&nbsp;&nbsp;{__('about.skill_title')}

                        <div class="tag-chips center-align">
                            {
                                site.tags.map( tag => 
                                    <a href={url_for(tag.path)}>
                                        <span class="chip center-align waves-effect waves-light chip-default">{tag.name}</span>
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>;
    }
};

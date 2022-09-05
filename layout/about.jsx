const { Component, Fragment } = require('inferno');
const Post_Static = require('./about/post_static')
const Skills = require('./about/skills')
const Projects = require('./about/projects')

module.exports = class extends Component {
    render() {
        const { site, config, helper } = this.props;

        var profileWidget;

        // find the personal infromation widget from config.
        for(var index = 0; index < config.widgets.length; ++index) {
            if ('avatar' in config.widgets[index]) {
                profileWidget = config.widgets[index];
                break;
            }
        }

        return <Fragment>
            <div id="aboutme" class="container about-container">
                <div class="about-card">
                    <div class="card-content">
                        <div class="row">
                            <div class="col s12 m12 l4">
                                <div class="profile center-align">
                                    <div class="avatar">
                                        <img src={profileWidget.avatar} alt={profileWidget.author} class="circle responsive-img avatar-img"/>
                                    </div>
                                    <div class="author">
                                        <div class="post-statis hide-on-large-only" data-aos="zoom-in-right">
                                            <Post_Static site={site} helper={helper}/>
                                        </div>
                                        <div class="title">{profileWidget.author}</div>
                                        <div class="career">{profileWidget.author_title}</div>
                                        <div class="location">{profileWidget.location}</div>
                                        <div class="social-link hide-on-large-only" data-aos="zoom-in-left">
                                            {/* <%- partial('_partial/social-link') %> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="introduction center-align" data-aos="fade-up">{profileWidget.introdoction}</div>

                        <Skills site={site} helper={helper} />

                        { config.projects.enable ? <Projects site={site} config={config} helper={helper} /> : null }
                    </div>
                </div>
            </div>
        </Fragment>;
    }
};
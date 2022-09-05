const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, config, helper } = this.props;
        const { url_for, _p, __ } = helper;

        var myprojects = config.projects.data;

        return  <div class="my-projects">
                    <div class="title center-align" data-aos="zoom-in-up">
                        <i class="fas fa-gift"></i>&nbsp;&nbsp;{__('about.projects_title')}
                    </div>
                    <div class="row">
                        {
                            myprojects.map ( project => 
                                <div class="col s12 m6 l4" data-aos="fade-up">
                                    <div class="info center-align">
                                        <a href={project.url} class="icon"
                                        style={"background: " + project.iconBackground} target="_blank">
                                            <i class={project.icon}></i>
                                        </a>
                                        <div class="info-title">
                                            <a href={url_for(project.url)} target="_blank">{project.name}</a>
                                        </div>
                                        <div class="info-desc">{project.desc}</div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>;

    }
};

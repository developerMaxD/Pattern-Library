import React from 'react';

import StylesGuideline from './styles-guideline';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shownDisplayPageIndex : 0
        };
        this.handleShowStylesGuideline = this.handleShowStylesGuideline.bind(this);
        this.handleShowComponentsList = this.handleShowComponentsList.bind(this);
    }
    
    render() {
        let page = null;
        switch (this.state.shownDisplayPageIndex) {
            case 0 :
                page = <StylesGuideline/>;
                break;
            case 1 :
                break;
            default :
                page = <StylesGuideline/>;
                break;
        }
        return (
            <div>
                <div className="index-page-header">
                    A study project of create a pattern library based on React.js
                    <div className="index-page-navigater-styles">
                        <a href="#" onClick={this.handleShowStylesGuideline}>Show style guideline</a>
                    </div>
                    <div className="index-page-navigater-components">
                        <a href="#" onClick={this.handleShowComponentsList}>Show components list</a>
                    </div>
                </div>
                    {page}
                <div>
                </div>
            </div>
        );
    }

    handleShowStylesGuideline(event) {
        this.setState({
            shownDisplayPageIndex : 0
        });
    }

    handleShowComponentsList(event) {
        this.setState({
            shownDisplayPageIndex : 1
        });
    }
}
import React from 'react';

export default class ComponentsIndex extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>A study project of create a pattern library based on React.js</h2>
                </div>
                <div>
                    {/* <input type="button" value="Show style guideline" onClick={window.open('http://localhost:9088/src/pages/style-guideline.html')}/> */}
                    <a target="_blank" href="/pages/style-guideline.html">Show style guideline</a>
                </div>
            </div>
        );
    }
}
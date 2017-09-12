import React from 'react';

export default class StylesGuideline extends React.Component {
    render() {
        return (
            <div>
                <div className="title-level-01 title-guideline">
                    Style guideline
                    <div className="title-level-02 title-base-colors">
                        Base colors:
                        <div className="title-level-03 title-polychrome">
                            Polychrome:
                            {/* ******************** Polychrome first line <start> ******************** */}
                            <div className="content-block-left content-colors content-red-light">
                                Red-light
                            </div>
                            <div className="content-block-right content-colors content-red-base">
                                Red-base
                            </div>
                            <div className="content-block-left content-colors content-orange-light">
                                Orange-light
                            </div>
                            <div className="content-block-right content-colors content-orange-base">
                                Orange-base
                            </div>
                            <div className="content-block-left content-colors content-green-light">
                                Green-light
                            </div>
                            <div className="content-block-right content-colors content-green-base">
                                Green-base
                            </div>
                            <div className="content-block-left content-colors content-aqua-light">
                                Aqua-light
                            </div>
                            <div className="content-block-right content-colors content-aqua-base">
                                Aqua-base
                            </div>
                            {/* ******************** Polychrome first line <end> ******************** */}
                            {/* ******************** Polychrome second line <start> ******************** */}
                            <div className="content-block-left content-colors content-blue-light">
                                Blue-light
                            </div>
                            <div className="content-block-right content-colors content-blue-base">
                                Blue-base
                            </div>
                            <div className="content-block-left content-colors content-sky-light">
                                Sky-light
                            </div>
                            <div className="content-block-right content-colors content-sky-base">
                                Sky-base
                            </div>
                            <div className="content-block-left content-colors content-violet-light">
                                Violet-light
                            </div>
                            <div className="content-block-right content-colors content-violet-base">
                                Violet-base
                            </div>
                            <div className="content-block-left content-colors content-pink-light">
                                Pink-light
                            </div>
                            <div className="content-block-right content-colors content-pink-base">
                                Pink-base
                            </div>
                            {/* ******************** Polychrome second line <end> ******************** */}
                        </div>
                        <div className="title-level-03 title-grayscale">
                            Grayscale:
                            <div className="content-block-left content-grays content-whitesmoke">
                                Whitesmoke
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-0">
                                Level 0
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-1">
                                Level 1
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-2">
                                Level 2
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-3">
                                Level 3
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-4">
                                Level 4
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-5">
                                Level 5
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-6">
                                Level 6
                            </div>
                            <div className="content-block-middle content-grays content-gray-level-7">
                                Level 7
                            </div>
                            <div className="content-block-right content-grays content-dimgray">
                                Dimgray
                            </div>
                        </div>
                    </div>
                    <div className="title-level-02 title-animation-setting">
                        Animation setting:
                        <div className="content-block-single animation-trans-backcolor animation-example">
                            Animation (duration: 0.3s; fill-mode: both; timing-function: ease;)
                        </div>
                    </div>
                    <div className="title-level-02 title-components-style">
                        Components style:
                        <div className="title-level-03 title-component-base">
                            Base of components:
                            <div className="temp">
                                
                            </div>
                        </div>
                        <div className="title-level-03 title-basic-components">
                            Basic components:
                            <div className="title-level-04 title-display-components">
                                1. Display components:
                                <div className="title-level-05 title-components-label">
                                    <li>Label:</li>
                                </div>
                                <div className="title-level-05 title-components-image">
                                    <li>Image:</li>
                                </div>
                                <div className="title-level-05 title-components-list">
                                    <li>List:</li>
                                </div>
                                <div className="title-level-05 title-components-tree-list">
                                    <li>Tree list:</li>
                                </div>
                                <div className="title-level-05 title-components-progress">
                                    <li>Progress:</li>
                                </div>
                            </div>
                            <div className="title-level-04 title-input-components">
                                2. Input components:
                                <div className="title-level-05 title-components-editor">
                                    <li>Editor:</li>
                                </div>
                                <div className="title-level-05 title-components-search-editor">
                                    <li>Search Editor:</li>
                                </div>
                                <div className="title-level-05 title-components-rating-editor">
                                    <li>Rating Editor:</li>
                                </div>
                            </div>
                            <div className="title-level-04 title-button-components">
                                3. Button components:
                                <div className="title-level-05 title-components-standard-button">
                                    <li>Standard button:</li>
                                </div>
                                <div className="title-level-05 title-components-image-button">
                                    <li>Image button:</li>
                                </div>
                                <div className="title-level-05 title-components-switch-button">
                                    <li>Switch button:</li>
                                </div>
                            </div>
                            <div className="title-level-04 title-selector-components">
                                4. Selector components:
                                <div className="title-level-05 title-components-combo-selector">
                                    <li>Combo selector:</li>
                                </div>
                                <div className="title-level-05 title-components-radio-selector">
                                    <li>Radio selector:</li>
                                </div>
                                <div className="title-level-05 title-components-checkbox-selector">
                                    <li>Check box selector:</li>
                                </div>
                            </div>
                            <div className="title-level-04 title-dialog-components">
                                5. Dialog components:
                                <div className="title-level-05 title-components-standard-dialog">
                                    <li>Standard dialog:</li>
                                </div>
                                <div className="title-level-05 title-components-feature-dialog">
                                    <li>Feature dialog:</li>
                                </div>
                                <div className="title-level-05 title-components-toaster">
                                    <li>Toaster:</li>
                                </div>
                            </div>
                            <div className="title-level-04 title-picker-components">
                                6. Picker components:
                                <div className="title-level-05 title-components-date-picker">
                                    <li>Date picker:</li>
                                </div>
                                <div className="title-level-05 title-components-time-picker">
                                    <li>Time picker:</li>
                                </div>
                            </div>
                            <div className="title-level-04 title-subpage-components">
                                7. Subpage components:
                                <div className="title-level-05 title-components-pagination">
                                    <li>Pagination:</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
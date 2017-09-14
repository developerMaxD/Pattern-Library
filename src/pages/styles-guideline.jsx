import React from 'react';

export default class StylesGuideline extends React.Component {
    render() {
        return (
            <div>
                <div className="title-level-01 regular-section title-guideline">
                    Style guideline
                    <div className="title-level-02 light-section title-base-colors">
                        Base colors:
                        <div className="title-level-03 little-section title-polychrome">
                            Polychrome:
                            {/* ******************** Polychrome first line <start> ******************** */}
                            <div className="content-block-left content-colors main-content content-red-light">
                                Red-light
                            </div>
                            <div className="content-block-right content-colors main-content content-red-base">
                                Red-base
                            </div>
                            <div className="content-block-left content-colors main-content content-orange-light">
                                Orange-light
                            </div>
                            <div className="content-block-right content-colors main-content content-orange-base">
                                Orange-base
                            </div>
                            <div className="content-block-left content-colors main-content content-green-light">
                                Green-light
                            </div>
                            <div className="content-block-right content-colors main-content content-green-base">
                                Green-base
                            </div>
                            <div className="content-block-left content-colors main-content content-aqua-light">
                                Aqua-light
                            </div>
                            <div className="content-block-right content-colors main-content content-aqua-base">
                                Aqua-base
                            </div>
                            {/* ******************** Polychrome first line <end> ******************** */}
                            {/* ******************** Polychrome second line <start> ******************** */}
                            <div className="content-block-left content-colors main-content content-blue-light">
                                Blue-light
                            </div>
                            <div className="content-block-right content-colors main-content content-blue-base">
                                Blue-base
                            </div>
                            <div className="content-block-left content-colors main-content content-sky-light">
                                Sky-light
                            </div>
                            <div className="content-block-right content-colors main-content content-sky-base">
                                Sky-base
                            </div>
                            <div className="content-block-left content-colors main-content content-violet-light">
                                Violet-light
                            </div>
                            <div className="content-block-right content-colors main-content content-violet-base">
                                Violet-base
                            </div>
                            <div className="content-block-left content-colors main-content content-pink-light">
                                Pink-light
                            </div>
                            <div className="content-block-right content-colors main-content content-pink-base">
                                Pink-base
                            </div>
                            {/* ******************** Polychrome second line <end> ******************** */}
                        </div>
                        <div className="title-level-03 little-section title-grayscale">
                            Grayscale:
                            <div className="content-block-left content-grays main-content content-whitesmoke">
                                Whitesmoke
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-0">
                                Level 0
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-1">
                                Level 1
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-2">
                                Level 2
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-3">
                                Level 3
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-4">
                                Level 4
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-5">
                                Level 5
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-6">
                                Level 6
                            </div>
                            <div className="content-block-middle content-grays main-content content-gray-level-7">
                                Level 7
                            </div>
                            <div className="content-block-right content-grays main-content content-dimgray">
                                Dimgray
                            </div>
                        </div>
                    </div>
                    <div className="title-level-02 light-section title-typography">
                        Typography:    (Open Sans)
                        <div className="main-title typography-item">
                            main-title
                        </div>
                        <div className="main-title typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '32px';
                        </div>
                        <div className="sub-title typography-item">
                            sub-title
                        </div>
                        <div className="sub-title typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '28px';
                        </div>
                        <div className="page-heading typography-item">
                            page-heading
                        </div>
                        <div className="page-heading typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '26px';
                        </div>
                        <div className="subpage-heading typography-item">
                            subpage-heading
                        </div>
                        <div className="subpage-heading typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '24px';
                        </div>
                        <div className="main-section typography-item">
                            main-section
                        </div>
                        <div className="main-section typography-description">
                            weight: 'semi bold(600)'; style: 'normal'; size: '24px';
                        </div>
                        <div className="sub-section typography-item">
                            sub-section
                        </div>
                        <div className="sub-section typography-description">
                            weight: 'semi bold(600)'; style: 'normal'; size: '22px';
                        </div>
                        <div className="regular-section typography-item">
                            regular-section
                        </div>
                        <div className="regular-section typography-description">
                            weight: 'regular(400)'; style: 'normal'; size: '20px';
                        </div>
                        <div className="light-section typography-item">
                            light-section
                        </div>
                        <div className="light-section typography-description">
                            weight: 'regular(400)'; style: 'normal'; size: '18px';
                        </div>
                        <div className="little-section typography-item">
                            little-section
                        </div>
                        <div className="little-section typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '16px';
                        </div>
                        <div className="main-content typography-item">
                            main-content
                        </div>
                        <div className="main-content typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '14px';
                        </div>
                        <div className="main-content-italic typography-item">
                            main-content-italic
                        </div>
                        <div className="main-content-italic typography-description">
                            weight: 'light(300)'; style: 'italic'; size: '14px';
                        </div>
                        <div className="light-content typography-item">
                            light-content
                        </div>
                        <div className="light-content typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '12px';
                        </div>
                        <div className="light-content-italic typography-item">
                            light-content-italic
                        </div>
                        <div className="light-content-italic typography-description">
                            weight: 'light(300)'; style: 'italic'; size: '12px';
                        </div>
                        <div className="tip-content typography-item">
                            tip-content
                        </div>
                        <div className="tip-content typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '11px';
                        </div>
                        <div className="tip-content-italic typography-item">
                            tip-content-italic
                        </div>
                        <div className="tip-content-italic typography-description">
                            weight: 'light(300)'; style: 'italic'; size: '11px';
                        </div>
                    </div>
                    <div className="title-level-02 light-section title-animation-setting">
                        Animation setting:
                        <div className="content-block-single animation-trans-backcolor main-content animation-example">
                            Animation (duration: 0.3s; fill-mode: both; timing-function: ease;)
                        </div>
                    </div>
                    <div className="title-level-02 light-section title-components-style">
                        Components style:
                        <div className="title-level-03 little-section title-component-base">
                            Base of components:
                            <div className="border-example-normal main-content">
                                Normal border
                            </div>
                            <div className="border-example-onfocus main-content">
                                Focus border
                            </div>
                            <div className="border-example-onerror main-content">
                                Error border
                            </div>
                        </div>
                        <div className="title-level-03 little-section title-basic-components">
                            Basic components:
                            <div className="title-level-04 main-content title-display-components">
                                1. Display components:
                                <div className="title-level-05 main-content-italic title-components-label">
                                    <li>Label:</li>
                                    {/* ******************** component [Label] <start> ******************** */}
                                    <div className="label-example-normal label-color-default light-section">
                                        Text in Label, color: Dimgray, size: light-section<br/>*in normal style and multi line *
                                    </div>
                                    <div className="label-example-shadow label-color-default label-text-shadow main-content">
                                        Text in Label, color: Dimgray, size: light-section * in shadow *
                                    </div>
                                    {/* ******************** component [Label] <end> ******************** */}
                                </div>
                                <div className="title-level-05 main-content-italic title-components-image">
                                    <li>Image:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-list">
                                    <li>List:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-tree-list">
                                    <li>Tree list:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-progress">
                                    <li>Progress:</li>
                                </div>
                            </div>
                            <div className="title-level-04 main-content title-input-components">
                                2. Input components:
                                <div className="title-level-05 main-content-italic title-components-editor">
                                    <li>Editor:</li>
                                    {/* ******************** component [Editor] <start> ******************** */}
                                    <div className="editor-example-normal editor-default main-content ">
                                        <input type="text" value="normal editor" className="input-default" />
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-focus editor-focus main-content ">
                                        <input type="text" value="on focus editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-error editor-error main-content ">
                                        <input type="text" value="on error editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-disabled editor-disabled main-content ">
                                        <input type="text" value="disabled editor" className="input-default" disabled />
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    {/* ******************** component [Editor] <end> ******************** */}
                                </div>
                                <div className="title-level-05 main-content-italic title-components-search-editor">
                                    <li>Search Editor:</li>
                                    {/* ******************** component [Search Editor] <start> ******************** */}
                                    <div className="search-editor-example-normal search-editor-default main-content ">
                                        <input type="text" value="normal search editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    <div className="search-editor-example-focus search-editor-focus main-content ">
                                        <input type="text" value="on focus search editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    <div className="search-editor-example-disabled search-editor-disabled main-content ">
                                        <input type="text" value="normal search editor" className="input-default" disabled/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    {/* ******************** component [Search Editor] <end> ******************** */}
                                </div>
                                <div className="title-level-05 main-content-italic title-components-rating-editor">
                                    <li>Rating Editor:</li>
                                    {/* ******************** component [Rating Editor] <start> ******************** */}
                                    <div className="rating-editor-star-empty rating-editor-default">
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    <div className="rating-editor-star-half rating-editor-readonly">
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    <div className="rating-editor-heart-full rating-editor-red-heart">
                                        <i className="fa fa-heart rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    {/* ******************** component [Rating Editor] <end> ******************** */}
                                </div>
                            </div>
                            <div className="title-level-04 main-content title-button-components">
                                3. Button components:
                                <div className="title-level-05 main-content-italic title-components-standard-button">
                                    <li>Standard button:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-image-button">
                                    <li>Image button:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-switch-button">
                                    <li>Switch button:</li>
                                </div>
                            </div>
                            <div className="title-level-04 main-content title-selector-components">
                                4. Selector components:
                                <div className="title-level-05 main-content-italic title-components-combo-selector">
                                    <li>Combo selector:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-radio-selector">
                                    <li>Radio selector:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-checkbox-selector">
                                    <li>Check box selector:</li>
                                </div>
                            </div>
                            <div className="title-level-04 main-content title-dialog-components">
                                5. Dialog components:
                                <div className="title-level-05 main-content-italic title-components-standard-dialog">
                                    <li>Standard dialog:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-feature-dialog">
                                    <li>Feature dialog:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-toaster">
                                    <li>Toaster:</li>
                                </div>
                            </div>
                            <div className="title-level-04 main-content title-picker-components">
                                6. Picker components:
                                <div className="title-level-05 main-content-italic title-components-date-picker">
                                    <li>Date picker:</li>
                                </div>
                                <div className="title-level-05 main-content-italic title-components-time-picker">
                                    <li>Time picker:</li>
                                </div>
                            </div>
                            <div className="title-level-04 main-content title-subpage-components">
                                7. Subpage components:
                                <div className="title-level-05 main-content-italic title-components-pagination">
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
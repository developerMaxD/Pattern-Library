import React from 'react';

export default class StylesGuideline extends React.Component {
    render() {
        return (
            <div>
                <div className="title-level-01 regular-section title-guideline">
                    Style guideline
                    <div className="title-level-02 small-section title-base-colors">
                        Base colors:
                        <div className="title-level-03 tiny-section title-polychrome">
                            Polychrome:
                            {/* ******************** Polychrome first line <start> ******************** */}
                            <div className="content-block-left content-colors regular-content content-red-light">
                                Red-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-red-base">
                                Red-base
                            </div>
                            <div className="content-block-left content-colors regular-content content-orange-light">
                                Orange-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-orange-base">
                                Orange-base
                            </div>
                            <div className="content-block-left content-colors regular-content content-green-light">
                                Green-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-green-base">
                                Green-base
                            </div>
                            <div className="content-block-left content-colors regular-content content-aqua-light">
                                Aqua-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-aqua-base">
                                Aqua-base
                            </div>
                            {/* ******************** Polychrome first line <end> ******************** */}
                            {/* ******************** Polychrome second line <start> ******************** */}
                            <div className="content-block-left content-colors regular-content content-blue-light">
                                Blue-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-blue-base">
                                Blue-base
                            </div>
                            <div className="content-block-left content-colors regular-content content-sky-light">
                                Sky-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-sky-base">
                                Sky-base
                            </div>
                            <div className="content-block-left content-colors regular-content content-violet-light">
                                Violet-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-violet-base">
                                Violet-base
                            </div>
                            <div className="content-block-left content-colors regular-content content-pink-light">
                                Pink-light
                            </div>
                            <div className="content-block-right content-colors regular-content content-pink-base">
                                Pink-base
                            </div>
                            {/* ******************** Polychrome second line <end> ******************** */}
                        </div>
                        <div className="title-level-03 tiny-section title-grayscale">
                            Grayscale:
                            <div className="content-block-left content-grays regular-content content-whitesmoke">
                                Whitesmoke
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-0">
                                Level 0
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-1">
                                Level 1
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-2">
                                Level 2
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-3">
                                Level 3
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-4">
                                Level 4
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-5">
                                Level 5
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-6">
                                Level 6
                            </div>
                            <div className="content-block-middle content-grays regular-content content-gray-level-7">
                                Level 7
                            </div>
                            <div className="content-block-right content-grays regular-content content-dimgray">
                                Dimgray
                            </div>
                        </div>
                    </div>
                    <div className="title-level-02 small-section title-typography">
                        Typography:    (Open Sans)
                        <div className="large-title typography-item">
                            large-title
                        </div>
                        <div className="large-title typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '32px';
                        </div>
                        <div className="regular-title typography-item">
                            regular-title
                        </div>
                        <div className="regular-title typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '28px';
                        </div>
                        <div className="large-heading typography-item">
                            large-heading
                        </div>
                        <div className="large-heading typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '26px';
                        </div>
                        <div className="regular-heading typography-item">
                            regular-heading
                        </div>
                        <div className="regular-heading typography-description">
                            weight: 'bold(700)'; style: 'normal'; size: '24px';
                        </div>
                        <div className="huge-section typography-item">
                            huge-section
                        </div>
                        <div className="huge-section typography-description">
                            weight: 'semi bold(600)'; style: 'normal'; size: '24px';
                        </div>
                        <div className="large-section typography-item">
                            large-section
                        </div>
                        <div className="large-section typography-description">
                            weight: 'semi bold(600)'; style: 'normal'; size: '22px';
                        </div>
                        <div className="regular-section typography-item">
                            regular-section
                        </div>
                        <div className="regular-section typography-description">
                            weight: 'regular(400)'; style: 'normal'; size: '20px';
                        </div>
                        <div className="small-section typography-item">
                            small-section
                        </div>
                        <div className="small-section typography-description">
                            weight: 'regular(400)'; style: 'normal'; size: '18px';
                        </div>
                        <div className="tiny-section typography-item">
                            tiny-section
                        </div>
                        <div className="tiny-section typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '16px';
                        </div>
                        <div className="regular-content typography-item">
                            regular-content
                        </div>
                        <div className="regular-content typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '14px';
                        </div>
                        <div className="regular-content-italic typography-item">
                            regular-content-italic
                        </div>
                        <div className="regular-content-italic typography-description">
                            weight: 'light(300)'; style: 'italic'; size: '14px';
                        </div>
                        <div className="small-content typography-item">
                            small-content
                        </div>
                        <div className="small-content typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '12px';
                        </div>
                        <div className="small-content-italic typography-item">
                            small-content-italic
                        </div>
                        <div className="small-content-italic typography-description">
                            weight: 'light(300)'; style: 'italic'; size: '12px';
                        </div>
                        <div className="tiny-content typography-item">
                            tiny-content
                        </div>
                        <div className="tiny-content typography-description">
                            weight: 'light(300)'; style: 'normal'; size: '11px';
                        </div>
                        <div className="tiny-content-italic typography-item">
                            tiny-content-italic
                        </div>
                        <div className="tiny-content-italic typography-description">
                            weight: 'light(300)'; style: 'italic'; size: '11px';
                        </div>
                    </div>
                    <div className="title-level-02 small-section title-animation-setting">
                        Animation setting:
                        <div className="content-block-single anim-trans-backcolor regular-content animation-example">
                            Animation (duration: 0.3s; fill-mode: both; timing-function: ease;)
                        </div>
                    </div>
                    <div className="title-level-02 small-section title-components-style">
                        Components style:
                        <div className="title-level-03 tiny-section title-component-base">
                            Base of components:
                            <div className="border-example-normal regular-content">
                                Normal border
                            </div>
                            <div className="border-example-onfocus regular-content">
                                Focus border
                            </div>
                            <div className="border-example-onerror regular-content">
                                Error border
                            </div>
                        </div>
                        <div className="title-level-03 tiny-section title-basic-components">
                            Basic components:
                            <div className="title-level-04 regular-content title-display-components">
                                1. Display components:
                                <div className="title-level-05 regular-content-italic title-components-label">
                                    <li>Label:</li>
                                    {/* ******************** component [Label] <start> ******************** */}
                                    <div className="label-example-normal lbl-default small-section">
                                        Text in Label, color: Dimgray, size: small-section<br/>*in normal style and multi line *
                                    </div>
                                    <div className="label-example-shadow lbl-default lbl-shadow regular-content">
                                        Text in Label, color: Dimgray, size: small-section * in shadow *
                                    </div>
                                    {/* ******************** component [Label] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-image">
                                    <li>Image:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-list">
                                    <li>List:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-tree-list">
                                    <li>Tree list:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-progress">
                                    <li>Progress:</li>
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-input-components">
                                2. Input components:
                                <div className="title-level-05 regular-content-italic title-components-editor">
                                    <li>Editor:</li>
                                    {/* ******************** component [Editor] <start> ******************** */}
                                    <div className="editor-example-normal edt-default regular-content ">
                                        <input type="text" value="normal editor" className="input-default" />
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-focus edt-focus regular-content ">
                                        <input type="text" value="on focus editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-error edt-error regular-content ">
                                        <input type="text" value="on error editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-disabled edt-disabled regular-content ">
                                        <input type="text" value="disabled editor" className="input-default" disabled />
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    {/* ******************** component [Editor] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-search-editor">
                                    <li>Search Editor:</li>
                                    {/* ******************** component [Search Editor] <start> ******************** */}
                                    <div className="search-editor-example-normal search-default regular-content ">
                                        <input type="text" value="normal search editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    <div className="search-editor-example-focus search-focus regular-content ">
                                        <input type="text" value="on focus search editor" className="input-default"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    <div className="search-editor-example-disabled search-disabled regular-content ">
                                        <input type="text" value="normal search editor" className="input-default" disabled/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    {/* ******************** component [Search Editor] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-rating-editor">
                                    <li>Rating Editor:</li>
                                    {/* ******************** component [Rating Editor] <start> ******************** */}
                                    <div className="rating-editor-star-empty rating-default">
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    <div className="rating-editor-star-half rating-readonly">
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    <div className="rating-editor-heart-full rating-red-heart">
                                        <i className="fa fa-heart rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-heart-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    {/* ******************** component [Rating Editor] <end> ******************** */}
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-button-components">
                                3. Button components:
                                <div className="title-level-05 regular-content-italic title-components-standard-button">
                                    <li>Standard button:</li>
                                    {/* ******************** component [Standard button] <start> ******************** */}
                                    <div unselectable="on" className="btn-ex-a btn large btn-plain regular-section">
                                        Large Palin
                                    </div>
                                    <div unselectable="on" className="btn-ex-b btn regular btn-primary regular-content">
                                        Regular Primary
                                    </div>
                                    <div unselectable="on" className="btn-ex-c btn regular btn-warning regular-content">
                                        Regular Warning
                                    </div>
                                    <div unselectable="on" className="btn-ex-d btn regular btn-alarm regular-content">
                                        Regular Alarm
                                    </div>
                                    <div unselectable="on" className="btn-ex-e btn regular btn-prompt regular-content">
                                        Regular Prompt
                                    </div>
                                    <div unselectable="on" className="btn-ex-f btn regular btn-attention regular-content">
                                        Regular<br/>Attention
                                    </div>
                                    <div unselectable="on" className="btn-ex-g btn regular btn-attention regular-content" disabled>
                                        Regular Disabled
                                    </div>
                                    <div unselectable="on" className="btn-ex-h btn small btn-primary small-content">
                                        Small Primary
                                    </div>
                                    {/* ******************** component [Standard button] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-image-button">
                                    <li>Image button:</li>
                                    {/* ******************** component [Image button] <start> ******************** */}
                                    <div className="imgbtn regular">
                                        <div ref="img">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div ref="txt">
                                            Edit
                                        </div>
                                    </div>
                                    {/* ******************** component [Image button] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-switch-button">
                                    <li>Switch button:</li>
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-selector-components">
                                4. Selector components:
                                <div className="title-level-05 regular-content-italic title-components-combo-selector">
                                    <li>Combo selector:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-radio-selector">
                                    <li>Radio selector:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-checkbox-selector">
                                    <li>Check box selector:</li>
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-dialog-components">
                                5. Dialog components:
                                <div className="title-level-05 regular-content-italic title-components-standard-dialog">
                                    <li>Standard dialog:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-feature-dialog">
                                    <li>Feature dialog:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-toaster">
                                    <li>Toaster:</li>
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-picker-components">
                                6. Picker components:
                                <div className="title-level-05 regular-content-italic title-components-date-picker">
                                    <li>Date picker:</li>
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-time-picker">
                                    <li>Time picker:</li>
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-subpage-components">
                                7. Subpage components:
                                <div className="title-level-05 regular-content-italic title-components-pagination">
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
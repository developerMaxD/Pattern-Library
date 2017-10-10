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
                                    <div className="label-example-normal label default small-section">
                                        Text in Label, color: Dimgray, size: small-section<br/>*in normal style and multi line *
                                    </div>
                                    <div className="label-example-shadow label shadow regular-content">
                                        Text in Label, color: Dimgray, size: small-section * in shadow *
                                    </div>
                                    {/* ******************** component [Label] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-image">
                                    <li>Image:</li>
                                    {/* ******************** component [Image] <start> ******************** */}
                                    <div className="image-ex-a1 image popup">
                                        <img className="thumbnail" src={"http://localhost:9088/images/flower-thumbnail.jpg"} alt="flower" />
                                        <div className="attachment">
                                            <img className="content" src={"http://localhost:9088/images/flower-origin.jpg"} alt="flower" />
                                        </div>
                                    </div>
                                    <div className="image-ex-a2 image overlay">
                                        <img className="thumbnail" src={"http://localhost:9088/images/flower-medium.jpg"} alt="flower" />
                                        <div className="attachment">
                                            <div className="content small-content">
                                                The essential parts of a flower can be considered in two parts: the vegetative part, consisting of petals and associated structures in the perianth, and the reproductive or sexual parts. A stereotypical flower consists of four kinds of structures attached to the tip of a short stalk. Each of these kinds of parts is arranged in a whorl on the receptacle.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-ex-a3 image disabled">
                                        <img className="thumbnail" src={"http://localhost:9088/images/flower-medium.jpg"} alt="flower" />
                                    </div>
                                    {/* ******************** component [Image] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-list">
                                    <li>List:</li>
                                    {/* ******************** component [List] <start> ******************** */}
                                    <div className="list-ex-a1 list name-value regular-content">
                                        <div className="item selectable">
                                            <div className="bullet">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                Java
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                            <div className="value">
                                                12.96%
                                            </div>
                                        </div>
                                        <div className="item selectable">
                                            <div className="bullet">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                C#
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                            <div className="value">
                                                4.20%
                                            </div>
                                        </div>
                                        <div className="item selectable selected">
                                            <div className="bullet">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                Pyhton
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                            <div className="value">
                                                3.69%
                                            </div>
                                        </div>
                                        <div className="item selectable">
                                            <div className="bullet">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                JavaScript
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                            <div className="value">
                                                2.10%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-ex-a2 list text-only regular-content">
                                        <div className="item selectable">
                                            <div className="text">
                                                Arts, Crafts & Sewing
                                            </div>
                                        </div>
                                        <div className="item selectable selected">
                                            <div className="text">
                                                Beauty & Personal Care
                                            </div>
                                        </div>
                                        <div className="item selectable">
                                            <div className="text">
                                                Books
                                            </div>
                                        </div>
                                        <div className="item selectable">
                                            <div className="text">
                                                Clothing, Shoes & Jewelry
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-ex-a3 list text-only regular-content">
                                        <div className="item">
                                            <div className="text">
                                                Computers
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="text">
                                                Credit and Payment Cards
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="text">
                                                Digital Music
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="text">
                                                Electronics
                                            </div>
                                        </div>
                                    </div>
                                    {/* ******************** component [List] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-tree-list">
                                    <li>Tree list:</li>
                                    {/* ******************** component [Tree List] <start> ******************** */}
                                    <div className="tree-list-ex-a1 tree-list  regular-content">
                                        <div className="root">
										    <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
										    <div className="text">
                                                Life
                                            </div>
										</div>
                                        <ul className="tree">
                                            <li>
                                                <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                <div className="text">
                                                    Animals
                                                </div>
                                                <ul>
                                                    <li>
                                                        <i className="fa fa-plus-square-o icon" aria-hidden="true"></i>
                                                        <div className="text">
                                                            Birds
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                        <div className="text">
                                                            Mammals
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div className="text selectable">
                                                                    Elephant
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="text selectable">
                                                                    Mouse
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-plus-square-o icon" aria-hidden="true"></i>
                                                        <div className="text">
                                                            Reptiles
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                <div className="text">
                                                    Plants
                                                </div>
                                                <ul>
                                                    <li>
                                                        <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                        <div className="text">
                                                            Flowers
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <i className="fa fa-plus-square-o icon" aria-hidden="true"></i>
                                                                <div className="text">
                                                                    Rose
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                                <div className="text">
                                                                    Tulip
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                                        <div className="text">
                                                                            Single tulips
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <div className="text selectable">
                                                                                    Single early tulips
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="text selectable">
                                                                                    Single late tulips
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-minus-square-o icon" aria-hidden="true"></i>
                                                                        <div className="text">
                                                                            Double tulips
                                                                        </div>
                                                                        <ul>
                                                                            <li>
                                                                                <div className="text selectable">
                                                                                    Double early tulips
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="text selectable">
                                                                                    Double late tulips
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>
                                                                        <div className="text selectable">
                                                                            Fosteriana tulips
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="text selectable">
                                                                            Kaufmanniana tulips
                                                                            </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="text selectable">
                                                                            Greigii tulips
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="text selectable">
                                                                            Triumph tulips
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-plus-square-o icon" aria-hidden="true"></i>
                                                        <div className="text">
                                                            Trees
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* ******************** component [Tree List] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-progress">
                                    <li>Progress:</li>
                                    {/* ******************** component [Progress] <start> ******************** */}
                                    <div className="progress-ex-a1 regular-section progress circle">
                                        <div className="bar" data-progress="10">
                                            {/* VV */}
                                        </div>
                                    </div>
                                    {/* ******************** component [Progress] <end> ******************** */}
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-input-components">
                                2. Input components:
                                <div className="title-level-05 regular-content-italic title-components-editor">
                                    <li>Editor:</li>
                                    {/* ******************** component [Editor] <start> ******************** */}
                                    <div className="editor-example-normal editor default regular-content ">
                                        <input type="text" value="normal editor" className="input" />
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-focus editor focus regular-content ">
                                        <input type="text" value="on focus editor" className="input"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-error editor error regular-content ">
                                        <input type="text" value="on error editor" className="input"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="editor-example-disabled editor disabled regular-content ">
                                        <input type="text" value="disabled editor" className="input" disabled />
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
                                    <div className="search-editor-example-normal search-editor default regular-content ">
                                        <input type="text" value="normal search editor" className="input"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    <div className="search-editor-example-focus search-editor focus regular-content ">
                                        <input type="text" value="on focus search editor" className="input"/>
                                        <span className="fa-stack close-button">
                                            <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                            <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                        </span>
                                        <i className="fa fa-search search-button" aria-hidden="true"></i>
                                    </div>
                                    <div className="search-editor-example-disabled search-editor disabled regular-content ">
                                        <input type="text" value="disabled search editor" className="input" disabled/>
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
                                    <div className="rating-editor-star-empty rating-editor default">
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    <div className="rating-editor-star-half rating-editor readonly">
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                        <i className="fa fa-star-o rating-item" aria-hidden="true"></i>
                                    </div>
                                    <div className="rating-editor-heart-full rating-editor heart">
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
                                    <div unselectable="on" className="btn-ex-a anim-trans-backcolor btn plain clickable">
                                        <div className="large-text">
                                            Large Palin
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-b anim-trans-backcolor btn primary clickable">
                                        <div className="regular-text">
                                            Regular Primary
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-c anim-trans-backcolor btn warning clickable">
                                        <div className="regular-text">
                                            Regular Warning
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-d anim-trans-backcolor btn alarm clickable">
                                        <div className="regular-text">
                                            Regular Alarm
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-e anim-trans-backcolor btn prompt clickable">
                                        <div className="regular-text">
                                            Regular Prompt
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-f anim-trans-backcolor btn attention clickable">
                                        <div className="regular-text">
                                            Regular<br/>Attention
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-g anim-trans-backcolor btn attention" disabled>
                                        <div className="regular-text">
                                            Regular Disabled
                                        </div>
                                    </div>
                                    <div unselectable="on" className="btn-ex-h anim-trans-backcolor btn primary clickable">
                                        <div className="small-text">
                                            Small Primary
                                        </div>
                                    </div>
                                    {/* ******************** component [Standard button] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-image-button">
                                    <li>Image button:</li>
                                    {/* ******************** component [Image button] <start> ******************** */}
                                    <div className="imgbtn-ex-l11 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="large-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="large-text left">
                                            E
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l12 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            E
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l13 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="small-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="small-text left">
                                            E
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l21 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="large-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="large-text left">
                                            Edit image button
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l22 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            Edit image button
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l23 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="small-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="small-text left">
                                            Edit image button
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l31 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="large-icon right">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="large-text right">
                                            Edit image button
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l32 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="regular-icon right">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text right">
                                            Edit image button
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l33 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="small-icon right">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="small-text right">
                                            Edit image button
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l41 anim-trans-backcolor imgbtn edit" disabled>
                                        <div className="large-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="large-text left">
                                            Disabled edit
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l42 anim-trans-backcolor imgbtn edit" disabled>
                                        <div className="regular-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            Disabled edit
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-l43 anim-trans-backcolor imgbtn edit" disabled>
                                        <div className="small-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="small-text left">
                                            Disabled edit
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-a1 anim-trans-backcolor imgbtn edit clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            edit
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-a2 anim-trans-backcolor imgbtn file clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            file
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-a3 anim-trans-backcolor imgbtn list clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-list" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            list
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-a4 anim-trans-backcolor imgbtn dele clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            delete
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-a5 anim-trans-backcolor imgbtn addr clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-address-card-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            address
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-a6 anim-trans-backcolor imgbtn dshb-a clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-tachometer" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            dashboard
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-b1 anim-trans-backcolor imgbtn dshb-b clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            dashboard
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-b2 anim-trans-backcolor imgbtn set-a clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-cog" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            setting1
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-b3 anim-trans-backcolor imgbtn set-b clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-cogs" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            setting2
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-b4 anim-trans-backcolor imgbtn set-c clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-sliders" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            setting3
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-b5 anim-trans-backcolor imgbtn hnor clickable">
                                        <div className="regular-icon left">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="regular-text left">
                                            honor
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-b6 anim-trans-backcolor imgbtn cald clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            calendar
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-c1 anim-trans-backcolor imgbtn bell clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            bell
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-c2 anim-trans-backcolor imgbtn user clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            user
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-c3 anim-trans-backcolor imgbtn warn clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            warning
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-c4 anim-trans-backcolor imgbtn tack clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            tack
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-c5 anim-trans-backcolor imgbtn tags clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-tags" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            tags
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-c6 anim-trans-backcolor imgbtn sort clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            sort
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-d1 anim-trans-backcolor imgbtn sign-in clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            sign-in
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-d2 anim-trans-backcolor imgbtn sign-out clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            sign-out
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-d3 anim-trans-backcolor imgbtn refh clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-refresh" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            refresh
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-d4 anim-trans-backcolor imgbtn pict clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-picture-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            picture
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-d5 anim-trans-backcolor imgbtn chrt clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-line-chart" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            chart
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-d6 anim-trans-backcolor imgbtn bulb clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            light-bulb
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-e1 anim-trans-backcolor imgbtn key clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-key" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            key
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-e3 anim-trans-backcolor imgbtn info clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            info
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-e2 anim-trans-backcolor imgbtn beat clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-heartbeat" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            heart-beat
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-e4 anim-trans-backcolor imgbtn hsty clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-history" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            history
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-e5 anim-trans-backcolor imgbtn home clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-home" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            home
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-e6 anim-trans-backcolor imgbtn flag clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-flag" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            flag
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-f1 anim-trans-backcolor imgbtn bolt clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-bolt" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            bolt
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-f2 anim-trans-backcolor imgbtn mail clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            mail
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-f3 anim-trans-backcolor imgbtn lock clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            lock
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-f4 anim-trans-backcolor imgbtn unlk clickable">
                                        <div className="regular-icon left">
                                            <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                        </div>
                                        <div className="regular-text left">
                                            unlock
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-f5 anim-trans-backcolor imgbtn top clickable" title="back to top">
                                        <div className="large-icon single">
                                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-f6 anim-trans-backcolor imgbtn top clickable" title="back to top">
                                        <div className="regular-icon single">
                                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-f7 anim-trans-backcolor imgbtn top clickable" title="back to top">
                                        <div className="small-icon single">
                                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    {/* ******************** ******************** ******************** */}
                                    <div className="imgbtn-ex-g1 anim-trans-backcolor imgbtn hnor clickable">
                                        <div className="large-icon left">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="large-text left">
                                            honor
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-g2 anim-trans-backcolor imgbtn hnor clickable">
                                        <div className="regular-icon left">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="regular-text left">
                                            honor
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-g3 anim-trans-backcolor imgbtn hnor clickable">
                                        <div className="small-icon left">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="small-text left">
                                            honor
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-g4 anim-trans-backcolor imgbtn hnor clickable" title="honor">
                                        <div className="large-icon single">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-g5 anim-trans-backcolor imgbtn hnor clickable" title="honor">
                                        <div className="regular-icon single">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="imgbtn-ex-g6 anim-trans-backcolor imgbtn hnor clickable" title="honor">
                                        <div className="small-icon single">
                                            <span className="fa-stack medal">
                                                <i className="fa fa-bookmark fa-stack-1x medal-ribbon" aria-hidden="true"></i>
                                                <i className="fa fa-certificate fa-stack-1x medal-star" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    {/* ******************** component [Image button] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-switch-button">
                                    <li>Switch button:</li>
                                    {/* ******************** component [Switch button] <start> ******************** */}
                                    <div className="swbtn-ex-a1 swbtn large on">
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-a2 swbtn large off">
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-a3 swbtn large off" disabled>
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-b1 swbtn regular on">
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-b2 swbtn regular off">
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-b3 swbtn regular off" disabled>
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-c1 swbtn small on">
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-c2 swbtn small off">
                                        <div className="inner-button"></div>
                                    </div>
                                    <div className="swbtn-ex-c3 swbtn small off" disabled>
                                        <div className="inner-button"></div>
                                    </div>
                                    {/* ******************** component [Switch button] <end> ******************** */}
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-selector-components">
                                4. Selector components:
                                <div className="title-level-05 regular-content-italic title-components-combo-selector">
                                    <li>Combo selector:</li>
                                    {/* ******************** component [Combo selector] <end> ******************** */}
                                    <div className="cmbSltr-ex-a1 regular-content">
                                        <div ref="box" className="combo-box default">
                                            <span className="placeholder">Please select name.</span>
                                            <div className="content">
                                                <input type="text" className="searcher"/>
                                            </div>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-down list-button" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="cmbSltr-ex-a2 regular-content">
                                        <div ref="box" className="combo-box default">
                                            {/* <span className="placeholder">Please select name.</span> */}
                                            <div className="content">
                                                <div className="single">Jacob</div>
                                                <input type="text" className="searcher"/>
                                            </div>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-down list-button" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="cmbSltr-ex-a3 regular-content">
                                        <div ref="box" className="combo-box focus">
                                            <span className="placeholder">Please select name.</span>
                                            <div className="content">
                                                <input type="text" className="searcher"/>
                                            </div>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-up list-button" aria-hidden="true"></i>
                                        </div>
                                        <div className="combo-list">
                                            <div className="options">
                                                <div className="option anim-trans-backcolor">Christopher</div>
                                                <div className="option anim-trans-backcolor">Joshua</div>
                                                <div className="option anim-trans-backcolor">Alexander</div>
                                                <div className="option anim-trans-backcolor">Francisco</div>
                                                <div className="option anim-trans-backcolor">Nicholas</div>
                                                <div className="option anim-trans-backcolor">Caleb</div>
                                                <div className="option anim-trans-backcolor">Matthew</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cmbSltr-ex-b1 regular-content">
                                        <div ref="box" className="combo-box error">
                                            <span className="placeholder">Please select name.</span>
                                            <div className="content">
                                                <input type="text" className="searcher"/>
                                            </div>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-down list-button" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="cmbSltr-ex-b2 regular-content">
                                        <div ref="box" className="combo-box default">
                                            {/* <span className="placeholder">Please select name.</span> */}
                                            <div className="content">
                                                <div className="multi anim-trans-backcolor">
                                                    <span className="fa-stack remove">
                                                        <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                                    </span>
                                                    Jacob
                                                </div>
                                                <div className="multi anim-trans-backcolor">
                                                    <span className="fa-stack remove">
                                                        <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                                    </span>
                                                    Caleb
                                                </div>
                                                <input type="text" className="searcher"/>
                                            </div>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-down list-button" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="cmbSltr-ex-c1 regular-content">
                                        <div ref="box" className="combo-box disabled">
                                            <span className="placeholder">Please select name.</span>
                                            <div className="content">
                                                <input type="text" className="searcher" disabled/>
                                            </div>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-down list-button" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="cmbSltr-ex-c2 regular-content">
                                        <div ref="box" className="combo-box default">
                                            {/* <span className="placeholder">Please select name.</span> */}
                                            <i className="fa fa-angle-left left-button" aria-hidden="true"></i>
                                            <div className="content box-setting">      {/* <-- temp for sync component */}
                                                <div className="multi anim-trans-backcolor">
                                                    <span className="fa-stack remove">
                                                        <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                                    </span>
                                                    Jacob
                                                </div>
                                                <div className="multi anim-trans-backcolor">
                                                    <span className="fa-stack remove">
                                                        <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                                    </span>
                                                    Caleb
                                                </div>
                                                <div className="multi anim-trans-backcolor">
                                                    <span className="fa-stack remove">
                                                        <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                                    </span>
                                                    Ryan
                                                </div>
                                                <input type="text" className="searcher"/>
                                            </div>
                                            <i className="fa fa-angle-right right-button" aria-hidden="true"></i>
                                            <span className="fa-stack close-button">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true"></i>
                                            </span>
                                            <i className="fa fa-angle-down list-button" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    {/* ******************** component [Combo selector] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-radio-selector">
                                    <li>Radio selector:</li>
                                    {/* ******************** component [radio selector] <start> ******************** */}
                                    <div className="rdoSltr-ex-a1 regular-content">
                                        <div ref="box" className="radio-box">
                                            <div className="content">
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-dot-circle-o checker checked" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        James
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rdoSltr-ex-a2 regular-content">
                                        <div ref="box" className="radio-box">
                                            <div className="content">
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-dot-circle-o checker checked" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        James
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rdoSltr-ex-b1 regular-content">
                                        <div ref="box" className="radio-box">
                                            <div className="content">
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Jacob
                                                </div>
                                                <div className="card default checked anim-trans-backcolor">
                                                    <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                    Joshua
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Matthew
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Christopher
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Alexander
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Ryan
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Nicholas
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Caleb
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Francisco
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Ethan
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    James
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rdoSltr-ex-c1 regular-content">
                                        <div ref="box" className="radio-box">
                                            <div className="content">
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Jacob
                                                </div>
                                                <div className="card disabled checked anim-trans-backcolor">
                                                    <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                    Joshua
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Matthew
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Christopher
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Alexander
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Ryan
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Nicholas
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Caleb
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Francisco
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Ethan
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    James
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ******************** component [radio selector] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-checkbox-selector">
                                    <li>Check box selector:</li>
                                    {/* ******************** component [checkbox selector] <start> ******************** */}
                                    <div className="chkSltr-ex-a1 regular-content">
                                        <div ref="box" className="check-box">
                                            <div className="content">
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker checked" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker checked" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker checked" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        James
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chkSltr-ex-a2 regular-content">
                                        <div ref="box" className="check-box">
                                            <div className="content">
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker checked" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker checked" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker checked" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        James
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chkSltr-ex-b1 regular-content">
                                        <div ref="box" className="check-box">
                                            <div className="content">
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Jacob
                                                </div>
                                                <div className="card default checked anim-trans-backcolor">
                                                    <i className="fa fa-check checker" aria-hidden="true"></i>
                                                    Joshua
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Matthew
                                                </div>
                                                <div className="card default checked anim-trans-backcolor">
                                                    <i className="fa fa-check checker" aria-hidden="true"></i>
                                                    Christopher
                                                </div>
                                                <div className="card default checked anim-trans-backcolor">
                                                    <i className="fa fa-check checker" aria-hidden="true"></i>
                                                    Alexander
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Ryan
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Nicholas
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Caleb
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Francisco
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    Ethan
                                                </div>
                                                <div className="card default unchecked anim-trans-backcolor">
                                                    James
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chkSltr-ex-c1 regular-content">
                                        <div ref="box" className="check-box">
                                            <div className="content">
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Jacob
                                                </div>
                                                <div className="card disabled checked anim-trans-backcolor">
                                                    <i className="fa fa-check checker" aria-hidden="true"></i>
                                                    Joshua
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Matthew
                                                </div>
                                                <div className="card disabled checked anim-trans-backcolor">
                                                    <i className="fa fa-check checker" aria-hidden="true"></i>
                                                    Christopher
                                                </div>
                                                <div className="card disabled checked anim-trans-backcolor">
                                                    <i className="fa fa-check checker" aria-hidden="true"></i>
                                                    Alexander
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Ryan
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Nicholas
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Caleb
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Francisco
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    Ethan
                                                </div>
                                                <div className="card disabled unchecked anim-trans-backcolor">
                                                    James
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ******************** component [checkbox selector] <end> ******************** */}
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
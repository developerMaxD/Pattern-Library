import React from 'react';

export default class StylesGuideline extends React.Component {
    
    constructor(props) {
        super(props);
        this.getPictureSize = this.getPictureSize.bind(this);
        this.setPictureSize = this.setPictureSize.bind(this);
        this.setThumbnailSize = this.setThumbnailSize.bind(this);
        this.ejectToasterBar = this.ejectToasterBar.bind(this);
        // this.removeSpecificClass = this.removeSpecificClass.bind(this);
        this.showHindStandardDialogListener = this.showHindStandardDialogListener.bind(this);
        // ******************** Web browser detector ********************
        // Opera 8.0+
        const isOpera = (!!window.opr && !!opr.addons) || 
                        !!window.opera || 
                        navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
        const isFirefox = typeof InstallTrigger !== 'undefined';
        // Safari 3.0+ "[object HTMLElementConstructor]" 
        const isSafari = /constructor/i.test(window.HTMLElement) || 
                         (function (p) { 
                             return p.toString() === "[object SafariRemoteNotification]"; 
                          })(!window['safari'] || safari.pushNotification);
        // Internet Explorer 6-11
        const isIE = /*@cc_on!@*/false || !!document.documentMode;
        // Edge 20+
        const isEdge = !isIE && !!window.StyleMedia;

        var isChrome = false;
        var isUCBrowser = false;
        if (!!window.chrome && !!window.chrome.webstore) {
            if (/UBrowser/.test(navigator.userAgent)) {
                // Chrome 1+
                isChrome = false;
                // UC Browser
                isUCBrowser = true;
            } else {
                // Chrome 1+
                isChrome = true;
                // UC Browser
                isUCBrowser = false;
            }
        }
        // UC Browser
        // const isUCBrowser = (isChrome || isSafari) ? false : /^Mozilla\/5\.0 .+ Gecko/.test(navigator.userAgent);
        // console.log('Chrome: ', isChrome, '; Safari: ', isSafari, '; UC: ', isUCBrowser, ';   userAgent: ', navigator.userAgent);

        // ******************** Web browser detector ********************
        this.state = { onChrome: isChrome,
                       onSafari: isSafari,
                       onFireFox: isFirefox,
                       onOpera: isOpera,
                       onIE: isIE,
                       onEdge: isEdge,
                       onUCBrowser: isUCBrowser,
                       picWidth: 0, 
                       picHeight: 0,
                       thmWidth: 0,
                       thmHeight: 0 } ;
    }

    componentWillMount() {
        if ((this.state.onIE || this.state.onUCBrowser || this.state.onSafari) && 
            (this.state.picWidth == 0 || this.state.picHeight == 0 || this.state.thmWidth == 0 || this.state.thmHeight == 0)) {
        // if (this.state.picWidth == 0 || this.state.picHeight == 0 || this.state.thmWidth == 0 || this.state.thmHeight == 0) {
            let url = 'http://img.hb.aicdn.com/f8730e12f3c93f7155ed81ae8d35c3a782063250152ab-xdttq4_fw658';
            this.getPictureSize(url, this.setPictureSize);
            url = 'http://img.hb.aicdn.com/4b25a49fb9e3707894b8305865fc3d6f52077d269310-29zp33_fw658';
            this.getPictureSize(url, this.setThumbnailSize);
        }
    }

    getPictureSize(url, callback) {
        let imgbg = new Image();
        imgbg.onload = function() {
            callback(this.width, this.height);
        }
        imgbg.src = url;
    }

    setPictureSize(pWidth, pHeight) {
        this.setState({ picWidth: pWidth, picHeight: pHeight });
    }

    setThumbnailSize(pWidth, pHeight) {
        this.setState({ thmWidth: pWidth, thmHeight: pHeight });
    }

    render() {
        let isSvgImgBrowser = this.state.onIE || this.state.onUCBrowser;
        let isSpDlgBrowser = this.state.onIE || this.state.onEdge;

        let blurThumbnail = '';
        let blackWhitePic = '';

        if (isSvgImgBrowser) {
            blurThumbnail = '<svg id="svg-image-blur"><filter id="image-blur-effect"><feGaussianBlur stdDeviation="3" color-interpolation-filters="sRGB"/></filter>' + 
                '<image id="svg-image" width="128" height="128" xlink:href="http://img.hb.aicdn.com/4b25a49fb9e3707894b8305865fc3d6f52077d269310-29zp33_fw658" /></svg>';
        }
        if (isSvgImgBrowser || this.state.onSafari) {
            blackWhitePic = 
                '<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 ' + this.state.picWidth + ' ' + this.state.picHeight + 
                '" width="' + this.state.picWidth + '" height="' + this.state.picHeight + '"><defs><filter id="filtersPicture">' + 
                '<feComposite result="inputTo_38" in="SourceGraphic" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />' + 
                '<feColorMatrix id="filter_38" type="saturate" values="0" data-filterid="38" /></filter></defs>' + 
                '<image filter="url(&quot;#filtersPicture&quot;)" x="0" y="0" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" ' + 
                'xlink:href="http://img.hb.aicdn.com/f8730e12f3c93f7155ed81ae8d35c3a782063250152ab-xdttq4_fw658" /></svg>';
        }

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
                                        {/* <img className="thumbnail" src={"http://localhost:9088/images/flower-thumbnail.jpg"} alt="flower" /> */}
                                        { isSvgImgBrowser ? 
                                          (
                                            <div className="thumbnail" dangerouslySetInnerHTML={{ __html: blurThumbnail }} />
                                          ) : (
                                            <img className="thumbnail" src={"http://img.hb.aicdn.com/4b25a49fb9e3707894b8305865fc3d6f52077d269310-29zp33_fw658"} alt="flower" />
                                          )}
                                        <div className="attachment">
                                            {/* <img className="content" src={"http://localhost:9088/images/flower-origin.jpg"} alt="flower" /> */}
                                            <img className="content" src={"http://img.hb.aicdn.com/7a7658c0e324d54590f3a03354767de894baffde3962f-Loj7qc_fw658"} alt="flower" />
                                        </div>
                                    </div>
                                    <div className="image-ex-a2 image overlay">
                                        {/* <img className="thumbnail" src={"http://localhost:9088/images/flower-medium.jpg"} alt="flower" /> */}
                                        <img className="thumbnail" src={"http://img.hb.aicdn.com/f8730e12f3c93f7155ed81ae8d35c3a782063250152ab-xdttq4_fw658"} alt="flower" />
                                        <div className="attachment">
                                            <div className="content small-content">
                                                The essential parts of a flower can be considered in two parts: the vegetative part, consisting of petals and associated structures in the perianth, and the reproductive or sexual parts. A stereotypical flower consists of four kinds of structures attached to the tip of a short stalk. Each of these kinds of parts is arranged in a whorl on the receptacle.
                                            </div>
                                        </div>
                                    </div>
                                    { (isSvgImgBrowser || this.state.onSafari) ? 
                                      (
                                        <div className="image-ex-a3 image disabled" dangerouslySetInnerHTML={{ __html: blackWhitePic }} />
                                      ) : (
                                        <div className="image-ex-a3 image disabled">
                                            <img className="thumbnail" src={"http://img.hb.aicdn.com/f8730e12f3c93f7155ed81ae8d35c3a782063250152ab-xdttq4_fw658"} alt="flower" />
                                        </div>
                                      )}
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
                                        <div className="item selectable selected anim-trans-backcolor">
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
                                        <div className="item selectable selected anim-trans-backcolor">
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
                                    <div className="progress-ex-a1 tiny-section progress circle">
                                        <div className="bar blue" data-progress="3.0"></div>
                                    </div>
                                    <div className="progress-ex-a2 tiny-section progress circle">
                                        <div className="bar blue" data-progress="5.2"></div>
                                    </div>
                                    <div className="progress-ex-a3 tiny-section progress circle">
                                        <div className="bar blue" data-progress="10.0"></div>
                                    </div>
                                    <div className="progress-ex-a4 tiny-section progress circle">
                                        <div className="bar blue" data-progress="25.0"></div>
                                    </div>
                                    <div className="progress-ex-a5 tiny-section progress circle">
                                        <div className="bar blue" data-progress="50.8"></div>
                                    </div>
                                    <div className="progress-ex-a6 tiny-section progress circle">
                                        <div className="bar blue" data-progress="62.9"></div>
                                    </div>
                                    <div className="progress-ex-a7 tiny-section progress circle">
                                        <div className="bar blue" data-progress="97.1"></div>
                                    </div>

                                    <div className="progress-ex-b1 tiny-section progress straight">
                                        <div className="bar blue" data-progress="0" style={{"width" : "0%"}}></div>
                                    </div>
                                    <div className="progress-ex-b2 tiny-section progress straight">
                                        <div className="bar blue" data-progress="5.2" style={{"width" : "5.2%"}}></div>
                                    </div>
                                    <div className="progress-ex-c1 tiny-section progress straight">
                                        <div className="bar blue" data-progress="65.8" style={{"width" : "65.8%"}}></div>
                                    </div>
                                    <div className="progress-ex-c2 tiny-section progress straight">
                                        <div className="bar blue" data-progress="100" style={{"width" : "100%"}}></div>
                                    </div>

                                    <div className="progress-ex-d1 tiny-section progress circle">
                                        <div className="bar red" data-progress="25.0"></div>
                                    </div>
                                    <div className="progress-ex-d2 tiny-section progress circle">
                                        <div className="bar orange" data-progress="25.0"></div>
                                    </div>
                                    <div className="progress-ex-d3 tiny-section progress circle">
                                        <div className="bar green" data-progress="25.0"></div>
                                    </div>
                                    <div className="progress-ex-d4 tiny-section progress circle">
                                        <div className="bar blue" data-progress="25.0"></div>
                                    </div>
                                    <div className="progress-ex-d5 tiny-section progress circle">
                                        <div className="bar violet" data-progress="25.0"></div>
                                    </div>
                                    <div className="progress-ex-d6 tiny-section progress circle">
                                        <div className="bar pink" data-progress="25.0"></div>
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
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-dot-circle-o checker" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
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
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-dot-circle-o checker" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle-o checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
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
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid default">
                                                    <div className="button unchecked anim-trans-backcolor">
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
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Jacob
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker" aria-hidden="true"></i>
                                                        Joshua
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Matthew
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker" aria-hidden="true"></i>
                                                        Christopher
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button checked anim-trans-backcolor">
                                                        <i className="fa fa-check-circle checker" aria-hidden="true"></i>
                                                        Alexander
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ryan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Nicholas
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Caleb
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Francisco
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
                                                        <i className="fa fa-circle checker" aria-hidden="true"></i>
                                                        Ethan
                                                    </div>
                                                </div>
                                                <div className="button-grid disabled">
                                                    <div className="button unchecked anim-trans-backcolor">
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
                                    {/* ******************** Button for open dialog <start> ******************** */}
                                    <div unselectable="on" className="stdialog-ex-a anim-trans-backcolor btn primary clickable" id="open-standard-dialog-button-i">
                                        <div className="regular-text">
                                            Open standard dialog<br/>(info & OK)
                                        </div>
                                    </div>
                                    <div unselectable="on" className="stdialog-ex-b anim-trans-backcolor btn primary clickable" id="open-standard-dialog-button-c">
                                        <div className="regular-text">
                                            Open standard dialog<br/>(conf & YesNo)
                                        </div>
                                    </div>
                                    <div unselectable="on" className="stdialog-ex-c anim-trans-backcolor btn warning clickable" id="open-standard-dialog-button-w">
                                        <div className="regular-text">
                                            Open standard dialog<br/>(warning & YesNoCancel)
                                        </div>
                                    </div>
                                    <div unselectable="on" className="stdialog-ex-d anim-trans-backcolor btn alarm clickable" id="open-standard-dialog-button-e">
                                        <div className="regular-text">
                                            Open standard dialog<br/>(error & AbortRetryIgnore)
                                        </div>
                                    </div>
                                    {/* ******************** Button for open dialog <end> ******************** */}

                                    {/* ******************** component [standard dialog] <start> ******************** */}
                                    <div className="dialog-overlay dialog-hidden" id="standard-dialog-overlay"></div>
                                    {/* ******************** E.X.1 component [standard dialog - information] <start> ******************** */}
                                    { isSpDlgBrowser ? 
                                      (
                                        <div className="dialog information dialog-fade up" id="standard-dialog-i">
                                            <div className="title regular-content">
                                                Title of information dialog
                                                <span className="fa-stack close-button" id="close-button-i">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-i-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-i-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-info-circle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons ok">
                                                <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                    <div className="regular-text">
                                                        OK
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      ) : (
                                        <div className="dialog information dialog-hidden dialog-fade up" id="standard-dialog-i">
                                            <div className="title regular-content">
                                                Title of information dialog
                                                <span className="fa-stack close-button" id="close-button-i">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-i-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-i-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-info-circle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons ok">
                                                <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                    <div className="regular-text">
                                                        OK
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      )}
                                    {/* ******************** E.X.1 component [standard dialog - information] <end> ******************** */}
                                    {/* ******************** E.X.2 component [standard dialog - confirmation] <start> ******************** */}
                                    { isSpDlgBrowser ? 
                                      (
                                        <div className="dialog confirmation dialog-fade up" id="standard-dialog-c">
                                            <div className="title regular-content">
                                                Title of confirmation dialog
                                                <span className="fa-stack close-button" id="close-button-c">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-c-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-c-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-question-circle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons yes-no">
                                                <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                    <div className="regular-text">
                                                        Yes
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                    <div className="regular-text">
                                                        No
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      ) : (
                                        <div className="dialog confirmation dialog-hidden dialog-fade up" id="standard-dialog-c">
                                            <div className="title regular-content">
                                                Title of confirmation dialog
                                                <span className="fa-stack close-button" id="close-button-c">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-c-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-c-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-question-circle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons yes-no">
                                                <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                    <div className="regular-text">
                                                        Yes
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                    <div className="regular-text">
                                                        No
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      )}
                                    {/* ******************** E.X.2 component [standard dialog - confirmation] <end> ******************** */}
                                    {/* ******************** E.X.3 component [standard dialog - warning] <start> ******************** */}
                                    { isSpDlgBrowser ? 
                                      (
                                        <div className="dialog warning dialog-fade up" id="standard-dialog-w">
                                            <div className="title regular-content">
                                                Title of warning dialog
                                                <span className="fa-stack close-button" id="close-button-w">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-w-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-w-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-exclamation-triangle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons yes-no-cancel">
                                                <div unselectable="on" className="anim-trans-backcolor btn warning clickable">
                                                    <div className="regular-text">
                                                        Yes
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn warning clickable">
                                                    <div className="regular-text">
                                                        No
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn warning clickable">
                                                    <div className="regular-text">
                                                        Cancel
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      ) : (
                                        <div className="dialog warning dialog-hidden dialog-fade up" id="standard-dialog-w">
                                            <div className="title regular-content">
                                                Title of warning dialog
                                                <span className="fa-stack close-button" id="close-button-w">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-w-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-w-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-exclamation-triangle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons yes-no-cancel">
                                                <div unselectable="on" className="anim-trans-backcolor btn warning clickable">
                                                    <div className="regular-text">
                                                        Yes
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn warning clickable">
                                                    <div className="regular-text">
                                                        No
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn warning clickable">
                                                    <div className="regular-text">
                                                        Cancel
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      )}
                                    {/* ******************** E.X.3 component [standard dialog - warning] <end> ******************** */}
                                    {/* ******************** E.X.4 component [standard dialog - error] <start> ******************** */}
                                    { isSpDlgBrowser ? 
                                      (
                                        <div className="dialog error dialog-fade up" id="standard-dialog-e">
                                            <div className="title regular-content">
                                                Title of error dialog
                                                <span className="fa-stack close-button" id="close-button-e">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-e-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-e-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-times-circle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons abort-retry-ignore">
                                                <div unselectable="on" className="anim-trans-backcolor btn alarm clickable">
                                                    <div className="regular-text">
                                                        Abort
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn alarm clickable">
                                                    <div className="regular-text">
                                                        Retry
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn alarm clickable">
                                                    <div className="regular-text">
                                                        Ignore
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      ) : (
                                        <div className="dialog error dialog-hidden dialog-fade up" id="standard-dialog-e">
                                            <div className="title regular-content">
                                                Title of error dialog
                                                <span className="fa-stack close-button" id="close-button-e">
                                                    <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-e-l"></i>
                                                    <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-e-r"></i>
                                                </span>
                                            </div>
                                            <div className="images">
                                                <i className="fa fa-times-circle icon" aria-hidden="true"></i>
                                            </div>
                                            <div className="content regular-content">
                                                <p className="text">Content of dialog.<br/>This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.This is a text for text of dialog to check display.</p>
                                            </div>
                                            <div className="buttons abort-retry-ignore">
                                                <div unselectable="on" className="anim-trans-backcolor btn alarm clickable">
                                                    <div className="regular-text">
                                                        Abort
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn alarm clickable">
                                                    <div className="regular-text">
                                                        Retry
                                                    </div>
                                                </div>
                                                <div unselectable="on" className="anim-trans-backcolor btn alarm clickable">
                                                    <div className="regular-text">
                                                        Ignore
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      )}
                                    {/* ******************** E.X.4 component [standard dialog - error] <end> ******************** */}
                                    {/* ******************** component [standard dialog] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-feature-dialog">
                                    <li>Feature dialog:</li>
                                    {/* ******************** Button for open dialog <start> ******************** */}
                                    <div unselectable="on" className="ftdialog-ex-a anim-trans-backcolor btn primary clickable" id="open-feature-dialog-button">
                                        <div className="regular-text">
                                            Open feature dialog<br/>(show static html page)
                                        </div>
                                    </div>
                                    {/* ******************** Button for open dialog <end> ******************** */}

                                    {/* ******************** component [feature dialog] <start> ******************** */}
                                    {/* ******************** E.X.1 component [feature dialog] <start> ******************** */}
                                    <div className="dialog feature dialog-hidden dialog-fade out" id="feature-dialog">
                                        <div className="title regular-content">
                                            Title of feature dialog
                                            <span className="fa-stack close-button" id="close-button-f">
                                                <i className="fa fa-angle-right fa-stack-1x close-button-left" aria-hidden="true" id="close-button-f-l"></i>
                                                <i className="fa fa-angle-left fa-stack-1x close-button-right" aria-hidden="true" id="close-button-f-r"></i>
                                            </span>
                                        </div>
                                        <div className="sub-page">
                                            <iframe id="sub-page-frame" src="http://localhost:9088/pages/feature-example.html" scrolling="auto" frameborder="0"></iframe>
                                        </div>
                                        <div className="buttons ok">
                                            <div unselectable="on" className="anim-trans-backcolor btn primary clickable">
                                                <div className="regular-text">
                                                    OK
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ******************** E.X.1 component [feature dialog] <end> ******************** */}
                                    {/* ******************** component [feature dialog] <end> ******************** */}
                                </div>
                                <div className="title-level-05 regular-content-italic title-components-toaster">
                                    <li>Toaster:</li>
                                    {/* ******************** Button for show a Toaster <start> ******************** */}
                                    <div unselectable="on" className="toaster-ex-a anim-trans-backcolor btn primary clickable" id="show-toaster-on-bottom-right">
                                        <div className="regular-text">
                                            Show toaster<br/>(one by one)
                                        </div>
                                    </div>
                                    {/* ******************** Button for show a Toaster <end> ******************** */}

                                    {/* ******************** component [toaster] <start> ******************** */}
                                    <div id="toaster-bar-bottom-right" className="dialog-hidden">Some text some message..</div>
                                    {/* ******************** component [toaster] <end> ******************** */}
                                </div>
                            </div>
                            <div className="title-level-04 regular-content title-picker-components">
                                6. Picker components:
                                <div className="title-level-05 regular-content-italic title-components-date-picker">
                                    <li>Date picker:</li>
                                    <div className="date-picker-ex-a regular-content">
                                        <div ref="picker" className="combo-box focus">
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
                                        <div className="calendar small-content">
                                            <div className="month">
                                                <ul>
                                                    {/* <li className="prev">&#10094;</li>
                                                    <li className="next">&#10095;</li> */}
                                                    <li className="prev">
                                                        <i className="fa fa-angle-left fa-stack-1x" aria-hidden="true"></i>
                                                    </li>
                                                    <li className="next">
                                                        <i className="fa fa-angle-right fa-stack-1x" aria-hidden="true"></i>
                                                    </li>
                                                    <li>
                                                        August<br/>
                                                        {/* <span style={{"font-size":"18px"}}>2017</span> */}
                                                        <span>2017</span>
                                                    </li>
                                                </ul>
                                            </div>
    
                                            <ul className="weekdays">
                                                <li>Mo</li>
                                                <li>Tu</li>
                                                <li>We</li>
                                                <li>Th</li>
                                                <li>Fr</li>
                                                <li>Sa</li>
                                                <li>Su</li>
                                            </ul>
    
                                            <ul className="days">
                                                <li>
                                                    
                                                </li>
                                                <li>
                                                    <span>1</span>
                                                </li>
                                                <li>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <span>3</span>
                                                </li>
                                                <li>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <span>5</span>
                                                </li>
                                                <li>
                                                    <span>6</span>
                                                </li>
                                                <li>
                                                    <span>7</span>
                                                </li>
                                                <li>
                                                    <span>8</span>
                                                </li>
                                                <li>
                                                    <span>9</span>
                                                </li>
                                                <li>
                                                    <span>10</span>
                                                </li>
                                                <li>
                                                    <span>11</span>
                                                </li>
                                                <li>
                                                    <span>12</span>
                                                </li>
                                                <li>
                                                    <span>13</span>
                                                </li>
                                                <li>
                                                    <span>14</span>
                                                </li>
                                                <li>
                                                    <span>15</span>
                                                </li>
                                                <li>
                                                    <span>16</span>
                                                </li>
                                                <li>
                                                    <span>17</span>
                                                </li>
                                                <li>
                                                    <span>18</span>
                                                </li>
                                                <li>
                                                    <span>19</span>
                                                </li>
                                                <li>
                                                    <span>20</span>
                                                </li>
                                                <li>
                                                    <span>21</span>
                                                </li>
                                                <li>
                                                    <span>22</span>
                                                </li>
                                                <li>
                                                    <span>23</span>
                                                </li>
                                                <li>
                                                    <span>24</span>
                                                </li>
                                                <li>
                                                    <span>25</span>
                                                </li>
                                                <li>
                                                    <span>26</span>
                                                </li>
                                                <li>
                                                    <span>27</span>
                                                </li>
                                                <li>
                                                    <span>28</span>
                                                </li>
                                                <li>
                                                    <span>29</span>
                                                </li>
                                                <li>
                                                    <span>30</span>
                                                </li>
                                                <li>
                                                    <span>31</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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

    componentDidMount() {
        var openButtonInfo = document.querySelector("#open-standard-dialog-button-i");
        var openButtonConf = document.querySelector("#open-standard-dialog-button-c");
        var openButtonWarn = document.querySelector("#open-standard-dialog-button-w");
        var openButtonErr = document.querySelector("#open-standard-dialog-button-e");
        var openButtonFtr = document.querySelector("#open-feature-dialog-button");

        var openButtonToaster = document.querySelector("#show-toaster-on-bottom-right");

        var closeButtonInfo = document.querySelector("#close-button-i");
        var closeButtonConf = document.querySelector("#close-button-c");
        var closeButtonWarn = document.querySelector("#close-button-w");
        var closeButtonErr = document.querySelector("#close-button-e");
        var closeButtonFtr = document.querySelector("#close-button-f");

        openButtonInfo.addEventListener('click', this.showHindStandardDialogListener, false);
        openButtonConf.addEventListener('click', this.showHindStandardDialogListener, false);
        openButtonWarn.addEventListener('click', this.showHindStandardDialogListener, false);
        openButtonErr.addEventListener('click', this.showHindStandardDialogListener, false);
        openButtonFtr.addEventListener('click', this.showHindStandardDialogListener, false);

        openButtonToaster.addEventListener('click', this.ejectToasterBar, false);
        
        closeButtonInfo.addEventListener('click', this.showHindStandardDialogListener, false);
        closeButtonConf.addEventListener('click', this.showHindStandardDialogListener, false);
        closeButtonWarn.addEventListener('click', this.showHindStandardDialogListener, false);
        closeButtonErr.addEventListener('click', this.showHindStandardDialogListener, false);
        closeButtonFtr.addEventListener('click', this.showHindStandardDialogListener, false);

        // ===================== common: dialog popup and combbox drop scroll control =====================
        (function(w) {
            var cntl = { scrollX: 0, scrollY: 0 };
            var dialogOverlay = document.querySelector("#standard-dialog-overlay");
        
            document.addEventListener('scroll', function() {
                if (dialogOverlay.classList.contains("dialog-hidden")) {
                    cntl.scrollX = w.scrollX;
                    cntl.scrollY = w.scrollY;
                } else {
                    w.scrollTo(cntl.scrollX, cntl.scrollY);
                }
            });
        })(window);
        // ===================== common: dialog popup and combbox drop scroll control =====================
    }
    
    showHindStandardDialogListener(event) {
        var dialogOverlay = document.querySelector("#standard-dialog-overlay");

        var openButtonInfo = document.querySelector("#open-standard-dialog-button-i");
        var openButtonConf = document.querySelector("#open-standard-dialog-button-c");
        var openButtonWarn = document.querySelector("#open-standard-dialog-button-w");
        var openButtonErr = document.querySelector("#open-standard-dialog-button-e");
        var openButtonFtr = document.querySelector("#open-feature-dialog-button");

        var closeButtonInfo = document.querySelector("#close-button-i");
        var closeButtonInfoL = document.querySelector("#close-button-i-l");
        var closeButtonInfoR = document.querySelector("#close-button-i-r");
        var closeButtonConf = document.querySelector("#close-button-c");
        var closeButtonConfL = document.querySelector("#close-button-c-l");
        var closeButtonConfR = document.querySelector("#close-button-c-r");
        var closeButtonWarn = document.querySelector("#close-button-w");
        var closeButtonWarnL = document.querySelector("#close-button-w-l");
        var closeButtonWarnR = document.querySelector("#close-button-w-r");
        var closeButtonErr = document.querySelector("#close-button-e");
        var closeButtonErrL = document.querySelector("#close-button-e-l");
        var closeButtonErrR = document.querySelector("#close-button-e-r");
        var closeButtonFtr = document.querySelector("#close-button-f");
        var closeButtonFtrL = document.querySelector("#close-button-f-l");
        var closeButtonFtrR = document.querySelector("#close-button-f-r");

        var dialogElement;
        var toggleFadeInOut = false;
        if (event.target == openButtonInfo) {
            dialogElement = document.querySelector("#standard-dialog-i");
        } else if (event.target ==  openButtonConf) {
            dialogElement = document.querySelector("#standard-dialog-c");
        } else if (event.target ==  openButtonWarn) {
            dialogElement = document.querySelector("#standard-dialog-w");
        } else if (event.target ==  openButtonErr) {
            dialogElement = document.querySelector("#standard-dialog-e");
        } else if (event.target ==  openButtonFtr) {
            dialogElement = document.querySelector("#feature-dialog");
            toggleFadeInOut = true;
        } else if (event.target == closeButtonInfo || event.target == closeButtonInfoL || event.target == closeButtonInfoR) {
            dialogElement = document.querySelector("#standard-dialog-i");
        } else if (event.target == closeButtonConf || event.target == closeButtonConfL || event.target == closeButtonConfR) {
            dialogElement = document.querySelector("#standard-dialog-c");
        } else if (event.target == closeButtonWarn || event.target == closeButtonWarnL || event.target == closeButtonWarnR) {
            dialogElement = document.querySelector("#standard-dialog-w");
        } else if (event.target == closeButtonErr || event.target == closeButtonErrL || event.target == closeButtonErrR) {
            dialogElement = document.querySelector("#standard-dialog-e");
        } else if (event.target == closeButtonFtr || event.target == closeButtonFtrL || event.target == closeButtonFtrR) {
            dialogElement = document.querySelector("#feature-dialog");
            toggleFadeInOut = true;
        }

        dialogOverlay.classList.toggle("dialog-hidden");

        if (this.state.onSafari) {
            dialogElement.classList.toggle("dialog-hidden");
        } else {
            dialogElement.classList.remove("dialog-hidden");
        }

        if (toggleFadeInOut) {
            dialogElement.classList.toggle("in");
            dialogElement.classList.toggle("out");
            if (dialogOverlay.classList.contains("dialog-hidden")) {
                dialogElement.classList.add("dialog-hidden");
            }
        } else {
            dialogElement.classList.toggle("down");
            dialogElement.classList.toggle("up");
        }
    }

    ejectToasterBar() {
        // Get the toaster bar
        var bar = document.querySelector("#toaster-bar-bottom-right")
    
        // Add the "show" class to DIV
        bar.className = "toaster eject";
    
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ bar.className = "toaster shrink"; }, 3000);
    }

    /* ******************** Functions for build calendar <start> ******************** */
    /* ******************** Functions for build calendar <end> ******************** */
}
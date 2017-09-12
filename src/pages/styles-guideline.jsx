import React from 'react';

export default class StylesGuideline extends React.Component {
    render() {
        return (
            <div>
                {/* <div className="title-base title-level-01 title-guideline">
                    Style guideline
                </div>
                <div className="title-base title-level-02 title-base-colors">
                    Base colors:
                </div>
                <div className="title-base title-level-03 title-polychrome">
                    Polychrome:
                </div> */}
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
                                Pin-base
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
                </div>
            </div>
        );
    }
}
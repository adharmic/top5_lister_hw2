import React from "react";

export default class Workspace extends React.Component {
    render() {
        var item1 = "";
        var item2 = "";
        var item3 = "";
        var item4 = "";
        var item5 = "";
        if (this.props.currentList) {
            const {currentList} = this.props;
            item1 = currentList.items[0];
            item2 = currentList.items[1];
            item3 = currentList.items[2];
            item4 = currentList.items[3];
            item5 = currentList.items[4];
        }
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        <div className="top5-item">{item1}</div>
                        <div className="top5-item">{item2}</div>
                        <div className="top5-item">{item3}</div>
                        <div className="top5-item">{item4}</div>
                        <div className="top5-item">{item5}</div>
                    </div>
                </div>
            </div>
        )
    }
}
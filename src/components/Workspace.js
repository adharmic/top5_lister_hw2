import React from "react";
import ListItem from "./ListItem"

export default class Workspace extends React.Component {
    render() {
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
                        <ListItem list={this.props.currentList} index={0} editListItemCallback={this.props.editListItemCallback}/>
                        <ListItem list={this.props.currentList} index={1} editListItemCallback={this.props.editListItemCallback}/>
                        <ListItem list={this.props.currentList} index={2} editListItemCallback={this.props.editListItemCallback}/>
                        <ListItem list={this.props.currentList} index={3} editListItemCallback={this.props.editListItemCallback}/>
                        <ListItem list={this.props.currentList} index={4} editListItemCallback={this.props.editListItemCallback}/>
                    </div>
                </div>
            </div>
        )
    }
}
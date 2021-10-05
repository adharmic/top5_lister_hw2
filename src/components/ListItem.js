import React from "react"

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            editActive: false,
        }
    }

    handleClick = (event) => {
        this.setState({text: this.props.list.items[this.props.index]});
        if(event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }

    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }

    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }

    handleBlur = () => {
        let textValue = this.state.text;
        console.log("ListCard handleBlur: " + textValue);
        // this.props.renameListCallback(key, textValue);
        this.handleToggleEdit();
    }

    
    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }

    render() {
        const {list, index} = this.props;
        var name = "";
        if (list) {
            name = list.items[index];
        }
        if (this.state.editActive) {
            return (
                <input
                    autoFocus="true"
                    id={"item-" + name}
                    className='top5-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={name}
                />)
        }
        else {
            return (
                <div onClick={this.handleClick} className="top5-item">
                    {name}
                </div>
            )
        }
    }
}
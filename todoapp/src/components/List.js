import { Component } from "react";

class List extends Component{
    static defaultProps={
        text:['a','b','c','d','d']
    }
    constructor(props){
        super(props);
        this.state={
           title:"hello",
           content:""
        };
        this.addContent=this.addContent.bind(this)
    }
    
    addContent(){
        this.setState({
            title:"hello world",
            content:this.list()
        })
    }

    deleteRow(index) {
        this.setState({
            content: this.state.content.filter(
                (_, i) => { return i !== index }
            )
        })
    }


    list() {
        return (
            <ul>
                {
                    this.props.text.map((li, index) =>
                        <li key={index}>
                            {li}
                            <button type="button" onClick={this.deleteRow.bind(this,index)}>delete</button>
                        </li>
                    )}
            </ul>
        )
    }

    render(){
        return(
            <div>
                <h2>my {this.state.title}</h2>
                <p>it is a {this.state.content}
                </p>
                <button type="button" onClick={this.addContent}>addcontent</button>
                
            </div>
        )
    }
}

export default List
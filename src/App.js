import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
var marked=require("marked");


class App extends React.Component {
  constructor(){
    super();
    this.editOutput=this.editOutput.bind(this);
    this.state={
      input:""
    }
  }

  editOutput(){
    const input=this.markdown.value;
    this.setState({input});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <textarea ref={(input)=>this.markdown=input} rows="22" cols="70" onChange={this.editOutput} placeholder="Enter here"></textarea>
        </div>
        <div className="col-md-6">
          <span dangerouslySetInnerHTML={{__html:marked(this.state.input,{sanitize:true})}}></span>
        </div>
      </div>
    );
  }
}

export default App;

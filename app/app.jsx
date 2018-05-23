let React = require('react');
let ReactDOM = require('react-dom');
let createClass = require('create-react-class');

var Note = createClass({
    render(){
        return(
            <div>
                <h1> {this.props.title} </h1>
                <p>  {this.props.quantity} </p>
            </div>
        );
    }
});

ReactDOM.render(
    <Note title='Nodemon' quantity='10' />,
    document.getElementById('root')
);

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf, addSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
      name: "",
      age: "",
      height: ""
  }
  componentDidMount() {
    this.fetchSmurf();
  }

    fetchSmurf = () => {
      this.props.getSmurf();
    };

    handleChange = e => {
      //console.log(this.props); 
      e.preventDefault();
      this.setState({[e.target.name]: e.target.value});
    }
    
    handleAdd = e => {
      e.preventDefault();
      console.log("post state: ", this.state);
      this.props.addSmurf(this.state);
      this.setState({ name: '', age: '', height: ''})
      window.location.reload();
    }

  render() {
    return (
      <div className="App" >
        {this.props.fetchingSmurfs && (<p>loading</p>)}

        {console.log("props", this.props)}
        {console.log("state", this.state)}
        <h1>smurfs</h1>
        {this.props.smurfs.map( e  => (
          e.value.map( e => (
          <div className="item"> 
            {/*console.log("value: ", e.name)*/}
            <p>name: {e.name}</p>
            <p>age: {e.age}</p>
            <p>height: {e.height}</p>
          </div>
          ))
        
      ))} 

          
      <form onSubmit={this.handleAdd}>
          <input 
          type="text"
          value={this.props.name}
          onChange={this.handleChange}
          placeholder="name"
          name="name"
        />
        <input 
          type="text"
          value={this.props.age}
          onChange={this.handleChange}
          placeholder="age"
          name="age"
        />
        <input 
          type="text"
          value={this.props.height}
          onChange={this.handleChange}
          placeholder="height"
          name="height"
        />
        <button type="submit">add</button>
      </form>

      </div>
    );
  }
}


const mapStateToProps = state => ({
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs,
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurf, addSmurf }
)(App);


//export default App;

/*
<h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
*/
       
import React, { Component } from "react";
import { list, updateInput } from "./redux/action";
import { connect } from "react-redux";

export class Contanier extends Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <input
          type="text"
          onChange={event => this.props.updateInput("obj", event.target.value)}
        />
        {/* {console.log(this.props.input, "ooooo")} */}
        <button
          type="submit"
          onClick={() => {
            this.props.list(this.props.obj);
          }}
        >
          Submit
        </button>

        {this.props.input.map((v, i) => (
          <p key={i}>{v}</p>
        ))}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    obj: state.obj,
    input: state.input
  };
};

const mapDispatchtoProps = dispatch => ({
  list: v => dispatch(list(v)),
  updateInput: (k, v) => dispatch(updateInput(k, v))
});
export default connect(mapStatetoProps, mapDispatchtoProps)(Contanier);

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import uuid from "uuid";

import { addComment } from "../../reducers/comments/actions";

const Container = styled.div`
  padding: 10px;
  display: inline-block;
`;
const Input = styled.input`
  border: 1px solid #bebebe;
  padding: 14px;
  margin: 0;
  outline: 0;
  display: block;
  width: 310px;
`;
const Button = styled.button`
  background-color: rgb(135, 82, 148);
  width: 100%;
  display: inline-block;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-family: Arial;
  font-size: 17px;
  padding: 10px 20px;
  margin: 0px;
  margin-left: 0px;
  text-decoration: none;
  text-shadow: rgb(47, 102, 39) 0px 1px 0px;
  border: 0;
  border-radius: 0px 0px 4px 4px;
  width: 100%;
`;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("[form props]", props);
  }

  handleClick = () => {
    console.log("[Clicked, Add new comment!]");
    this.props.addComment({
      id: uuid.v4(),
      username: document.getElementById("username").value,
      comment: document.getElementById("comment").value
    });

    // Clear values
    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";
  };

  render() {
    return (
      <Container className="react-component container">
        <Input id="username" type="text" placeholder="username" />
        <Input id="comment" type="text" placeholder="comment" />
        <Button onClick={this.handleClick}> Add New Comment</Button>
      </Container>
    );
  }
}

// Map state/dispatch to props
// const mapStateToProps = state => {
//   return {
//     comments: state.comments
//   };
// };
const mapDispatchToProps = dispatch => {
  return {
    addComment: value => dispatch(addComment(value))
  };
};
export default connect(null, mapDispatchToProps)(CommentForm);

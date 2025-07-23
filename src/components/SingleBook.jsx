import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;
    return (
      <Card
        style={{
          width: "18rem",
          border: selected ? "3px solid red" : undefined,
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={this.toggleSelected}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

import React, { PureComponent } from 'react';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.props.onChange({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  }

  render() {
    const { values } = this.props;

    const childrenWithProps = React.Children.map(this.props.children, child => {
      if (child.type === 'input') {
        return React.cloneElement(child, {
          value: values && values[child.props.name],
          onChange: this.handleChange
        });
      }

      return child;
    });

    return <form onSubmit={this.handleSubmit}>{childrenWithProps}</form>;
  }
}

export default Form;

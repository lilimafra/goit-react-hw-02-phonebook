import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { nanoid } from 'nanoid';

import { FormTag, Label, Input, Button } from './Forms.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class Form extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormTag onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormTag>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

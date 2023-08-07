import PropTypes from 'prop-types'; // ES6

import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  margin-top: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
  width: 300px;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  border: 0px;
  height: 20px;
  width: 50px;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);

  &:hover,
  :focus {
    background-color: #eddd55;
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
  }
`;

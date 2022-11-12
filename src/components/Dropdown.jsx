import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../assets/css/Dropdown.css";

function DropdownItemTagsExample() {
  return (
    <DropdownButton id="dropdown-item-button" title="Select Category">
      <Dropdown.Item as="button">Cancer</Dropdown.Item>
      <Dropdown.Item as="button">Cardiac</Dropdown.Item>
      <Dropdown.Item as="button">Heart</Dropdown.Item>
      <Dropdown.Item as="button">Osteoporosis</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownItemTagsExample;
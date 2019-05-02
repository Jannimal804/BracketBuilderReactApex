const DropdownUncontrolledSource = `import React from "react";
import {
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";

function DropdownUncontrolled() {
   return (
      <UncontrolledDropdown>
         <DropdownToggle caret>Dropdown</DropdownToggle>
         <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
         </DropdownMenu>
      </UncontrolledDropdown>
   );
}

export default DropdownUncontrolled;`;

export default DropdownUncontrolledSource;
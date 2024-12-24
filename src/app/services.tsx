"use client";
import {
    Select,
    Option
} from "@material-tailwind/react";

export default function SimpleDropdown (){
    return(
        <div className="mt-5 w-75">
        <Select label="Services" {...{} as any}>
          <Option {...{} as any}>Maintenance</Option>
          <Option {...{} as any}>Fixing</Option>
          <Option {...{} as any}>Support</Option>
        </Select>
      </div>
    );
}
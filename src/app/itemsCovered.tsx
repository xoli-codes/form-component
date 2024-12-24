"use client";
import{
    Typography,
    Checkbox,
} from "@material-tailwind/react";

export default function simpleCheckbox () {
    return (
        <div>
        <Typography variant="h6" color="black" className="mt-2" {...{} as any}>Items Covered</Typography>
        <div className=" flex flex-wrap mt-2">
          <div className="w-9/12">
            <Checkbox label="Policy Request" {...{} as any} />
            <Checkbox label="Warranty" {...{} as any} />
          </div>
        </div>
      </div>
    );
};
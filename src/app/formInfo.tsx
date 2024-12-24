"use client";

import {
    Typography
} from "@material-tailwind/react";

export default function SimpleHeadings(){
    return(
    <div className="text-center">
        <Typography variant="h4" color="blue-gray" {...{} as any}>
        Contact Us Today
       </Typography>
       <Typography color="gray" className="mt-1 font-normal" {...{} as any}>
         Enter your details and one of our team members will reach out to you soon
       </Typography>
    </div>
    );
};
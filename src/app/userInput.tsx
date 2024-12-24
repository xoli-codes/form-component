"use client";

import {
    Textarea
} from "@material-tailwind/react";

export default function SimpleInput(){
    return (
        <div className="w-96 space-y-4 mt-2">
          <Textarea label="Leave a comment here..."{...{} as any}/>
        </div>
    );
}
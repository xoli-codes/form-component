"use client";
import { Button } from "@material-tailwind/react";

export default function  formLibrary(){
  return (
    <div className="Form p-4">
    <h1>HELLO TESTING</h1>
    <Button {...{} as any}>Hello Mr Button</Button>
    </div>
  );
}

// EXPORTING COMPONENTS TO RENDER ON THE PAGE
export { Button } from "@material-tailwind/react";
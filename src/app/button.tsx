"use client";
import {Button} from "@material-tailwind/react";

export default function FormButton (){
    return (
        <div className="space-y-4 mt-4 flex justify-center items-center">
             <Button {...{} as any}>Submit</Button>
        </div>
    )
}
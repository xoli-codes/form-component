"use client";
import {
    Input,
    Typography
} from "@material-tailwind/react";

export default function UserInfo (){
    return (
     <div className="space-y-4 mt-12">
        <div>
        <Input
          size="lg"
          label="First Name"
          {...{} as any}
        />
      </div>
      <div>
        <Input
          size="lg"
          label="Doe"
          {...{} as any}
        />
      </div>
      <div>
        <Input
          size="lg"
          label="name@gmail.com"
          {...{} as any}
        />
      </div>
      <div>
          <Input
            maxLength={16}
            label= "e.g +27 75 342 1009"
            pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
            {...{} as any}
          />
        </div>
        <div>
          <Typography variant="small" color="black" {...{}as any}>Include your country code for international numbers</Typography>
        </div>
    </div>
    );
 
}
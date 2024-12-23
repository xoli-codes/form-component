"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio, 
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
 
export default function SimpleForm() {
  return (
     <Card color="transparent" shadow={false} className="max-w-md-300 mx-auto p-4 rounded-md justify-center items-center mx-4 my-4" {...{} as any}>
      <Typography variant="h4" color="blue-gray" {...{} as any}>
       Contact Us Today
      </Typography>
      <Typography color="gray" className="mt-1 font-normal" {...{} as any}>
        Enter your details and one of our team members will reach out to you soon
      </Typography>
      <form className="space-y-4 mt-12">
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
        <div>
          <div className="flex flex-wrap">
            <Typography variant="h6" color="black" className="mt-8" {...{} as any}>Consultation Type</Typography>
          </div>
          <div className="flex flex-wrap">
            <div className="w-6/12">
              <div className="flex gap-10">
                <Radio name="consultation" label="Remote" {...{} as any}/>
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex gap-10">
                <Radio name="consultation" label="Physical" defaultChecked {...{} as any}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5 w-75">
          <Select label="Services" {...{} as any}>
            <Option {...{} as any}>Maintenance</Option>
            <Option {...{} as any}>Fixing</Option>
            <Option {...{} as any}>Support</Option>
          </Select>
        </div>
        
        <div>
          <Typography variant="h6" color="black" className="mt-6" {...{} as any}>Items Covered</Typography>
          <div className=" flex flex-wrap mt-5">
            <div className="w-4/12">
              <Checkbox label="Policy Request" {...{} as any} />
              <Checkbox label="Warranty" {...{} as any} />
            </div>
          </div>
        </div>
      
        <div className="w-96">
          <Textarea label="Leave a comment here..."{...{} as any}/>
        </div>
      
      <Button {...{} as any}>Submit</Button>
      </form>
    </Card>
  );
}
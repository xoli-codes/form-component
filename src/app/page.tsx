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
  Option
} from "@material-tailwind/react";
 
export default function SimpleForm() {
  return (
     <Card color="transparent" shadow={false} {...{} as any}>
      <Typography variant="h4" color="blue-gray" {...{} as any}>
       Contact Us Today
      </Typography>
      <Typography color="gray" className="mt-1 font-normal" {...{} as any}>
        Enter your details and one of our team members will reach out to you soon
      </Typography>
      <form className="mt-8 mb-2 w-80 lg:w-500 sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3" {...{} as any}>
            First Name
          </Typography>
          <Input
            size="lg"
            placeholder="John"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...{} as any}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3" {...{} as any}>
            Last Name
          </Typography>
          <Input
            size="lg"
            placeholder="Doe"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...{} as any}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3" {...{} as any}>
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@gmail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...{} as any}
          />
          <div>
          <Typography variant="h6" color="blue-gray" className="-mb-3" {...{} as any}>
            Phone Number
          </Typography>
          <Input
            maxLength={16}
            placeholder= "e.g +27 75 342 1009"
            pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
            className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
            {...{} as any}
          />
          <div>
            <Typography variant="small" color="black" {...{}as any}>Include your country code for international numbers</Typography>
          </div>
        </div>
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
        <div>
          <Typography variant="h6" color="black" className="mt-6" {...{} as any}>Subject Matter</Typography>
          <div className="mt-5 w-75">
            <Select label="Services" {...{} as any}>
              <Option {...{} as any}>Maintenance</Option>
              <Option {...{} as any}>Fixing</Option>
              <Option {...{} as any}>Support</Option>
            </Select>
          </div>
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
      <div className="mt-6">
        <Typography variant="h6" color="black" {...{} as any}>General Comment</Typography>
        <div className="w-96">
          <Textarea label="Leave a comment here..."{...{} as any}/>
        </div>
      </div>
      <Button {...{} as any}>Submit</Button>
      </form>
    </Card>
  );
}

//exporting components to render on the page 
export {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio, 
  Textarea,
  Select,
  Option
} from "@material-tailwind/react"
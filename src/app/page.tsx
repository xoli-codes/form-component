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
 
export default function SimpleRegistrationForm() {
  return (
     <Card color="transparent" shadow={false} {...{} as any}>
      <Typography variant="h4" color="blue-gray" {...{} as any}>
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal" {...{} as any}>
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3" {...{} as any}>
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
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
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...{} as any}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3" {...{} as any}>
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...{} as any}
          />
        </div>
        <Checkbox 
           {...{} as any}
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth  {...{} as any}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal"  {...{} as any}>
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
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
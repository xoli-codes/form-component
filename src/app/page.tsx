"use client";
import {
  Card,
  Button,
} from "@material-tailwind/react";

import UserInfo from "./userInfo";
import Consulation from "./consulation";
import Items from "./itemsCovered";
import Services from "./services";
import FormHeadings from "./formInfo";
import Input from "./userInput";
import FormButton from "./button";
 
export default function SimpleForm() {
  return (
     <Card color="transparent" shadow={false} className="max-w-md-300 mx-auto p-4 rounded-md justify-center items-center mx-4 my-4" {...{} as any}>
      <FormHeadings/>
      <form>
      <UserInfo/>
      <Consulation/>  
      <Services/>
      <Items />
      <Input/>
      <FormButton/>  
      </form>
    </Card>
  );
}
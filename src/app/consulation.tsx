"use client";
import {
    Radio,
    Typography
} from "@material-tailwind/react";

export default function SimpleRadio() {
    return(
        <div >
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
        </div>
    );
}
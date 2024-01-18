import React,{ useState, useEffect } from "react";
import { format } from 'date-fns';
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  // Function to update the current time
  const updateCurrentTime = () => {
    const currentTime = new Date().toLocaleString();
    setCurrentDateTime(currentTime);
  };

  // Set up an interval to update the time every second
  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
      <div className="p-2 mt-5 laptop:mt-40 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="p-2 mt-2 text-sm text-bold laptop:mt-10 laptop:p-0">
      <p>&copy; {currentDateTime} Your Portfolio. All rights reserved.</p>
      </h1>
    </>
  );
};

export default Footer;

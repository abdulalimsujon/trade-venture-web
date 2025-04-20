"use client";
import { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 105);
  targetDate.setHours(24);
  targetDate.setMinutes(60);
  targetDate.setSeconds(50);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(timer);
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-[#e4e4e4]">
      <div className="container">
        <div className="lg:pt-[54px] lg:pb-[80px] flex items-center justify-center md:pt-[40px] md:pb-[60px] pt-[30px] pb-10">
          <div className="text-center">
            <h2 className="lg:text-[48px] md:text-[36px] text-[28px] font-bold lg:font-medium text-[#000]">
              Journey Begins In
            </h2>
            <div className="flex items-center lg:gap-x-20 md:gap-x-[60px] gap-x-[20px] md:mt-[40px] mt-[30px]">
              <div className="flex flex-col">
                <p className="lg:text-[60px] md:text-[42px] text-[22px] md:font-medium font-bold text-[#000]">
                  {countdown.days}
                </p>{" "}
                <span className="md:text-[18px] text-base font-normal">
                  Days
                </span>
              </div>

              <div className="flex flex-col">
                <p className="text-[22px] lg:text-[60px] md:text-[42px] md:font-medium font-bold text-[#000]">
                  {countdown.hours}
                </p>{" "}
                <span className="md:text-[18px] text-base font-normal">
                  Hours
                </span>
              </div>

              <div className="flex flex-col">
                <p className="text-[22px] lg:text-[60px] md:text-[42px] md:font-medium font-bold text-[#000]">
                  {countdown.minutes}
                </p>{" "}
                <span className="md:text-[18px] text-base font-normal">
                  Minutes
                </span>
              </div>

              <div className="flex flex-col">
                <p className="text-[22px] lg:text-[60px] md:text-[42px] md:font-medium font-bold text-[#000]">
                  {countdown.seconds}
                </p>{" "}
                <span className="md:text-[18px] text-base font-normal">
                  Seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;

"use client";
import Image from "next/image";
import { useState } from "react";

const DiscussionPostForm = () => {
  const [text, setText] = useState("");

  const handleTextareaAreChange = (event) => {
    const newText = event.target.value;
    const limitedText = newText.slice(0, 100);
    setText(limitedText);
  };
  return (
    <div className="my-10">
      <div className="flex items-start gap-7 ">
        <div>
          <div className="relative w-[50px] h-[50px] rounded-full">
            <Image
              src={"https://i.ibb.co/9qWJdkH/6.jpg"}
              alt="profile image"
              fill
              className="rounded-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-end">
          <textarea
            value={text}
            onChange={handleTextareaAreChange}
            className="outline-none border border-border bg-border rounded-md h-[150px] resize-none min-w-full px-5 py-4 text-base text-main font-normal"
            placeholder="What's in your mind?"
          ></textarea>
          <span className="text-text font-normal text-sm mt-1">{`${text.length}/100`}</span>
          <button className="common-button mt-4 w-max bg-primary hover:bg-secondary duration-300 text-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPostForm;

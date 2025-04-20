"use client";
import TabTitle from "@/components/shared/tabTitle/TabTitle";
import DiscussionPostForm from "../DiscussionPostForm";
import { discussionContentData } from "@/fakeData/startupPageData";
import Image from "next/image";
import { FaRegMessage } from "react-icons/fa6";
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { FaRegFlag, FaFlag } from "react-icons/fa";
import { useState } from "react";

const DiscussionTabContent = () => {
  const [vote, setVote] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleVote = () => {
    setVote((prevIsVote) => !prevIsVote);
  };
  return (
    <div className="mt-5">
      <TabTitle>JOIN THE DISCUSSION</TabTitle>
      {/* discussion post form */}
      <div>
        <DiscussionPostForm />
      </div>
      {/* discussion all post */}
      <div className="mt-10 ">
        {discussionContentData.map((item) => (
          <div key={item.id} className="flex items-start gap-7">
            <div className="pt-2">
              <div className="relative w-[50px] h-[50px] rounded-full">
                <Image
                  src={item.image}
                  alt="profile image"
                  fill
                  className="rounded-full"
                />
              </div>{" "}
            </div>
            <div className="p-2 bg-white hover:bg-green-100 rounded-md duration-300 mb-5">
              <h2 className="text-secondary text-xl font-bold">{item.name}</h2>
              <span className="text-sm text-text font-normal">{item.time}</span>

              <p className="text-text mt-4 mb-6 text-base font-normal">
                {item.text}{" "}
                <span className="text-primary text-[12px] cursor-pointer">
                  ...Read more
                </span>
              </p>
              <div className="flex items-center justify-between flex-wrap mt-3">
                <div className="relative">
                  <FaRegMessage size={20} className="cursor-pointer" />
                  <span className=" w-5 h-5 rounded-full text-center flex items-center justify-center bg-primary text-white absolute top-[-10px] right-[-14px] text-[12px]">
                    2
                  </span>
                </div>
                <div className="relative">
                  {vote ? (
                    <BiUpvote
                      size={20}
                      className="cursor-pointer text-secondary"
                      onClick={handleVote}
                    />
                  ) : (
                    <BiSolidUpvote
                      size={20}
                      className="cursor-pointer text-secondary"
                      onClick={handleVote}
                    />
                  )}

                  <span className=" w-5 h-5 rounded-full text-center flex items-center justify-center bg-primary text-white absolute top-[-10px] right-[-14px] text-[12px]">
                    10
                  </span>
                </div>
                <div className="relative">
                  {flag ? (
                    <FaFlag
                      size={20}
                      className="cursor-pointer text-secondary"
                      onClick={() => setFlag(!flag)}
                    />
                  ) : (
                    <FaRegFlag
                      size={20}
                      className="cursor-pointer text-secondary"
                      onClick={() => setFlag(!flag)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionTabContent;

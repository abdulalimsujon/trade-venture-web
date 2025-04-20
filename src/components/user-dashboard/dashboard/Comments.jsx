"use client";
import CardContainer from "@/components/common/CardContainer";
import TitleBadge from "@/components/common/TitleBadge";
import Image from "next/image";
import React, { useState } from "react";
import { PiLinkSimpleHorizontalLight } from "react-icons/pi";
import { TbMessage, TbHeart } from "react-icons/tb";

const CommentCard = ({
  userName,
  date,
  comment,
  pitchTitle,
  userHandle,
  imageUrl,
}) => {
  // State management within each CommentCard
  const [isCommentInputOpen, setIsCommentInputOpen] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  return (
    <div className="bg-white pb-3 border-b-2 border-gray-100 mb-4">
      <div className="flex mb-4">
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="relative w-full">
          <section className="flex">
            <div className="ml-4 flex-1">
              <div className="">
                <span className="font-bold text-lg">{userName}</span>{" "}
                {userHandle}
              </div>
              <div>
                <span>On</span>{" "}
                <span className="font-bold text-lg">{pitchTitle}</span>
              </div>
            </div>

            <div className="text-sm text-gray-500 absolute right-0">{date}</div>
          </section>
          <section className="ml-4">
            <p className="text-gray-700 py-2.5 mb-2">{comment}</p>
            {isCommentInputOpen && (
              <input className="mb-3 w-full rounded-md outline-none py-1 border" />
            )}

            <div className="flex justify-between text-gray-500">
              <TbMessage
                size={24}
                className="cursor-pointer"
                onClick={() => setIsCommentInputOpen(!isCommentInputOpen)}
              />
              <TbHeart
                size={24}
                className={`cursor-pointer ${
                  isHeartClicked ? "text-red-500" : ""
                }`}
                onClick={() => setIsHeartClicked(!isHeartClicked)}
              />
              <PiLinkSimpleHorizontalLight
                size={24}
                className="cursor-pointer"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Comments = () => {
  return (
    <CardContainer>
      <TitleBadge bg_color="bg-[#FFD88D]" text="Comments" />
      <CommentCard
        userName="Ethel"
        userHandle="@ethel"
        pitchTitle="Pitch idea-01"
        date="1h"
        comment="Great work on this project!"
        imageUrl="/dashboard/commenter-1.png"
      />
      <CommentCard
        userName="Ethel"
        userHandle="@ethel"
        pitchTitle="Pitch idea-02"
        date="1h"
        comment="This is another insightful comment!"
        imageUrl="/dashboard/commenter-2.png"
      />
      <button className="border-2 text-base font-bold rounded-xl border-[#EFEFEF] w-full text-center py-3">
        View all
      </button>
    </CardContainer>
  );
};

export default Comments;

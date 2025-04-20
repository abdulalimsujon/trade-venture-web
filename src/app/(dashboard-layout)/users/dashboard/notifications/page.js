'use client'
import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { RiSettings3Line } from 'react-icons/ri'
import Image from 'next/image'
import profileImage from "@/assets/events/person2.png"
import { LuMessageSquare } from "react-icons/lu";
export default function NotificationPage() {
  const topics = [
    { id: 1, text: 'Comments' },
    { id: 2, text: 'Likes' },
    { id: 3, text: 'Mentions' },
    { id: 4, text: 'Investment' },
    { id: 5, text: 'Unread' },
  ];
  const comments = [
    { id: 1, text: 'Comments1' },
    { id: 2, text: 'Comments2' },
    { id: 3, text: 'Comments3' },
  ]
  const users = [
    { id: 1, text: 'Everyone' },
    { id: 2, text: 'Investor' },
    { id: 2, text: 'Co-founder' }
  ]
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [checkedTopics, setCheckedTopics] = useState({});

  const handleReplyClick = (id) => {
    // setShowReplyInput(!showReplyInput);
    setShowReplyInput((prevId) => (prevId === id ? null : id));
  };
  const handleCheckboxChange = (id) => {
    setCheckedTopics((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleSelectAll = () => {
    const allSelected = Object.values(checkedTopics).every(Boolean);
    const newCheckedTopics = {};
    topics.forEach((topic) => {
      newCheckedTopics[topic.id] = !allSelected;
    });
    setCheckedTopics(newCheckedTopics);
  };
  const handleUnselectAll = () => {
    const newCheckedTopics = {};
    topics.forEach((topic) => {
      newCheckedTopics[topic.id] = false;
    });
    setCheckedTopics(newCheckedTopics);
  };
  return (
    <div className='container'>
      <h1 className='text-[#272B30] font-semibold text-4xl'>Notification</h1>
      <div className='flex justify-between gap-2'>
        <div className=' w-[672px] bg-white p-4'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'><div className='w-4 h-8 bg-[#FFBC99]'></div>New</div>
            <div>
              <select
                name=""
                id=""
                className="w-full px-4 py-2 border border-[#e9e9e9] outline-none mt-2"
              >
                <option value="">Recent</option>
                <option value=""><span><TiTick />
                </span><span>Mark all as read</span></option>
                <option value="">
                  <span><RiSettings3Line /></span>
                  <span>Go to setting</span>
                </option>

              </select>


            </div>
          </div>

          {comments.map((comment) => (
            <div className='mt-10' key={comment.id}>
              <div className="flex justify-between mt-5 border-b">
                <div className="flex gap-2 py-2 ">
                  <div>
                    <div className="bg-[#FFBC99] rounded-full  inline-block relative">
                      <Image src={profileImage} className="rounded-full h-12 w-12" alt="Profile Image" />
                      <div className="absolute bottom-0 right-0 bg-[#2A85FF] rounded-full p-1">
                        <LuMessageSquare className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p><span className="font-bold text-base">Domenica</span><span className="text-[#9A9FA5]">@domenica</span></p>
                    <p><span className="text-[#9A9FA5]">Comment on </span><span className="font-bold">Pitch no-03</span></p>
                    <p>“Great work, I just want to invest in here”</p>
                    <div className='flex gap-6'>
                      <span className='font-bold'>Like</span>
                      <span className='font-bold cursor-pointer' onClick={() => handleReplyClick(comment.id)}>Reply</span>
                    </div>
                    {showReplyInput === comment.id && (
                      <div className='flex gap-2 mt-2  justify-between'>
                        <div>
                          <div className="bg-[#FFBC99] rounded-full  inline-block">
                            <Image src={profileImage} className="rounded-full h-12 w-12" alt="Profile Image" />
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className='flex gap-2 items-center'>
                              <div><span>@domenica</span></div>
                              <div>
                                <input type="text" className="pl-2 pr-2 border rounded-xl bg-[#F4F4F4] outline-none border-none font-semibold" placeholder="Leave something to reply" />

                              </div>
                            </div>
                            <div className='mt-4'>
                              <button className='bg-[#2A85FF] text-white py-2 px-4 font-bold rounded-lg mr-4 text-sm'>Reply</button>
                              <button className='border-2 border-[#EFEFEF] rounded-lg px-4 py-2 font-bold text-[#1A1D1F] text-sm'>Cancel</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 justify-center ">
                  <div><span className="text-[#9A9FA5] font-semibold text-sm">1h</span><div className=" h-3 w-3 rounded-full bg-[#2A85FF] inline-block ml-2"></div></div>
                </div>


              </div>
            </div>
          ))}
        </div>
        <div className='bg-white px-6 py-4 w-[360px]'>
          <div className='flex items-center gap-2'>
            <div className='h-8 w-4 bg-[#CABDFF]'></div><h1>Filter</h1>

          </div>
          <div className='mt-10 pb-8 border-b'>


            {topics.map((topic) => (<div className='flex justify-between items-center py-1' key={topic.id}>
              <div>
                <p className='font-semibold'
                  style={{
                    color: checkedTopics[topic.id] ? '#1A1D1F' : '#6F767E',
                  }}
                >{topic.text}</p>
              </div>
              <div>
                <input
                  checked={!!checkedTopics[topic.id]}
                  onChange={() => handleCheckboxChange(topic.id)}
                  type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" /></div>
            </div>))}
            <div className='flex justify-between mt-4 gap-2'>
              <button className='bg-[#FCFCFC] border-2 border-[#EFEFEF] rounded-lg px-4 py-2 font-bold text-[#1A1D1F] text-sm w-full' onClick={handleSelectAll}>Select all</button>
              <button
                onClick={handleUnselectAll} className='bg-[#FCFCFC] border-2 border-[#EFEFEF] rounded-lg px-4 py-2 font-bold text-[#1A1D1F] text-sm w-full'>Unselect all</button>
            </div>
          </div>
          <div className='mt-10'>
            {users.map((user) => (<div className='flex justify-between items-center py-1' key={user.id}>
              <div>{user.text}</div>
              <div>
                <input type='radio' name="user" id={user.id} />
              </div>
            </div>))}
          </div>
        </div>
      </div>
    </div>
  )
}

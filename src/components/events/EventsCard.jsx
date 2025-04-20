import Image from "next/image";
import Link from "next/link";
import eventImage from "@/assets/events/eventsImage.png";

const EventsCard = ({ item }) => {
    return (
        <div className="bg-green-100 p-5 rouned-md shadow-md duration-300 hover:shadow-none ">
            <div className="flex justify-center">
                <Image
                    src={eventImage}
                    alt=""
                    width={264}
                    height={133}
                    className="rounded-[15px]"
                />
            </div>
            <div className="mt-5">
                <div className="w-[210px]">
                    <h2 className="text-main font-bold text-2xl">TOCS Business event 2023</h2>
                </div>
                
                
                <div className="flex justify-between items-center mt-5">
                    <div>
                        <span className="text-[#3A3A3A]text-base">02-Sep-2023</span>
                    </div>
                    <div>
                        <button className="text-white font-semibold bg-[#22CD5A] text-sm px-5 rounded-md">Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsCard;
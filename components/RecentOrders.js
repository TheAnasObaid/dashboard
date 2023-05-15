import React from "react";
import { data } from "@/data/data";
import { MdOutlineAttachMoney } from "react-icons/md";

const style = {
    wrapper: `lg:col-span-2 col-span-1 w-96 relative lg:h-[70vh] h-[50vh] m-4 p-4 border rounded-lg bg-white overflow-scroll`,
    listItem: `bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center`,
    recentRidesIconContainer: `rounded-lg p-3 bg-gray-200`,
    recentRidesListIcon: `text-lg`,
    leftTextContainer: `pl-4`,
    total: `text-gray-800 font-bold`,
    riderName: `text-gray-400 font-sm`,
    status: `lg:flex md:hidden absolute right-6 text-sm`,
};

const RecentOrders = () => {
    return (
        <div className={style.wrapper}>
            <h1>Recent Rides</h1>
            <ul>
                {data.map((ride, id) => (
                    <li className={style.listItem}>
                        <div className={style.recentRidesIconContainer}>
                            <div className={style.recentRidesListIcon}>
                                {/* TODO: Place eth logo here instead */}
                                <MdOutlineAttachMoney />
                            </div>
                        </div>
                        <div className={style.leftTextContainer}>
                            <p className={style.total}>${ride.total}</p>
                            <p className={style.riderName}>{ride.name.first}</p>
                        </div>
                        {/* <div>
                            <p className={style.status}>{ride.status}</p>
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentOrders;

import React from "react";

const style = {
    wrapper: `grid lg:grid-cols-5 gap-4 p-4`,
    card: `lg:col-span-2 col-span-1 bg-white justify-between w-96 border rounded-lg p-4`,
    price: `text-2xl font-bold`,
    cardCaption: `text-gray-600`,
};

const TopCard = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <p className={style.price}>$7,800</p>
                <p>Revenue</p>
            </div>
        </div>
    );
};

export default TopCard;

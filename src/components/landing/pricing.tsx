"use client"

import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import AnimScroll from "./animScroll";

type PricingData = {
  title: string;
  price: string;
  description: string;
  include: string[];
};

function Pricing() {
  const dataPrice: PricingData[] = [
    {
      title: "Beginner",
      price: "$35",
      description: "Make your plans easy by subscribing for free. Get it now",
      include: ["Active monitoring", "Manage Money", "Unlimited Customer Service"],
    },
    {
      title: "Popular",
      price: "$50",
      description: "This is the most popular package here that is often purchased",
      include: [
        "Archive chat",
        "Manage Service",
        "Chat support",
        "Premium Subscription",
        "Unlock all features",
      ],
    },
    {
      title: "Special",
      price: "$65",
      description: "Make your plans easy by subscribing for free. Get it now",
      include: [
        "Active monitoring",
        "Manage Money",
        "Unlimited Customer Service",
        "Premium Future Unlock",
      ],
    },
  ];

  useEffect(() => {
    AnimScroll(".title3", 100, ".title3");
    AnimScroll("#price-0", 200, ".content2");
    AnimScroll("#price-1", 300, ".content2");
    AnimScroll("#price-2", 400, ".content2");
  }, []);

  return (
    <div className="mt-28 lg:mt-52 w-full xl:w-container mx-auto px-10 xl:px-0">
      <div className="title3 w-full lg:w-7/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white">
          More power and easy our pricing
        </h2>
        <p className="mt-5 w-3/4 mx-auto text-slate-400 text-base">
          Before you buy our products, you can see what benefits you will get from buying our financial software.
        </p>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap justify-center gap-10 mt-16">
        {dataPrice.map((data, i) => (
          <div
            id={`price-${i}`}
            key={data.title}
            className="group hover:bg-midBlue text-white border hover:border-midBlue rounded-xl p-10 flex flex-col justify-between h-card"
          >
            <div>
              <h3 className="text-3xl font-medium">{data.title}</h3>
              <p className="text-3xl mt-8 font-medium">
                {data.price} <span className="text-base font-light">/Month</span>
              </p>
              <p className="content2 mt-5 text-base">{data.description}</p>
              {data.include.map((inc, index) => (
                <div key={index} className="flex items-start gap-5 mt-7 text-base">
                  <CheckIcon className="w-5 bg-white text-midBlue rounded-full p-1" />
                  <p>{inc}</p>
                </div>
              ))}
            </div>
            <div>
              <button className="bg-midBlue group-hover:bg-white text-white group-hover:text-blue w-full h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

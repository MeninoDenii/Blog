"use client";
import React from "react";
import { Heart } from "lucide-react";

interface iPost {
  id: number;
  date: string;
  title: string;
  description: string;
}

export const Post: React.FC<iPost> = ({ date, description, id, title }) => {
  const handleLike = () => {
    const heart = document.getElementById("heart");
    heart?.classList.toggle("fill-brand-color");
  };

  return (
    <div
      className="py-8 px-6 border-2 border-dark-40 rounded-lg md:py-[40px] md:px-[40px] bg-dark-20 hover:border-brand-color"
      key={id}
    >
      <div className="w-full flex items-center justify-between">
        <span className="text-brand-color text-xs font-['Inter'] md:text-sm">
          {date}
        </span>
        <Heart
          id="heart"
          size={24}
          onClick={handleLike}
          className={`stroke-brand-color cursor-pointer hover:fill-brand-color`}
        />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="text-xl text-dark-60">{title}</h1>
        <p className="text-sm text-dark-50 md:text-base">{description}</p>
      </div>
    </div>
  );
};

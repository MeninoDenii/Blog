"use client";
import React, { useState } from "react";
import { Post } from "@/components/Post";
import { posts } from "@/mocks/posts";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="h-full">
      <header className="w-full py-12 px-6 bg-dark-20 flex flex-col gap-8 items-center justify-center md:py-16 md:px-8 md:gap-12">
        <h1 className=" text-2xl font-medium-['space-grotesk'] text-brand-color md:text-[40px]">
          <span className="text-brand-color">Code</span>
          <span className="text-dark-60">Lab</span>
        </h1>
        <input
          type="text"
          placeholder="Pesquisar no blog"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="border-2 w-full border-dark-40 h-14 py-4 px-6 bg-dark-40 outline-none rounded-lg font-['Inter'] text-sm text-dark-50 md:text-xl"
        />
      </header>
      <section className="py-10 px-6 bg-dark-10 flex flex-col gap-10 md:h-full md:py-16 md:px-8">
        {search ? (
          <div className="h-screen flex flex-col gap-10">
            {posts
              ?.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((post) => (
                <Post
                  key={post?.id}
                  date={post.date}
                  description={post.description}
                  id={post.id}
                  title={post.title}
                />
              ))}
          </div>
        ) : (
          <>
            {posts?.map((post) => (
              <Post
                key={post?.id}
                date={post.date}
                description={post.description}
                id={post.id}
                title={post.title}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}

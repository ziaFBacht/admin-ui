import React from "react";
import PostCard from "./PostCard";
import posts from "./postsData";

function PostCards() {

    return (
        <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
            Post Cards
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-3 max-w-8xl mx-20">
                {posts.map((userId, index, title, body) => (
                    <PostCard key={index} {...userId} />
                ))}
            </div>
        </div>
        </>
    );
}

export default PostCards;
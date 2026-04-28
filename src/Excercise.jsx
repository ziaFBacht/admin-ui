import React from "react";
import UserCard from "./UserCard";
import { users, newUsers, getUsers } from "./Services";

function Exercise() {
    getUsers()
        .then((data) => console.log("Data dari API:", data))
        .catch((error) =>
            console.error("[Component] Gagal menampilkan data:", error.message)
    );
    // filter
    const nonSemarangUsers = users.filter((user) => user.city !== "Semarang")

    return (
        <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
            User Cards
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {users.map((user, index) => (
                    <UserCard key={index} {...user} />
                ))}
            </div>
        </div>
        </>
    );
}

export default Exercise;
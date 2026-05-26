import React, { useState } from "react";

function PostCard(props){
    // console.log(props)
    const {userId, id, title, body, ...rest} = props;
    const [clicked, setClicked] = useState(false);

    console.log(Object.entries(rest));

    return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md hover:bg-red-100 hover:outline transition-shadow text-center justify-between flex flex-col gap-10 align-middle">
        <div className="flex items-center flex-col">
            <div>
                <p className="text-gray-600">
                    <span className="font-bold text-2xl">{title}</span> 
                </p>
            </div>
            <br></br>
            <div>
                <p className="text-gray-600">
                    <span className="font-medium">{body}</span>
                </p>
            </div>
            {/* Menampilkan data tambahan dari rest */}
            {Object.entries(rest).map(([key, value]) => (
                <p key={key} className="text-gray-600">
                <span className="font-medium capitalize">{key}:</span> {value}
                </p>
            ))}
        </div>
        
        <div>
            <button 
            className={`${clicked ? "bg-special-red2 hover:bg-special-red" : "bg-gray-01"} text-white p-2 rounded-md w-full`}
            onClick={() => setClicked(true)}>
            {clicked ? "Tombol sudah Diklik" : "Silahkan Klik"}
            </button>
        </div>
    </div>
  );
}

export default PostCard;
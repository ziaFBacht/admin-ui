import React from "react"; 

function LightDarkButton() {

  return (
    <div className="grid place-items-center">
      <div className="bg-zinc-100 p-2 rounded-xl">
        <button className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg text-black">
          Light
        </button>
        <button className="bg-transparent p-3 hover:bg-zinc-200 rounded-lg text-black">
          Dark
        </button>
      </div>
    </div>
  );
}

export default LightDarkButton;
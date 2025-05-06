import Image from "next/image";
import React from "react";

function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-black/75 hover:shadow-md">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizaa"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperani Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
        architecto mollitia a dolorum nostrum, similique aut asperiores minus,
        quisquam qui .
      </p>
      <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Car $12
      </button>
    </div>
  );
}

export default MenuItem;

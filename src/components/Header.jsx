import React from "react";

const Header = ({ city, setCity, error, handleSubmit }) => {
  return (
    <div className="font-rakeway relative p-6 rounded-lg text-white w-full flex justify-center items-center flex-col h-[96px]">
      <form onSubmit={handleSubmit} className="relative w-[320px] bg-[#3772a6] rounded-lg">
        <input
          className="block w-full border p-2 pl-4 rounded-lg bg-transparent focus:border-blue-400 focus:outline-none uppercase border-white/90 text-xl"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className="absolute right-0 top-0 block h-full px-4 text-white rounded-lg bg-transparent hover:bg-orange-100 hover:text-zinc-800 uppercase text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && (
        <p className="text-xl -bottom-[33px] sm:-bottom-2 absolute font-medium text-red-400 text-center upp">{error}</p>
      )}
    </div>
  );
};

export default Header;
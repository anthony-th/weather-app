import React from "react";

const Header = ({ city, setCity, error, handleSubmit }) => {
  return (
    <div className="font-rakeway relative bg-zinc-800/90 p-6 rounded-lg text-yellow-50 w-full flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className="relative w-[320px]">
        <input
          className="block w-full border p-2 pl-4 rounded-lg bg-transparent focus:border-[#ee1f80] focus:outline-none uppercase border-white/90"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className="absolute right-0 top-0 block h-full px-4 text-yellow-50 rounded-lg bg-transparent hover:bg-yellow-50 hover:text-zinc-800 uppercase"
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && (
        <p className="bottom-0 absolute mt-2 text-sm font-medium text-[#ee1f80]">{error}</p>
      )}
    </div>
  );
};

export default Header;
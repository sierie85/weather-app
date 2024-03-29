export default function SearchInput({
  setSQuery,
}: {
  setSQuery: (squery: string) => void;
}) {
  return (
    <>
      <label
        htmlFor="loc-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setSQuery(e.currentTarget.value)}
          type="search"
          id="loc-search"
          className="block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 bg-white focus:ring-slate-500 focus:border-slate-600 !outline-none"
          placeholder="Berlin, Amsterdam, Paris ..."
          required
          autoFocus
        />
        <button
          type="submit"
          className="hidden md:block text-white absolute end-2.5 bottom-2.5 bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </>
  );
}

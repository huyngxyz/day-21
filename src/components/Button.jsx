import Loading from "./svgs/Loading";

export default function Button({ loading }) {
  return (
    <button
      disabled={loading}
      className={`${
        loading ? "bg-light-primary cursor-not-allowed" : "bg-primary"
      }  text-white rounded-full px-14 py-3 mt-12 font-bold items-center flex gap-x-2`}
    >
      {loading && <Loading />}
      <span className="uppercase text-xl">
        {loading ? "submitting" : "let's do it"}
      </span>
    </button>
  );
}

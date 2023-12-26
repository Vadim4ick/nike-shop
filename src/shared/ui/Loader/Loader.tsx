import "./Loader.css";

const Loader = () => {
  return (
    <div className="lds-dual-ring flex items-center absolute justify-center w-full h-screen bg-white z-50 overflow-hidden">
      <div className="w-16 h-16 border-4 border-b-black-100 border-black-200 m-2 rounded-full"></div>
    </div>
  );
};

export { Loader };

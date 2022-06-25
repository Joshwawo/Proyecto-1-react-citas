
const Error = ({children}) => {
  return (
    <div className="bg-red-500 rounded-md">
      <p className="text-white text-center p-3 uppercase font-bold mb-3">
        {children}
      </p>
    </div>
  );
};

export default Error;

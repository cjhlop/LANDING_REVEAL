import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-96 bg-gray-50">
      <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
    </div>
  );
};

export default Loader;
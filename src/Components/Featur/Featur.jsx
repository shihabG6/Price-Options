
import { HiCheckCircle } from "react-icons/hi";

const Featur = ({featur}) => {
  return (
    <div className="">
      <p className="text-left flex items-center gap-2"><HiCheckCircle className="text-green-400"></HiCheckCircle>
 {featur}</p>
    </div>
  );
};

export default Featur;
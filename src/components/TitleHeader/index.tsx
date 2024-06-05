import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const TitleHeader = () => {
    const { state, } = useContext(DataContext);
    return <h2 className=" text-2xl p-5 font-bold text-center bold w-200"> {state} Hospitals
    </h2>;
}

export default TitleHeader
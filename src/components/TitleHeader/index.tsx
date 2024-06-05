import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const TitleHeader = () => {
    const { state, } = useContext(DataContext);
    return <h2 className="text-4xl font-bold text-center p-4 text-gray-800 animate-fadeIn"> {state} Hospitals
    </h2>;
}

export default TitleHeader
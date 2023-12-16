import { shoes } from "../data";
import getProducts from "../ProductFilters";

const useShoes = () => {
    return getProducts(shoes)
}

export default useShoes();
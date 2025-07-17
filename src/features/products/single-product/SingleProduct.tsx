import { useParams } from "react-router-dom";
import { useSingleProduct } from "./useSingleProduct";
import Error from "@/pages/Error";
import SelectProduct from "./SelectProduct";

function SingleProduct() {
	const { productId } = useParams();
	const { isLoading, error, data } = useSingleProduct(productId as string);

	if (isLoading) {
		return <h1 className="text-3xl">Loading....</h1>;
	}
	if (error) {
		return <Error message="Product could not be loaded" />;
	}
	if (data?.data.attributes) {
		return <SelectProduct productInfo={data?.data?.attributes} />;
	}
}

export default SingleProduct;

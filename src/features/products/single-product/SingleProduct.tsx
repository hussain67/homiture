import { useParams } from "react-router-dom";
import { useSingleProduct } from "./useSingleProduct";
import Error from "@/pages/Error";
import SelectProduct from "./SelectProduct";
import Spinner from "@/components/Spinner";

function SingleProduct() {
	const { productId } = useParams();
	const { isLoading, error, data } = useSingleProduct(productId as string);
	console.log(data);
	if (isLoading) {
		return <Spinner />;
	}
	if (error) {
		return <Error message="Product could not be loaded" />;
	}
	if (data?.data.attributes) {
		return (
			<SelectProduct
				productInfo={data?.data?.attributes}
				productId={productId as string}
			/>
		);
	}
}

export default SingleProduct;

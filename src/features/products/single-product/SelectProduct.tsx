import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProductAttributes } from "@/types/productTypes";
import SelectProductColor from "./SelectProductColor";
import SelectProductAmount from "./SelectProductAmount";
import { Button } from "@/components/ui/button";
import { formatAsPound } from "@/utils/formatAsPound";
import type { CartItem } from "@/types/cartTypes";
import { useAppDispatch } from "@/hooks";
import { addItem } from "@/features/cart/cartSlice";
import ConfirmAddItem from "./ConfirmAddItem";

function SelectProduct({ productId, productInfo }: { productId: string; productInfo: ProductAttributes }) {
	const dispatch = useAppDispatch();
	const { title, image, company, price, description, colors } = productInfo;
	const poundAmount = formatAsPound(price);
	const [productColor, setProductColor] = useState(colors.at(0) as string);
	const [productAmount, setProductAmount] = useState(1);
	const [showInfo, setShowInfo] = useState(false);
	const navigate = useNavigate();

	function handleAddProduct() {
		const newCartItem: CartItem = {
			cartId: productId + productColor,
			productId,
			image,
			title,
			price,
			amount: productAmount,
			productColor,
			company
		};
		setShowInfo(true);
		dispatch(addItem(newCartItem));
		const timer = setTimeout(() => {
			navigate("/products");
		}, 3000);
		return () => clearTimeout(timer);
	}
	return (
		<section className="grid xs:px-[10%] sm:px-0 sm:grid-cols-2 gap-5 md:gap-10 relative">
			<article>
				<img
					src={image}
					alt=""
					className="h-64 w-full md:w-[95%]"
				/>
			</article>
			<article>
				<div className="mb-6">
					<h1 className="text-3xl capitalize mb-3 font-semibold">{title}</h1>
					<h2 className="text-xl mb-3">{company}</h2>
					<h3 className="mb-3">{poundAmount}</h3>
					<p className="mb-">{description}</p>
				</div>
				<div className="flex gap-16 mb-7">
					<SelectProductColor
						colors={colors}
						productColor={productColor}
						setProductColor={setProductColor}
					/>
					<SelectProductAmount
						productAmount={productAmount}
						setProductAmount={setProductAmount}
					/>
				</div>
				<Button
					className=""
					disabled={showInfo}
					type="submit"
					onClick={handleAddProduct}
				>
					Add Product
				</Button>
			</article>
			{showInfo && <ConfirmAddItem />}
		</section>
	);
}

export default SelectProduct;

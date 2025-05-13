const LINKS = [
    {
        id: 1,
        title: "Home",
        path: "/index.html",
    },
    {
        id: 2,
        title: "Brands",
        path: "/brands",
    }, {
        id: 3,
        title: "Recent Products",
        path: "/recent-products",
    },
    {
        id: 4,
        title: "Contact",
        path: "/contact",
    },
    {
        id: 5,
        title: "About",
        path: "/about",
    },
]

import CategoryImage1 from "../assets/images/type-1.png";
import CategoryImage2 from "../assets/images/type-2.png";
import CategoryImage3 from "../assets/images/type-3.png";

const CATEGORY = [
    {
        id: 1,
        title: "Apple",
        desc: "Apple is one of the most famous smart watches providing company.",
        image: CategoryImage1
    },
    {
        id: 2,
        title: "Xiaomi",
        desc: "Xiaomi smart watches are produced by MI company.",
        image: CategoryImage2
    }, {
        id: 3,
        title: "FitBit",
        desc: "FitBit smart watches are best for there health and fitness features.",
        image: CategoryImage3
    },
]

import ProductImage1 from "../assets/images/latest-1.png";
import ProductImage2 from "../assets/images/latest-2.png";
import ProductImage3 from "../assets/images/latest-3.png";
import ProductImage4 from "../assets/images/latest-4.png";
import ProductImage5 from "../assets/images/latest-5.png";
import ProductImage6 from "../assets/images/latest-6.png";

const PRODUCTS = [
    {
        id: 1,
        modelName: "Apple Smart I",
        image: ProductImage1,
        discountedPrice: "255.00",
        originalPrice: "300.00"
    },
    {
        id: 2,
        modelName: "Apple Smart II",
        image: ProductImage2,
        discountedPrice: "255.00",
        originalPrice: "300.00"
    },
    {
        id: 3,
        modelName: "Apple Smart III",
        image: ProductImage3,
        discountedPrice: "255.00",
        originalPrice: "300.00"
    },

    {
        id: 4,
        modelName: "Apple Smart IV",
        image: ProductImage4,
        discountedPrice: "450.00",
        originalPrice: "399.00"
    },
    {
        id: 5,
        modelName: "Samsung Watch Pro",
        image: ProductImage5,
        discountedPrice: "255.00",
        originalPrice: "300.00"
    },
    {
        id: 6,
        modelName: "Fitbit Max 1",
        image: ProductImage6,
        discountedPrice: "",
        originalPrice: "155.00"
    },
]

export { LINKS, CATEGORY, PRODUCTS };
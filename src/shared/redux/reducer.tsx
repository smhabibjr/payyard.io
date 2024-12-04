import { Itemsdata1 } from "../data/pages/ecommerces/ecommercedata";

const initialState = {
  lang: "en",
  dir: "ltr",
  class: "light",
  dataMenuStyles: "dark",
  dataNavLayout: "vertical",
  dataHeaderStyles: "light",
  dataVerticalStyle: "overlay",
  dataToggled: "",
  dataNavStyle: "",
  horStyle: "",
  dataPageStyle: "regular",
  dataWidth: "fullwidth",
  dataMenuPosition: "fixed",
  dataHeaderPosition: "fixed",
  loader: "disable",
  iconOverlay: "",
  colorPrimaryRgb: "",
  colorPrimary: "",
  bodyBg: "",
  Light: "",
  darkBg: "",
  inputBorder: "",
  bgImg: "",
  iconText: "",
  body: "",
  ecommercedata: [
    {
      id: '1',
      preview: "../../../assets/images/ecommerce/png/1.png",
      title: 'Dapzem & Co',
      description: 'Branded hoodie ethnic style',
      oldpr: '$229',
      newpr: '$1,799',
      offerprice: '$229',
      quantity: 1,
      images: [
        { img: "../../../assets/images/ecommerce/png/1.png" },
        { img: "../../../assets/images/ecommerce/png/1-1.png" },
        { img: "../../../assets/images/ecommerce/png/1-3.png" },
        { img: "../../../assets/images/ecommerce/png/1-4.png" },
      ],
    },
    // ... more data
  ],
};

export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      state = {
        ...state,
        ecommercedata: Itemsdata1.filter((idx) => idx.id === payload),
      };
      return state;
      break;

    case "PRODUCT":
      state.ecommercedata = Itemsdata1.filter((idx) => idx.id == payload);
      return state;
      break;

    default:
      return state;
  }
}

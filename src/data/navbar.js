import Menu from "../assets/icons/Menu.svg";
import Search from "../assets/icons/Search.svg";
import ShoppingBag from "../assets/icons/shoppingbag.svg";
import Close from "../assets/icons/Close.svg";
import Phone from "../assets/icons/Call.svg";
import Location from "../assets/icons/Location.svg";
import Logo from "../assets/icons/Logo.svg";
import Down from "../assets/icons/Down.svg";

export const navbarIcons = {
  menu: Menu,
  search: Search,
  shoppingBag: ShoppingBag,
  close: Close,
  phone: Phone,
  location: Location,
  logo: Logo,
  down: Down,
};

export const categories = [
  {
    id: "women",
    label: "WOMEN",
    icon: Down,
    href: "#",
    items: [
      {
        id: "new",
        label: "New",
        href: "#",
      },
      {
        id: "apparel",
        label: "Apparel",
        href: "#",
        children: [
          {
            id: "outer",
            label: "Outer",
            href: "#",
          },
          {
            id: "dress",
            label: "Dress",
            href: "#",
          },
          {
            id: "blouse-shirt",
            label: "Blouse/Shirt",
            href: "#",
          },
          {
            id: "t-shirt",
            label: "T-Shirt",
            href: "#",
          },
          {
            id: "knitwear",
            label: "Knitwear",
            href: "#",
          },
          {
            id: "skirt",
            label: "Skirt",
            href: "#",
          },
          {
            id: "pants",
            label: "Pants",
            href: "#",
          },
          {
            id: "denim",
            label: "Denim",
            href: "#",
          },
          {
            id: "kids",
            label: "Kids",
            href: "#",
          },
        ],
      },
      {
        id: "bag",
        label: "Bag",
        href: "#",
      },
      {
        id: "shoes",
        label: "Shoes",
        href: "#",
      },
      {
        id: "beauty",
        label: "Beauty",
        href: "#",
      },
      {
        id: "accessories",
        label: "Accessories",
        href: "#",
      },
    ],
  },

  {
    id: "men",
    label: "MAN",
    icon: Down,
    href: "#",
    items: [
      {
        id: "new",
        label: "New",
        href: "#",
      },
      {
        id: "apparel",
        label: "Apparel",
        href: "#",
        children: [
          {
            id: "outer",
            label: "Outer",
            href: "#",
          },
          {
            id: "shirts",
            label: "Shirts",
            href: "#",
          },
        ],
      },
      {
        id: "bag",
        label: "Bag",
        href: "#",
      },
      {
        id: "shoes",
        label: "Shoes",
        href: "#",
      },
    ],
  },

  {
    id: "kids",
    label: "KIDS",
    icon: Down,
    href: "#",
    items: [
      {
        id: "new",
        label: "New",
        href: "#",
      },
      {
        id: "apparel",
        label: "Apparel",
        href: "#",
      },
      {
        id: "shoes",
        label: "Shoes",
        href: "#",
      },
    ],
  },
];
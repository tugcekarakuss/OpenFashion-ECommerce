import Menu from "../assets/icons/Menu.svg";
import Search from "../assets/icons/Search.svg";
import ShoppingBag from "../assets/icons/shoppingbag.svg";
import Close from "../assets/icons/Close.svg";
import Phone from "../assets/icons/Call.svg";
import Location from "../assets/icons/Location.svg";
import Logo from "../assets/icons/Logo.svg";
import Down from "../assets/icons/Down.svg";
import Up from "../assets/icons/Up.svg";
import Forward from "../assets/icons/Forward.svg"
import Instagram from "../assets/icons/Instagram.svg";
import Twitter from "../assets/icons/Twitter.svg";
import YouTube from "../assets/icons/YouTube.svg";

export const navbarIcons = {
  menu: Menu,
  search: Search,
  shoppingBag: ShoppingBag,
  close: Close,
  phone: Phone,
  location: Location,
  logo: Logo,
  down: Down,
  up: Up,
  forward:Forward,
  twitter: Twitter,
  instagram: Instagram,
  youTube: YouTube
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
            label: "Blouse / Shirt",
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
        ],
      },
      {
        id: "bags",
        label: "Bags",
        href: "#",
        children: [
          {
            id: "shoulder-bags",
            label: "Shoulder Bags",
            href: "#",
          },
          {
            id: "handbags",
            label: "Handbags",
            href: "#",
          },
          {
            id: "crossbody-bags",
            label: "Crossbody Bags",
            href: "#",
          },
          {
            id: "clutches",
            label: "Clutches",
            href: "#",
          },
        ],
      },
      {
        id: "shoes",
        label: "Shoes",
        href: "#",
        children: [
          {
            id: "heels",
            label: "Heels",
            href: "#",
          },
          {
            id: "flats",
            label: "Flats",
            href: "#",
          },
          {
            id: "boots",
            label: "Boots",
            href: "#",
          },
          {
            id: "sneakers",
            label: "Sneakers",
            href: "#",
          },
        ],
      },
      {
        id: "beauty",
        label: "Beauty",
        href: "#",
        children: [
          {
            id: "makeup",
            label: "Makeup",
            href: "#",
          },
          {
            id: "skincare",
            label: "Skincare",
            href: "#",
          },
          {
            id: "fragrance",
            label: "Fragrance",
            href: "#",
          },
        ],
      },
      {
        id: "accessories",
        label: "Accessories",
        href: "#",
        children: [
          {
            id: "jewelry",
            label: "Jewelry",
            href: "#",
          },
          {
            id: "belts",
            label: "Belts",
            href: "#",
          },
          {
            id: "sunglasses",
            label: "Sunglasses",
            href: "#",
          },
          {
            id: "hats",
            label: "Hats",
            href: "#",
          },
        ],
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
        id: "clothing",
        label: "Clothing",
        href: "#",
        children: [
          {
            id: "shirts",
            label: "Shirts",
            href: "#",
          },
          {
            id: "t-shirts",
            label: "T-Shirts",
            href: "#",
          },
          {
            id: "jackets",
            label: "Jackets",
            href: "#",
          },
          {
            id: "coats",
            label: "Coats",
            href: "#",
          },
          {
            id: "knitwear",
            label: "Knitwear",
            href: "#",
          },
          {
            id: "trousers",
            label: "Trousers",
            href: "#",
          },
          {
            id: "denim",
            label: "Denim",
            href: "#",
          },
        ],
      },
      {
        id: "shoes",
        label: "Shoes",
        href: "#",
        children: [
          {
            id: "sneakers",
            label: "Sneakers",
            href: "#",
          },
          {
            id: "boots",
            label: "Boots",
            href: "#",
          },
          {
            id: "loafers",
            label: "Loafers",
            href: "#",
          },
        ],
      },
      {
        id: "bags",
        label: "Bags",
        href: "#",
      },
      {
        id: "accessories",
        label: "Accessories",
        href: "#",
        children: [
          {
            id: "belts",
            label: "Belts",
            href: "#",
          },
          {
            id: "wallets",
            label: "Wallets",
            href: "#",
          },
          {
            id: "sunglasses",
            label: "Sunglasses",
            href: "#",
          },
        ],
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
        id: "girls",
        label: "Girls",
        href: "#",
        children: [
          {
            id: "girls-dresses",
            label: "Dresses",
            href: "#",
          },
          {
            id: "girls-tops",
            label: "Tops",
            href: "#",
          },
          {
            id: "girls-bottoms",
            label: "Bottoms",
            href: "#",
          },
          {
            id: "girls-shoes",
            label: "Shoes",
            href: "#",
          },
        ],
      },
      {
        id: "boys",
        label: "Boys",
        href: "#",
        children: [
          {
            id: "boys-tops",
            label: "Tops",
            href: "#",
          },
          {
            id: "boys-bottoms",
            label: "Bottoms",
            href: "#",
          },
          {
            id: "boys-jackets",
            label: "Jackets",
            href: "#",
          },
          {
            id: "boys-shoes",
            label: "Shoes",
            href: "#",
          },
        ],
      },
      {
        id: "baby",
        label: "Baby",
        href: "#",
        children: [
          {
            id: "baby-clothing",
            label: "Clothing",
            href: "#",
          },
          {
            id: "baby-accessories",
            label: "Accessories",
            href: "#",
          },
        ],
      },
      {
        id: "kids-shoes",
        label: "Shoes",
        href: "#",
      },
      {
        id: "kids-accessories",
        label: "Accessories",
        href: "#",
      },
    ],
  },
];
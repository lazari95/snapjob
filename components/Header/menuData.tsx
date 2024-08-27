import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2.1,
    title: "Jobs",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },

  {
    id: 34,
    title: "Sign In",
    newTab: false,
    path: "/auth/signin",
  },
  {
    id: 35,
    title: "Sign Up",
    newTab: false,
    path: "/auth/signup",
  },
];

export default menuData;

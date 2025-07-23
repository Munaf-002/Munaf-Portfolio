interface DataType {
  id: number;
  title: string;
  link: string;
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/", // Home 01
  },
  {
    id: 2,
    title: "About Me",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/service", // First service link
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio", // First portfolio link
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog", // First blog link
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

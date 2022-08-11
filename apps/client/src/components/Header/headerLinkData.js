const defaultRoutes = [
  {
    label: "Departments",
    href: "/catalog"
  },
  {
    label: "Sign In",
    href: "/login",
  }
];

const authenticatedRoutes = [
  {
    label: "Logout",
    href: "/logout",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Account",
    href: "/account",
  }
];
const headerDataTemplate = (isLoggedIn) => (isLoggedIn ? authenticatedRoutes : defaultRoutes);

export default headerDataTemplate;

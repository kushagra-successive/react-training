export const show = "show";
export const login = "Login";
export const cantLogin = "CantLogin";
export const fruits = "Fruits";
export const itemArray = [
  "banana",
  "blue",
  "new",
  "bamboo",
  "next",
  "back",
  "kite",
  "king",
  "kill",
  "off",
  "office",
  "on",
  "onclick",
];
export const menuItems = [
  { menu: "Charts", link: "/charts" },
  { menu: "Setting", link: "/setting" },
  { menu: "AboutUS", link: "/about" },
  { menu: "LogOut", link: "/logout" },
];
export const nameMock = "Kushagra";
export const passwordMock = "Kush1234";
export const valid = "valid";
export const inValid = "Invalid";
export const headCells = [
  { id: "name", label: "Dessert (100g serving)" },
  { id: "calories", label: "Calories" },
  { id: "fat", label: "Fat (g)" },
  { id: "carbs", label: "Carbs (g)" },
  { id: "protein", label: "Protein (g)" },
];
export const asc = "asc";
export const desc = "desc";
function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

export const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];
export const initialValues = {
  UserName: "",
  Email: "",
  PhoneNo: "",
  Password: "",
  ConfirmPassword: "",
};
export const filled = "filled";

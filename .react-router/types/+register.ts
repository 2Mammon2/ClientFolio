import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/about": {};
  "/post/:id": {
    "id": string;
  };
  "/tags": {};
  "/categories": {};
  "/admin": {};
  "/admin/update/:id": {
    "id": string;
  };
  "/admin/delete/:id": {
    "id": string;
  };
};
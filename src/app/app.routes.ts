import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./layouts/default/default.component"),
    children: [
      {
        path: "",
        loadComponent: () => import("./layouts/chat/chat.component"),
        children: [
          {
            path: "",
            loadComponent: () => import("./pages/chat.component"),
          },
          {
            path: "",
            loadComponent: () => import("./pages/chat.component"),
          },
        ],
      },
      {
        path: "auth",
        loadComponent: () => import("./pages/auth.component"),
      },
    ],
  },
];

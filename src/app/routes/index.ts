import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.router";
import { CarRoutes } from "../modules/cars/cars.route";
import { DriverRoutes } from "../modules/drivers/drivers.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/cars",
    route: CarRoutes,
  },
  {
    path: "/drivers",
    route: DriverRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_router_1 = require("../modules/auth/auth.router");
const cars_route_1 = require("../modules/cars/cars.route");
const drivers_route_1 = require("../modules/drivers/drivers.route");
const contact_route_1 = require("../modules/contact/contact.route");
const booking_route_1 = require("../modules/booking/booking.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_router_1.AuthRoutes,
    },
    {
        path: "/cars",
        route: cars_route_1.CarRoutes,
    },
    {
        path: "/drivers",
        route: drivers_route_1.DriverRoutes,
    },
    {
        path: "/contact",
        route: contact_route_1.ContactRoutes,
    },
    {
        path: "/booking",
        route: booking_route_1.BookingRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

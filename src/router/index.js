import AdminHome from "../pages/admin/AdminHome";
import CustomersList from "../pages/admin/CustomersList";
import DiscountDetails from "../pages/admin/DiscountDetails";
import DiscountsList from "../pages/admin/DiscountsList";
import NewDiscount from "../pages/admin/NewDiscount";
import NewReport from "../pages/admin/NewReport";
import NewVehicle from "../pages/admin/NewVehicle";
import ReportList from "../pages/admin/ReportList";
import VehicleDetails from "../pages/admin/VehicleDetails";
import VehiclesList from "../pages/admin/VehiclesList";
import CustomerHome from "../pages/customer/CustomerHome";
import CustomerInfo from "../pages/customer/CustomerInfo";
import MyReservations from "../pages/customer/MyReservations";
import NewReservation from "../pages/customer/NewReservation";
import ReservationDetails from "../pages/customer/ReservationDetails";

export const privateCustomerRoutes = [
  { path: "/", component: <CustomerHome /> },
  { path: "/info", component: <CustomerInfo /> },
  { path: "/reservations", component: <MyReservations /> },
  { path: "/reservations/:reservationId", component: <ReservationDetails /> },
  { path: "/reservations/new", component: <NewReservation /> },
];

export const privateAdminRoutes = [
  { path: "/", component: <AdminHome /> },
  { path: "/reservations/:reservationId", component: <ReservationDetails /> },
  { path: "/vehicles", component: <VehiclesList /> },
  { path: "/vehicles/:id", component: <VehicleDetails /> },
  { path: "/vehicles/new", component: <NewVehicle /> },
  { path: "/customers", component: <CustomersList /> },
  { path: "/discounts", component: <DiscountsList /> },
  { path: "/discounts/:id", component: <DiscountDetails /> },
  { path: "/discounts/new", component: <NewDiscount /> },
  { path: "/reports", component: <ReportList /> },
  { path: "/reports/new", component: <NewReport /> },
];

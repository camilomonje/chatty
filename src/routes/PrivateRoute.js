import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <h1>Loading...</h1>;

    return user ? <Outlet /> : <Navigate to="/login" />;
    return <>{children}</>;
};

export default PrivateRoute;
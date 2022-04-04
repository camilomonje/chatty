import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

function PublicRoute({ element: Component, authenticated, ...rest }) {
    return (

        <Routes>
            <Route
                {...rest}
                render={(props) => authenticated === false
                    ? <Outlet />
                    : <Navigate to='/chat' />}
            />
        </Routes>


    )}


export default PublicRoute
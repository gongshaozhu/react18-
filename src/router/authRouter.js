import {Navigate} from "react-router-dom";

const AuthRouter = (props) => {
    const token = localStorage.getItem('token')
    if (!token) return <Navigate to="/403" replace />
    return props.children
}

export default AuthRouter
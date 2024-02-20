import { exportTraceState } from "next/dist/trace";


const AuthLayout = ({children}: {children: React.ReactNode;}) =>{
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    );
}
export default AuthLayout;
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout"; // Adjust path as needed

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto'>
            
            {!loading ? (
                <div 
                    className='flex items-center gap-2 p-2 md:text-sm  text-white cursor-pointer hover:text-red-500 transition duration-200'
                    onClick={logout}
                >
                    <BiLogOut className='w-6 h-6' />
                    <span>Logout</span>
                </div>
            ) : (
                <div className='flex items-center gap-2 p-2'>
                    <span className='loading loading-spinner text-red-500'></span>
                </div>
            )}
        </div>
    );
};

export default LogoutButton;
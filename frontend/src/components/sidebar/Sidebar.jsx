import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col h-full w-full'>
			<SearchInput />
			{/* <div className='divider m-1 '></div> */}
			<hr className="mt-4 border border-gray-700"/>
			<Conversations />
			<LogoutButton />
		</div>
		
	);
};
export default Sidebar;
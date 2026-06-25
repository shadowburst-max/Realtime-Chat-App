import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { conversationContext } from "../../context/conversationContext";

const SearchInput = () => { 
	const [searchTerm, setSearchTerm] = useState('');
	const {conversations, setFilteredConversations}= useContext(conversationContext);
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		const value = e.target.value.trimStart().toLowerCase();
        const filtered = conversations.filter(convo =>
            convo.fullName.toLowerCase().includes(value)
        );
        setFilteredConversations(filtered);
	}
	return (
		<form onSubmit={(e)=>{e.preventDefault()}} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				// className='input rounded-full focus:ring-2 focus:ring-sky-500 transition duration-200'
				className="border rounded-full block w-full bg-gray-800 border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
				text-base md:text-sm 
				p-4 md:p-2"
				onChange={handleSearchChange}
				value={searchTerm}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white hover:bg-sky-600 transition duration-200'>
				<FaSearch className='w-4 h-4' />
			</button>
		</form>
	);
};
 
export default SearchInput;


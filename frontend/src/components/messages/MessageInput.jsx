import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage.js";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3 relative">
      <div className="relative w-full">
        <input
          type="text"
          className="border rounded-full block w-full bg-gray-800 border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
            text-base md:text-sm 
            p-4 md:p-3 
            pr-14 md:pr-12"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          disabled={loading}
          type="submit"
          className="absolute inset-y-0 right-3 flex items-center text-green-300 transition-all duration-300 hover:text-green-800 text-2xl md:text-xl active:scale-50"
        >
          {loading ? <div className='loading loading-spinner'></div> : <BsFillSendFill />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

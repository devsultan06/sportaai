// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const Chatbot = () => {
//     const [inputText, setInputText] = useState(""); // Controls input box text
//     const [userText, setUserText] = useState(null); // Moves text to chat history
//     const [displayedText, setDisplayedText] = useState(""); // For bot response
//     const [typingIndex, setTypingIndex] = useState(0);
//     const [botTyping, setBotTyping] = useState(false);

//     const ref = useRef(null);
//     const isInView = useInView(ref, { triggerOnce: true });

//     const messages = [
//         { sender: "user", text: "Hi Doola, check my analysis and tell me how I can improve my performance for the next match and training." },
//         { sender: "bot", text: `Hi there! Based on your analysis, here are three key suggestions:\n\n1. Boost Speed & Endurance: Incorporate high-intensity interval training to maintain your pace throughout the match.\n\n2. Refine Tactical Positioning: Focus on drills that enhance your decision-making and positioning in the later stages of play.\n\n3. Optimize Recovery: Prioritize active recovery and ensure quality sleep to reduce injury risk and stay match-ready.` },
//     ];

//     useEffect(() => {
//         if (!isInView) return;

//         let timeout:any;
//         if (typingIndex < messages[0].text.length) {
//             timeout = setTimeout(() => {
//                 setInputText((prev) => prev + messages[0].text[typingIndex]); // Simulate typing
//                 setTypingIndex((prev) => prev + 1);
//             }, 30);
//         } else if (typingIndex === messages[0].text.length) {
//             setTimeout(() => {
//                 setUserText(messages[0].text); // Move text to chat
//                 setInputText(""); // CLEAR input box
//                 setTypingIndex(-1);
//                 setBotTyping(true);
//             }, 500);
//         }
//         return () => clearTimeout(timeout);
//     }, [typingIndex, isInView]);

//     useEffect(() => {
//         if (!isInView) return;

//         let timeout;
//         if (botTyping && displayedText.length < messages[1].text.length) {
//             timeout = setTimeout(() => {
//                 setDisplayedText((prev) => prev + messages[1].text[displayedText.length]);
//             }, 30);
//         }
//         return () => clearTimeout(timeout);
//     }, [displayedText, botTyping, isInView]);

//     return (
//         <motion.div ref={ref} className="w-[450px] bg-[#1A1A1A] rounded-xl font-metropolis p-4 relative">
//             {/* Chat Header */}
//             <div className="flex justify-between items-center pb-2">
//                 <img src="/images/enlarge.png" alt="Logo" className="w-6 h-6" />
//                 <img src="/images/chatlogo.png" alt="Logo" />
//                 <img src="/images/cancel.png" alt="Close" className="w-6 h-6" />
//             </div>

//             {/* Chat Messages */}
//             <div className="mt-4 space-y-3">
//                 {userText && (
//                     <motion.div className="p-4 text-white bg-[#2A2A2A] rounded-xl w-[350px]">
//                         {userText}
//                     </motion.div>
//                 )}
//                 {botTyping && (
//                     <div className="flex justify-start ">
//                         <div className="mr-2">
//                             <img src="/images/circle.png" alt="Bot" className="w-10 h-8" />
//                         </div>
//                         <motion.div className="p-4 text-white bg-[#2A2A2A] rounded-xl w-[450px] ">
//                             {displayedText.split("\n").map((line, i) => (
//                                 <p key={i} className="mb-2">{line}</p>
//                             ))}
//                         </motion.div>
//                     </div>
//                 )}
//             </div>

//             {/* Input Box (stays after message is sent, but text clears) */}
//             <div className="mt-4 send-box p-4 rounded-lg flex items-center">
//                 <input
//                     type="text"
//                     value={inputText || ""} // Prevents "undefined" issues
//                     placeholder="Give Doola the command"
//                     className="w-full outline-none text-white placeholder-[#fff] resize-none min-h-[40px] break-words overflow-hidden"
//                     readOnly
//                 />
//                 <button className="ml-2 text-white">
//                     <img src="/images/send.png" alt="Send" className="w-6 h-6" />
//                 </button>
//             </div>
//         </motion.div>
//     );
// };

// export default Chatbot;

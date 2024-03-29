import React from "react";
import AlgorithmChooser from "./AlgorithmChooser";
import ChatHistory from "./ChatHistory";
import Logo from '../../assets/logo.svg';
import { ReactSVG } from "react-svg";

interface History {
    id: number;
    created_at: Date;
    user_query: string;
    response: string;
    session_id: string;
}

interface SideBarLayoutProps {
    history: History[]
    onClickHistory: (id: string) => void
    isKMP: boolean
    setIsKMP: (newVal: boolean) => void
    session: string
}

const SideBarLayout: React.FC<SideBarLayoutProps> = ({
    history, onClickHistory, isKMP, setIsKMP, session
}) => {
    const handleOnClickHistory = (id: string) => {
        onClickHistory(id);
    }

    console.log(history)

    return (
        <div className="flex flex-col bg-secondary-base w-60 py-8 rounded text-white">
            <div className="flex flex-row w-auto mx-4 align-middle">
                <ReactSVG src={Logo} style={{ transform: "scale(0.8)" }} className="m-0" />
                <div className="flex flex-col w-full text-white items-center ml-2">
                    <label className="w-full font-black text-xl justify-start text-left">CARL</label>
                    <label className="w-full text-sm justify-start text-left">Your Personal Chatbot</label>
                </div>
            </div>
            <div className="divider"></div>
            <AlgorithmChooser isKMP={isKMP} setIsKMP={setIsKMP} />
            <div className="divider"></div>
            <label className="label justify-start mx-4 font-bold">Chat History</label>
            <div className="w-full overflow-y-scroll">
                {history.length > 0 && history.map((item) =>
                    <ChatHistory key={item.session_id} message={item.user_query} isActive={item.session_id === session} onClick={() => { handleOnClickHistory(item.session_id) }} />)}
                {history.length === 0 &&
                    <label className="label inline-block">You don't have any history yet.</label>}
            </div>

        </div>
    );
};

export default SideBarLayout;
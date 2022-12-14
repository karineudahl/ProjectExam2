import { useContext } from "react";
import { HeadingH2 } from "../../layout/Headings";
import useFetch from "../../hooks/useFetch";
import { API_messages } from "../../../constants/Api";
import { Paragraph } from "../../layout/Paragraph";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from "../../common/LoadingMessage";
import { TbMail } from "react-icons/tb";
import AdminMessagesDelete from "./AdminMessagesDelete";
import AuthContext from "../../context/AuthContext";

export default function AdminMessagesContent() {
    const { data: messages, loading, error } = useFetch(API_messages);
    const [auth] = useContext(AuthContext);

    return (
        <> 
            { error && <ErrorMessage>An error has occured {error}</ErrorMessage>}
            { loading && <LoadingMessage content="Loading messages ..." />}
            { auth ? messages && <div className="adminContainer">
                {messages.map((message) => (              
                    <div key={message.id} className="adminContainer__content messages">  
                        <div>
                            <div className="adminContainer__heading-container">
                                <TbMail className="adminContainer-icon message-icon" />
                                <HeadingH2 content="Message" />
                                <Paragraph content={"(Sent: " + message.attributes.createdAt.slice(0,10) + ")"} />
                            </div>
                            <Paragraph content={"Name:"} fontWeight="600" />
                            <Paragraph content={message.attributes.name} />
                        </div>    
                        <div>
                            <Paragraph content={"Email:"} fontWeight="600" />
                            <Paragraph content={message.attributes.email} />
                        </div>
                        <div>
                            <Paragraph content={"Message:"} fontWeight="600" />
                            <Paragraph content={message.attributes.messagetext} />
                        </div>
                        <AdminMessagesDelete id={message.id} />
                    </div>
                ))}
            </div> : <ErrorMessage>{"You have to log in to read messages."}</ErrorMessage> }
        </> 
    )
}
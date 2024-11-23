"use client";
import { Loader2 } from "lucide-react";
import ContactList from "./_components/contact-list";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AddContact from "./_components/add-contact";
import { useCurrentContact } from "@/hooks/use-current";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailSchema, messageSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TopChat from "./_components/top-chat";
import Chat from "./_components/chat";

const HomePage = () => {
  const { currentContact } = useCurrentContact();
  const router = useRouter();

  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });
  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      text: "",
    },
  });

  useEffect(() => {
    router.replace("/");
  }, []);

  const onCreateContact = (values: z.infer<typeof emailSchema>) => {
    // api call to create contact
    console.log(values);
  };
  const onSendMessage = (values: z.infer<typeof messageSchema>) => {
    // api call to send message
    console.log(values);
  };
  return (
    <div>
      {/* sidebar */}
      <div className="w-80 h-screen border-r fixed inset-0 z-50">
        {/* <div className="w-full h-[95vh] flex justify-center items-center">
          <Loader2 size={50} className="animate-spin" />
        </div> */}
        <ContactList contacts={contacts} />
      </div>
      {/* chat area */}
      <div className="pl-80 w-full">
        {/* add contact */}

        {!currentContact?._id && (
          <AddContact
            contactForm={contactForm}
            onCreateContact={onCreateContact}
          />
        )}

        {currentContact?._id && (
          <div className="w-full relative">
            {/* Top chat */}
            <TopChat />
            {/* chat messages */}
            <Chat messageForm={messageForm} onSendMessage={onSendMessage} />
          </div>
        )}
      </div>
    </div>
  );
};
const contacts = [
  {
    email: "jonibek@example.com",
    name: "jonibek",
    _id: 1,
    avatar: "https://github.com/shadcn.png",
  },
  { email: "amile@example.com", name: "Amile", _id: 2 },
  { email: "Bexruz@example.com", name: "jonibek", _id: 3 },
  { email: "amirbek@example.com", name: "jonibek", _id: 4 },
  { email: "abdu@example.com", name: "jonibek", _id: 5 },
];
export default HomePage;

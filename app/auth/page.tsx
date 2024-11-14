import { FaTelegram } from "react-icons/fa";

export default function Page() {
  return (
    <div className="container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4">
      <FaTelegram size={120} className="text-blue-500" />
      <div>
        <h1 className="text-4xl font-bold">Uzbegram</h1>
      </div>
      <p className="text-center text-muted-foreground text-small">
        Telegram is a social network that connects people in real time.
      </p>
    </div>
  );
}

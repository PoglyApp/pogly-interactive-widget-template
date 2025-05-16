import { useEffect, useRef, useState } from "react";
import * as tmi from "tmi.js";
import "./App.css";

function App() {
  const initialized = useRef<boolean>(false);

  const urlParams = new URLSearchParams(window.location.search);

  // Pass required information to the widget with URL parameters.
  const TWITCH_CHANNEL = urlParams.get("channel");

  const [message, setMessage] = useState<string>("");

  if (!TWITCH_CHANNEL)
    return (
      <>
        You need to put the twitch channel in the url! example:{" "}
        <a href="http://localhost:5173/example/?channel=bobross">http://localhost:5173/example/?channel=bobross</a>!
      </>
    );

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Twitch chat connection logic
    const twitchChannel: string = TWITCH_CHANNEL.toLowerCase();
    const twitchClient = tmi.Client({
      connection: {
        reconnect: true,
        maxReconnectAttempts: Infinity,
        maxReconnectInterval: 30000,
        reconnectDecay: 1.4,
        reconnectInterval: 5000,
        timeout: 180000,
      },
      channels: [twitchChannel],
    });

    twitchClient.connect();

    twitchClient.on("connected", () => {
      console.log("Connected to twitch chat!");
    });

    // Code to grab messages from Twitch chat.
    twitchClient.on("message", (_channel: string, tags: tmi.ChatUserstate, message: string) => {
      // Twitch has anti spam mechanism that prevents you from sending 2 identical messages back to back.
      // 7TV has a feature where it adds a random space into the message to get around the spam filter.
      // This just gets rid of that space so if your widget relies on users writing the same message twice in a row, the second message wont be ignored.
      if (/[\u0020\uDBC0]/.test(message)) {
        message = message.slice(0, -3);
      }

      setMessage(message);
    });
  }, []);

  // The actual page shown.
  return <div style={{ fontSize: "200px" }}>Message: {message}</div>;
}

export default App;

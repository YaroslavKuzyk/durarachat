import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8000 }, () =>
  console.log(`WS started on port 8000`)
);

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    console.log(msg);
    switch (msg.event) {
      case "message":
        const { message, name, avatar } = msg;
        broadcastMessage({
          message,
          name,
          avatar,
        });
        break;
      case "connection":
        broadcastMessage({ name: msg.name, event: "connection" });
        break;
    }
  });
});

function broadcastMessage(message) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

export default wss;

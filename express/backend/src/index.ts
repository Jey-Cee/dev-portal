import express from "express";
import { IncomingMessage } from "http";
import { Socket } from "net";
import path from "path";
import adapterApi from "./api/adapter";
import weblateProxy from "./api/weblate-proxy";
import {
	handleUpgrade,
	router as createAdapterRouter,
} from "./apps/create-adapter";
import auth from "./auth";
import { env } from "./common";
import { startCronJobs } from "./cron";

const app = express();
const port = 8080;

const publicPath = env.HTTP_PUBLIC_PATH
	? path.resolve(env.HTTP_PUBLIC_PATH)
	: path.join(__dirname, "public");

app.use(express.static(publicPath));

app.use(auth);

// api
app.use(weblateProxy);
app.use(adapterApi);

// apps
app.use(createAdapterRouter);

app.get("/*", function (_req, res) {
	res.sendFile(path.join(publicPath, "index.html"));
});

const server = app.listen(port, () => {
	console.log(`Express app listening at http://localhost:${port}`);
});

server.on(
	"upgrade",
	(request: IncomingMessage, socket: Socket, head: Buffer) => {
		if (request.url === "/ws/create-adapter") {
			handleUpgrade(request, socket, head);
		} else {
			socket.destroy();
		}
	},
);

startCronJobs();

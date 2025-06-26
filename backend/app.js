import express, { json, urlencoded } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connection from "./sequelize/config/config.js";
import { Server } from "socket.io";
import { createServer } from "http";

import advertisingRouters from "./routers/advertisingRouters.js";
import budgetRouters from "./routers/budgetRouters.js";
import cardRouters from "./routers/cardRouters.js";
import categoriesRouters from "./routers/categoryRoutes.js";
import certificateRoutes from "./routers/certificateRoutes.js";
import chatRoutes from "./routers/chatRoutes.js";
import criminalRecordRoutes from "./routers/criminalRecordRoutes.js";
import networkRoutes from "./routers/networkRoutes.js";
import notificationRoutes from "./routers/notificationRoutes.js";
import paymentPlan from "./routers/paymentPlanRouters.js";
import postRoutes from "./routers/postRoutes.js";
import postImageRoutes from "./routers/postImageRoutes.js";
import postPostulateRoutes from "./routers/postPostulateRoutes.js";
import productRoutes from "./routers/productRoutes.js";
import productImageRouters from "./routers/productImageRouters.js";
import professionRoutes from "./routers/professionRoutes.js";
import rankRouters from "./routers/rankRouters.js";
import ratingRouters from "./routers/ratingRouters.js";
import ratingsTaskRouters from "./routers/ratingsTaskRouters.js";
import reasonRouters from "./routers/reasonRouters.js";
import requestRouters from "./routers/requestRouters.js";
import requestsImageRouters from "./routers/requestsImageRouters.js";
import roleRouters from "./routers/roleRouters.js";
import scribblerRouters from "./routers/scribblerRouters.js";
import scribblerImageRouters from "./routers/scribblerImageRouters.js";
import subscriptionRouters from "./routers/subscriptionRouters.js";
import taskRouters from "./routers/taskRouters.js";
import userRouters from "./routers/userRouters.js";
import usersCategoriesRouters from "./routers/usersCategoriesRouters.js";
import usersNetworkRouters from "./routers/usersNetworkRouters.js";
import usersNotificationRouters from "./routers/usersNotificationRouters.js";
import usersProfessionsRouters from "./routers/usersProfessionsRouters.js";
import usersRankRouters from "./routers/usersRankRouters.js";
import usersSubscriptionRouters from "./routers/usersSubscriptionRouters.js";
import authRoutes from "./routers/authRoutes.js";
// import whatsappRoutes from './routers/whatsappRouter.js';
// import recoverPasswordRouters from './routers/recoverPasswordRouters.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Base de datos
const dbTesting = async () => {
  try {
    await connection.authenticate();
    console.log("✅ Conectado a la base de datos");
  } catch (error) {
    console.log("❌ Error en la base de datos:", error);
  }
};
dbTesting();

// Crear servidor HTTP y Socket.IO
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  },
});

// Socket.IO eventos globales
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) {
    socket.join(userId);
    console.log(`🟢 Usuario ${userId} conectado con socket ${socket.id}`);
  } else {
    console.log(`🟢 Cliente sin userId conectado: ${socket.id}`);
  }

  socket.on("ConexionId", (userId) => {
    socket.join(userId.toString());
    console.log(`Usuario ${userId} unido a su sala`);
  });

  socket.on("send", (info) => {
    const id = info.id_receiver_user;
    io.emit(`send${id}`, info);
  });

  socket.on("nueva_notificacion", (data) => {
    io.emit("actualizar_notificaciones", data);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Cliente desconectado:", socket.id);
  });
});

// Rutas
app.use("/advertisings", advertisingRouters);
app.use("/budgets", budgetRouters);
app.use("/cards", cardRouters);
app.use("/categories", categoriesRouters);
app.use("/certificates", certificateRoutes);
app.use("/chats", chatRoutes);
app.use("/criminal-records", criminalRecordRoutes);
app.use("/networks", networkRoutes);
app.use("/notifications", notificationRoutes);
app.use("/payment-plans", paymentPlan);
app.use("/posts", postRoutes);
app.use("/post-images", postImageRoutes);
app.use("/post-postulates", postPostulateRoutes);
app.use("/products", productRoutes);
app.use("/product-images", productImageRouters);
app.use("/professions", professionRoutes);
app.use("/ranks", rankRouters);
app.use("/ratings", ratingRouters);
app.use("/ratings-tasks", ratingsTaskRouters);
app.use("/reasons", reasonRouters);
app.use("/requests", requestRouters);
app.use("/requests-images", requestsImageRouters);
app.use("/roles", roleRouters);
app.use("/scribblers", scribblerRouters);
app.use("/scribblers-images", scribblerImageRouters);
app.use("/subscriptions", subscriptionRouters);
app.use("/tasks", taskRouters);
app.use("/users", userRouters);
app.use("/users-categories", usersCategoriesRouters);
app.use("/users-networks", usersNetworkRouters);
app.use("/users-notifications", usersNotificationRouters);
app.use("/users-professions", usersProfessionsRouters);
app.use("/users-ranks", usersRankRouters);
app.use("/users-subscriptions", usersSubscriptionRouters);
app.use("/auth", authRoutes);
// app.use('/whatsapp', whatsappRoutes);
// app.use('/recover-Password', recoverPasswordRouters);

// Iniciar servidor
server.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);

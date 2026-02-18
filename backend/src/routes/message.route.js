import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllContacts, getChatsPartners, getMessagesByUserId,sendMessage } from "../controller/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

// import { sendMessage, getMessages, getConversations } from "../controller/message.controller.js";

const router = express.Router();

router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatsPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);


// router.get("/conversations", protectRoute, getConversations);
// router.get("/:id", protectRoute, getMessages);
// router.post("/send/:id", protectRoute, sendMessage);

export default router;

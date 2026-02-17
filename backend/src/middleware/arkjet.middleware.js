import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ message: "Rate Limit Exceeded. Please try later..." });
            }

            else if (decision.reason.isBot()) {
                return res.status(403).json({ message: "BOT Access Denied. Please try later..." });
            }
            else {
                return res.status(403).json({ message: "Access Deniden by Security Policy" });
            }
        } 

        //CHECK FOR SPOOFED BOT
        if (decision.results.some(isSpoofedBot)) {
            return NextResponse.json(
                { error: "Forbidden", reason: decision.reason },
                { status: 403 },
            );
        }

        next();
    } catch (error) {
        console.log("Arcjet Protection Error:", error);
        next();
    }
};
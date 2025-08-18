import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_STREAM_KEY;
const api_secret = process.env.STREAM_SECRET;
const user_id = "user_31NAqOSUflKci9XNtqMk5WYWl3V";

// Debug: Check what's actually loaded
console.log("API Key loaded:", api_key);
console.log("API Secret loaded:", api_secret ? "***SECRET_LOADED***" : "NOT_LOADED");
 
export async function GET() {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(user_id);
  return Response.json({ token: token });
}

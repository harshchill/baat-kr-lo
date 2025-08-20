import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.NEXT_PUBLIC_STREAM_KEY;
const api_secret = process.env.STREAM_SECRET;

export async function POST(req) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  //get user from req
  const user = await req.json();
  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("New user is created", token,user.data.id);

  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  //give this uses acces to all the public forum to communicate
  const slugs = ["python-room", "js-room", "react-room", "java-room", "c-room", "node-room"];

  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: item + " forum",
      members: [user.data.id],
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  });
  return Response.json({ message: "" });
}

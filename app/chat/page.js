import ChatForum from "@/components/ChatForum";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const user = await currentUser();

  return (
    <div className="bg-black min-h-[92vh] text-white">
      <main className="pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
              Live Chat
            </h1>
            <p className="mt-2 text-gray-400">
              Jump into the conversation in the general room, or browse topic forums.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Link href="/forum">
                <Button variant="outline" className="border-emerald-700/70 text-white">
                  Browse Forums
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl ring-1 ring-emerald-800 bg-emerald-950/40 backdrop-blur p-2 md:p-3">
            <div className="rounded-lg overflow-hidden bg-black/30">
              <ChatForum
                slug="general-room"
                clerkUser={{
                  id: user.id,
                  name: user.firstName || user.username || "Guest",
                  token: user.publicMetadata.token,
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

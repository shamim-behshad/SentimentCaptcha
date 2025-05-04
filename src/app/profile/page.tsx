import Image from "next/image";

export default function ProfilePage() {
  return (
    <main>
      <div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Passionate about building beautiful, user-friendly web apps with
            modern technologies like React, Tailwind CSS, and TypeScript.
          </p>
        </div>

        <div>
          <Image
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full border-4 border-indigo-500"
          />
          <a
            href=""
            className="text-gray-600 hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <a
            href="https://linkedin.com/in/janedoe"
            className="text-blue-700 hover:text-blue-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5h-3.55V9h3.41v1.56h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v6.34ZM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07Zm1.78 13.02H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.23 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Profile Image and Basic Info */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-indigo-500"
          />
          <h1 className="text-2xl font-bold mt-4">Jane Doe</h1>
          <p className="text-gray-600 mt-1">Frontend Developer at Acme Inc.</p>
        </div>

        {/* Bio */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Passionate about building beautiful, user-friendly web apps with modern technologies like React, Tailwind CSS, and TypeScript.
          </p>
        </div>

        {/* Contact / Social Links */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/janedoe"
            className="text-gray-600 hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.84 10.91.57.11.78-.25.78-.56v-2.17c-3.19.7-3.86-1.39-3.86-1.39-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.52-1.45.11-3.01 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.91-.39c.99 0 1.99.13 2.91.39 2.22-1.5 3.19-1.18 3.19-1.18.63 1.56.23 2.72.11 3.01.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.37-5.25 5.65.41.35.77 1.04.77 2.1v3.12c0 .31.21.68.79.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/janedoe"
            className="text-blue-700 hover:text-blue-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5h-3.55V9h3.41v1.56h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v6.34ZM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07Zm1.78 13.02H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.23 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

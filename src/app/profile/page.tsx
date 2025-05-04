import Image from 'next/image';

export default function ProfilePage() {
  return (
    <main>
      <div>
      
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Passionate about building beautiful, user-friendly web apps with modern technologies like React, Tailwind CSS, and TypeScript.
          </p>
        </div>


        <div >
        <Image
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-indigo-500"
          />
          <a
            href=""
            className="text-gray-600 hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>

          <a
            href="https://linkedin.com/in/janedoe"
            className="text-blue-700 hover:text-blue-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </div>
      </div>
    </main>
  );
}

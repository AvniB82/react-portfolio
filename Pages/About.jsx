import React from 'react';

function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-2xl mx-auto space-y-8">
          <div className="flex items-center justify-center">
            <Avatar className="w-32 h-32">
              <AvatarImage alt="Profile picture" src="/placeholder-avatar.jpg" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">Avni <Bicmeti></Bicmeti></h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              I'm a developer specializing in building web applications using React and Node.js. I have a
              passion for creating intuitive, dynamic user experiences.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-2">
              <ComponentIcon className="w-12 h-12" />
              <h3 className="text-xl font-semibold">React</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">Building dynamic user interfaces</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CodepenIcon className="w-12 h-12" />
              <h3 className="text-xl font-semibold">Node.js</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">Creating efficient and scalable backends</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
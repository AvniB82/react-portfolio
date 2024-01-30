import React from 'react';

function Footer() {
    return (
      <footer class="footer" className="w-full py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold">Phone:</h4>
              <a className="text-gray-300 hover:text-white" href="#">
                +44 7808 512293
              </a>
            </div>
            <div>
              <h4 className="font-bold">Email:</h4>
              <a className="text-gray-300 hover:text-white" href="#">
                bicmeti.avni@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" rel="noopener noreferrer" target="_blank">
              <GitHub className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <LinkedIn className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
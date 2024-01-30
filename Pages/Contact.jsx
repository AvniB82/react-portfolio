import React from 'react';

function Component() {
    return (
      <main className="flex flex-col items-center justify-center space-y-8 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <div className="w-full max-w-md">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
    )
  }
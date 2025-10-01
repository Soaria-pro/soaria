"use client";

import { Button } from "../components/Button";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Soaria Landing</h1>
      <Button onClick={() => alert("Shared Button works!")}>Click me</Button>
    </main>
  );
}
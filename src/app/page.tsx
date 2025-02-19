import AuthButton from "@/components/AuthButton"; // ✅ Correct Default Import

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to ClassLite</h1>
        <AuthButton />
      </div>
    </main>
  );
}

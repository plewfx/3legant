import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 items-center justify-center h-full">
      <div className="bg-[url(/sign-in-image.jpg)] bg-cover bg-center h-full flex justify-center text-2xl font-semibold pt-8">
        3legant.
      </div>
      <SignIn />
    </div>
  );
}
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="grid grid-cols-2 items-center h-full">
      <div className="bg-[url(/sign-in-image.jpg)] bg-cover bg-center h-full flex justify-center text-2xl font-semibold pt-8">
        3legant.
      </div>
      <SignUp />
    </div>
  );
}
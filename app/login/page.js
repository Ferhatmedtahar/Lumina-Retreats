import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center px-8 py-12 max-w-7xl  mx-auto">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}

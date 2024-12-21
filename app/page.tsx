import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <UserButton />
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}

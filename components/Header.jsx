import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter();
  const profilePic =
    "data:image/jpeg;base64,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";
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div onClick={() =>  router.push("/")} className="relative hidden  lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div onClick={() =>  router.push("/")} className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer mt-4">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle search input field  */}
        <div className="max-w-xs lg:mt-3">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 foucs:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() =>  router.push("/")} className="navBtn mt-1" />
          <MenuIcon className="h-12 md:hidden cursor-pointer" />
          {session ? (
            <>
                      <div className="relative navBtn">
                      <PaperAirplaneIcon className="navBtn rotate-45 " />
                      <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                        3
                      </div>
                    </div>
                    <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img
                    onClick={signOut}
                      src={session?.user?.image}
                      alt="Profile Pic"
                      className="h-10 w-10 rounded-full cursor-pointer"
                    />
                    </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;

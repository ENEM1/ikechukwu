import { Link, Outlet } from "react-router-dom";
import piLogo from "./assets/pi_logo-x.png";
import mineLogo from "./assets/mine.png";
import brainLogo from "./assets/brainstorm.png";
import blockchainLogo from "./assets/blockchain.png";

export default function Validate() {
  return (
    <main className="container mx-auto px-4 max-w-screen-xl">
      <Outlet />
      <div>
        <img src={piLogo} alt="" className="mx-auto max-w-[500px] w-full" />
      </div>
      <p className="font-semibold text-slate-700 text-xl text-center">
        Welcome to the Pi browser
      </p>
      <div className="mt-20">
        <div className="flex justify-around flex-wrap gap-5">
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
                </svg>
              </button>
            </a>

            <p>chat.pi</p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <Link to="/wallet">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </button>
            </Link>

            <p>wallet.pi</p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <img src={brainLogo} alt="" />
              </button>
            </a>

            <p>brainstorm.pi</p>
          </div>
        </div>
        <div className="flex mt-10 justify-around flex-wrap gap-5">
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <img src={mineLogo} alt="" />
              </button>
            </a>

            <p>mine.pi</p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <img src={blockchainLogo} alt="" />
              </button>
            </a>

            <p>blockchain.pi</p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </button>
            </a>

            <p>develop.pi</p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
                </svg>
              </button>
            </a>
            <p>kyc.pi</p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <a href="">
              <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
                </svg>
              </button>
            </a>

            <p>Fireside</p>
          </div>
        </div>
        <div className="grid place-content-center w-full my-10">
          <a href="">
            <button className="px-5 py-2 mx-auto rounded-sm bg-primary-1 text-white grid place-content-center">
              <p>Explore the Testnet Ecosystem</p>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

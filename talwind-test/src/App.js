import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div
        className="flex flex-col rounded-xl p-4"
        style={{
          border: "0.88px solid",
          backdropFilter: "saturate(180%) blur(14px)",
          background: "#ffffff0d",
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col rounded-b-xl py-4">
          <div className="flex justify-between">
            <h1 className="font-RubikBold">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div class="min-h-screen bg-[#121212]">
        <header class="fixed top-0 z-10 mx-auto w-full max-w-full bg-[#121212] p-6 text-white lg:px-10">
          <h1>DevUI</h1>
        </header>
        <div class="mx-auto flex w-full items-stretch justify-between gap-10">
          <div class="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
            <div class="w-full">
              <h1 class="mb-2 text-5xl font-extrabold text-white">Register</h1>
              <p class="text-xs text-slate-400">
                Before we start, please create your account
              </p>
            </div>
            <div class="my-14 flex w-full flex-col items-start justify-start gap-4">
              <div class="flex w-full flex-col items-start justify-start gap-2">
                <label class="text-xs text-slate-200">First name</label>
                <input
                  placeholder="Enter a first name..."
                  autocomplete="false"
                  class="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div class="flex w-full flex-col items-start justify-start gap-2">
                <label class="text-xs text-slate-200">Last name</label>
                <input
                  placeholder="Enter a last name..."
                  autocomplete="false"
                  class="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div class="flex w-full flex-col items-start justify-start gap-2">
                <label class="text-xs text-slate-200">Email</label>
                <input
                  placeholder="Enter an email..."
                  autocomplete="false"
                  class="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div class="flex w-full flex-col items-start justify-start gap-2">
                <label class="text-xs text-slate-200">Username</label>
                <input
                  placeholder="Enter a username..."
                  autocomplete="false"
                  class="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div class="flex w-full flex-col items-start justify-start gap-2">
                <label class="text-xs text-slate-200">Password</label>
                <input
                  placeholder="Enter a password..."
                  autocomplete="false"
                  type="password"
                  class="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div class="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="checkbox-1"
                  class="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
                  name="checkbox-1"
                />
                <div class="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
                  <svg
                    class="pointer-events-none hidden h-3 w-3 fill-current text-white"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#000000"
                        fill-rule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="ml-3 text-sm leading-6">
                  <label
                    for="checkbox-1"
                    class="text-sm font-medium text-white"
                  >
                    You will get emails on new features and releases
                  </label>
                </div>
              </div>
              <div class="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="checkbox-2"
                  class="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
                  name="checkbox-2"
                />
                <div class="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
                  <svg
                    class="pointer-events-none hidden h-3 w-3 fill-current text-white"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#000000"
                        fill-rule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="ml-3 text-sm leading-6">
                  <label
                    for="checkbox-2"
                    class="text-sm font-medium text-white"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
              <button class="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
                Create Account
              </button>
              <p class="my-14 text-sm font-light text-white">
                Already registered?
                <span class="cursor-pointer font-bold hover:underline">
                  Sign in to your account
                </span>
              </p>
            </div>
          </div>
          <div class="fixed right-0 z-20 hidden h-screen w-1/2 md:block">
            <img
              class="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="register_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

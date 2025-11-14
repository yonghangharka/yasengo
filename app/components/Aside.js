import Header from "./Header";

export default function Aside() {
  return (
    <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 p-6 flex flex-col justify-between">
      <div>
        <Header />
      </div>

      {/* <div className="text-xs space-y-1 text-center md:text-left mt-8 md:mt-0">
          <p className="font-semibold">Nizzah</p>
          <p>London Photographer</p>
          <p>
            Instagram{" "}
            <a href="#" className="underline">
              @nizzah
            </a>
          </p>
          <p>
            <a href="mailto:hi@nizzah.com" className="underline">
              hi@nizzah.com
            </a>
          </p>
          <p className="mt-4">
            Copyright Nizzah <br />
            All rights reserved
          </p>
        </div> */}
    </aside>
  );
}

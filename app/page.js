import Image from "next/image";
// import bg from "../public/main.jpg";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      {/* <aside className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 p-6 flex flex-col justify-between">
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
        </div> 
      </aside> */}

      {/* Main content */}
      <section className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Image
              src="/main.jpg"
              alt="Sample"
              height={400}
              width={600}
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>

          <h2 className="text-xl font-bold mb-4">About</h2>

          <p className="mb-4 leading-relaxed text-sm md:text-base">
            I'm <span className="text-cyan-400 font-extrabold">Harka Hang</span>{" "}
            and many more, you can called that.This is small demo of my hobby of
            mine.I'm using NEXT for this one which i learned while ago but
            almost forgot all concept.
          </p>

          <p className="mb-6 leading-relaxed text-sm md:text-base">
            In my work, i pretty much like bashing peoples and for addititional
            i dont know what to write so Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nisi nec tincidunt fringilla, metus
            justo facilisis turpis, sit amet ullamcorper nunc sapien vel odio.
            Nulla facilisi. Duis eget sapien vel neque fermentum consequat.
            Aenean vulputate, turpis ac viverra tempus, tortor risus convallis
            nisl, nec facilisis orci justo non mi.
          </p>

          {/* <h3 className="font-bold mb-2">Find me on</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>
              Shortlistee,{" "}
              <a href="#" className="underline">
                Portrait of Britain 2022
              </a>
            </li> */}
          {/* <li>
              Shortlistee,{" "}
              <a href="#" className="underline">
                Portrait of Humanity 2022
              </a>
            </li>
            <li>
              Winner,{" "}
              <a href="#" className="underline">
                Portrait of Britain 2018
              </a>
            </li>
            <li>
              Nominee,{" "}
              <a href="#" className="underline">
                Fine Art Awards (FAPA) 2019–20
              </a>
            </li> 
          </ul>*/}
        </div>
      </section>
    </div>
  );
}

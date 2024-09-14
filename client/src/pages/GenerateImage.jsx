import React from "react";
import { BsStars } from "react-icons/bs";

const GenerateImage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-around lg:items-center pb-11">
        {/* left portion  */}
        <div className="flex flex-col gap-4 mt-32 items-center">
          <form onSubmit={handleSubmit}>
            <textarea
              name="prompt"
              id="prompt"
              placeholder="Enter and your prompt and see the magic begin✨"
              className="block outline-none  border border-gray-700 rounded-xl  w-[350px] sm:min-w-[400px] pl-4 pr-4 pt-2 pb-2 bg-transparent min-h-[300px]"
            ></textarea>
          </form>
          <button className="text-lg bg-customButton2 text-white font-bold py-3 px-20 rounded mt-7 w-[290px] hover:cursor-pointer hover:opacity-60 duration-300 ease-in-out">
            <div className="flex gap-1 items-center">
              <BsStars />
              Generate
            </div>
          </button>
        </div>

        {/* right portion  */}
        <div className="sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[600px] border-2 rounded-xl border-dashed border-yellow-300 p-2 mt-32 justify-center items-center overflow-hidden">
          <div className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            atque dolorem nobis sed nesciunt similique vero minus eligendi qui
            pariatur, distinctio earum, quidem amet magni, doloribus odio
            asperiores porro consectetur id officia dicta placeat? Cupiditate
            alias sapiente repudiandae sit, voluptatum dolorem! Alias ipsam
            perspiciatis nam consequuntur commodi! Aspernatur tempore sint
            numquam adipisci repellat illo veniam aperiam iste facere! Incidunt
            quos ipsam numquam inventore, totam molestias quod amet, odio
            dolores aliquid, facilis nihil in non ullam praesentium velit dicta
            dolore quibusdam assumenda. Nesciunt ullam officia sed
            necessitatibus? Sint inventore reiciendis enim officia assumenda
            reprehenderit beatae dolor, repudiandae minus recusandae cumque
            debitis. Voluptates in sed excepturi est repellendus ad, fugiat amet
            facilis ducimus natus similique tempore, sapiente suscipit delectus
            laboriosam perspiciatis explicabo?
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateImage;

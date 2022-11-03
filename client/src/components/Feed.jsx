import { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import Post from "./Post";
import Sidebar from "./Sidebar";
import { faker } from "@faker-js/faker";
import { InstaContext } from "../context/InstaContext";
import { FaPhotoVideo } from "react-icons/fa";

const Feed = () => {
  const { isModalOpen, closeModal } = useContext(InstaContext);
  const [file, setFile] = useState("");
  const [posts, setPosts] = useState([]);
  const [story, setstore] = useState([]);
  const currentImage = useRef(null);

  const [media, setMedia] = useState({
    src: "",
    isUploading: false,
    caption: "",
  });

  useEffect(() => {
    setstore(
      [...Array(10)].map(() => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        image: faker.image.image(),
      }))
    );
  }, []);

  useEffect(() => {
    const reader = new FileReader();

    const handleEvent = (e) => {
      switch (e.type) {
        case "load":
          return setMedia((prev) => ({
            ...prev,
            src: reader.result,
          }));
        case "error":
          console.log(e);
          return toast.error("something not working");
        default:
          return;
      }
    };

    if (file) {
      reader.addEventListener("load", handleEvent);
      reader.addEventListener("error", handleEvent);
      reader.readAsDataURL(file);
    }

    return () => {
      reader.removeEventListener("load", handleEvent);
      reader.removeEventListener("error", handleEvent);
    };
  }, [file]);

  const handleRemovePost = () => {
    setFile("");
    currentImage.current.src = "";
  };

  return (
    <div className=" h-screen w-screen bg-[#FAFAFA]">
      <Header />
      <Modal closeModal={closeModal} isOpen={isModalOpen}>
        <div className=" h-screen w-screen max-w-[550px] max-h-[70vh]  flex flex-col items-center">
          <div className="w-full py-4 text-xl font-light text-center border-b border-black">
            Create new post
          </div>
          <div className="flex  flex-col items-center justify-center w-full h-full">
            {!file ? (
              <>
                <div>
                  <FaPhotoVideo className="w-36 h-36 pb-10" />
                </div>
                <label
                  htmlFor="post"
                  className="bg-[#0095F6] py-2 px-4 text-white active:scale-95 transform transition  disabled:bg-opacity-50 select-none cursor-pointer disabled:scale-100 rounded text-sm font-semibold"
                >
                  Select from computer
                </label>

                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  value={file.name}
                  type="file"
                  name="post"
                  id="post"
                  className="hidden"
                  multiple={false}
                  accept="image/jpeg,image/png"
                />
              </>
            ) : (
              <div className="flex flex-col  gap-y-4">
                <input
                  type="image"
                  src={media.src}
                  className=" h-60 "
                  ref={currentImage}
                />
                <input
                  type="text"
                  name="caption"
                  id="caption"
                  placeholder="Type your caption (optional...)"
                  onChange={(e) =>
                    setMedia((prev) => ({ ...prev, caption: e.target.value }))
                  }
                  value={media.caption}
                  className="w-full px-4 py-2 bg-transparent border rounded-3xl  outline-none hover:bg-transparent focus:bg-transparent focus:border-gray-400"
                />
                <div className="flex items-center justify-center w-full gap-x-6">
                  <button
                    onClick={handleRemovePost}
                    className="bg-[#0095F6] py-2 px-4 text-white active:scale-95 transform transition  disabled:bg-opacity-50 select-none cursor-pointer disabled:scale-100 rounded text-xl font-semibold"
                  >
                    Remove
                  </button>
                  <button className="bg-[#0095F6] py-2 px-4 text-white active:scale-95 transform transition  disabled:bg-opacity-50 select-none cursor-pointer disabled:scale-100 rounded text-xl font-semibold">
                    Upload
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>

      <div className="grid lg:w-3/5 sm:w-screen  max-w-screen-lg grid-cols-3 gap-6 mx-auto mt-20 ">
        <div className="flex flex-col w-full col-span-2 space-y-5  rounded-lg  ">
          {/* stories section */}
          <section className="flex rounded-lg p-4 space-x-4 pb-6 overflow-x-scroll  bg-white border border-black/10   scrollbar-thumb-blue-300 scrollbar-track-blue-700  scrollbar-thin dark:scrollbar-thumb-gray-700 dark:scrollbar-track-blue-100">
            {story.map((item, i) => (
              <div
                key={i}
                className="rounded-full w-14 ring-[2px] ring-pink-500 ring-offset-2 h-14  flex-none"
              >
                <img
                  src={item.avatar}
                  alt="img"
                  className="rounded-full w-14 h-14 "
                />
              </div>
            ))}
          </section>

          {/* posts section */}
          <section className="flex flex-col gap-y-3">
            {story.map((post, i) => (
              <Post key={i} image={post.image} />
            ))}
          </section>
        </div>

        {/* this is our sidebar */}
        <div className="fixed right-[15%] max-w-[320px]">
          <div className="flex">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

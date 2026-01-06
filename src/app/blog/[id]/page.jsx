import { Rocket } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

const BlogDetail = () => {
  const nextBlog = [
    {
      title: "Step-by-Step Guide to Building a Successful Startup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis?",
      image: "/images/image.png",
      link: "/blog/1",
    },
    {
      title: "Step-by-Step Guide to Building a Successful Startup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis?",
      image: "/images/image.png",
      link: "/blog/2",
    },
  ];
  return (
    <>
      <div className="w-11/12 flex flex-col gap-6 justify-center items-center mx-auto py-10">
        {/* Blog Publisher and Title */}
        <div className="w-full md:w-8/12">
          {/* Publisher */}
          <h5 className="text-purple text-lg md:text-xl font-bold">
            Andrew Jonson
          </h5>
          <p className="text-xs md:text-sm text-gray-400 mb-3">
            Posted on 26 Dec 2025
          </p>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-surface mb-3">
            Step-by-Step Guide to Building a Successful Startup
          </h2>
          <p className="text-surface font-bold text-xs md:text-sm flex items-center gap-1">
            <Rocket className="w-5 h-5 text-flame" />
            Startups
          </p>
        </div>

        {/* Blog Image */}
        <div className="w-full md:w-8/12">
          <Image
            src="/images/image.png"
            alt="Blog Image"
            width={800}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="w-full md:w-8/12">
          <h2 className="text-xl md:text-2xl font-bold text-surface mb-2 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            officiis?
          </h2>
          <p className="text-gray-400 text-xs md:text-sm tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            similique maiores vero dicta quaerat velit harum! Culpa recusandae
            nam blanditiis explicabo odio sint dicta aliquid eaque enim alias
            cumque molestiae maxime nobis est nisi eum, esse labore quae. Amet
            quibusdam expedita sequi laudantium voluptatibus ea ratione cumque
            quisquam beatae quidem at eos quos corporis in inventore, tempora
            perspiciatis eum nam ipsum ducimus? Dolor dolore alias aliquid
            incidunt. Corrupti officiis hic expedita quas ducimus? Inventore
            illo, ab consectetur doloremque doloribus impedit.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-surface mb-2 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            officiis?
          </h2>
          <p className="text-gray-400 text-xs md:text-sm tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            similique maiores vero dicta quaerat velit harum! Culpa recusandae
            nam blanditiis explicabo odio sint dicta aliquid eaque enim alias
            cumque molestiae maxime nobis est nisi eum, esse labore quae. Amet
            quibusdam expedita sequi laudantium voluptatibus ea ratione cumque
            quisquam beatae quidem at eos quos corporis in inventore, tempora
            perspiciatis eum nam ipsum ducimus? Dolor dolore alias aliquid
            incidunt. Corrupti officiis hic expedita quas ducimus? Inventore
            illo, ab consectetur doloremque doloribus impedit.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-surface mb-2 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            officiis?
          </h2>
          <p className="text-gray-400 text-xs md:text-sm tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            similique maiores vero dicta quaerat velit harum! Culpa recusandae
            nam blanditiis explicabo odio sint dicta aliquid eaque enim alias
            cumque molestiae maxime nobis est nisi eum, esse labore quae. Amet
            quibusdam expedita sequi laudantium voluptatibus ea ratione cumque
            quisquam beatae quidem at eos quos corporis in inventore, tempora
            perspiciatis eum nam ipsum ducimus? Dolor dolore alias aliquid
            incidunt. Corrupti officiis hic expedita quas ducimus? Inventore
            illo, ab consectetur doloremque doloribus impedit.
          </p>
        </div>
      </div>

      {/* Next Blog List */}
      <div className="w-11/12 mx-auto my-10">
        <h3 className="text-surface text-2xl font-bold tracking-wider">
          What to read next
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nextBlog.map((data, i) => (
            <Link href={data.link} className="py-3" key={i}>
              <Image
                src={data.image}
                alt="hero"
                width={300}
                height={300}
                priority
                className="object-cover w-full h-72 aspect-square mb-3"
              />

              <p className="text-sm text-gray-400 font-normal tracking-wider mb-3">
                By <span className="text-purple">John Doe</span> | 26 Dec 2025
              </p>
              <h5 className="text-surface text-xl font-bold tracking-wider max-w-96">
                {data.title}
              </h5>
              <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                {data.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

import React from "react";

const Blog = () => {
  return (
    <section className="pt-8 lg:pt-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto py-24 md:flex-row flex-col items-center">
        <h2 className="text-5xl md:text-8xl text-center pb-28">Blog</h2>
        <div className="grid grid-cols-1 gap-10">
          <article className="flex flex-col gap-6 bg-slate-200 p-8">
            <h3 className="text-4xl">What is the purpose of react router?</h3>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              iusto aperiam amet molestiae quasi obcaecati enim distinctio.
              Animi non at voluptates ea! Veniam fugiat voluptas quidem illum
              nemo eum odit.
            </p>
          </article>
          <article className="flex flex-col gap-6 bg-slate-200 p-8">
            <h3 className="text-4xl">What is context API? How does it work?</h3>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              iusto aperiam amet molestiae quasi obcaecati enim distinctio.
              Animi non at voluptates ea! Veniam fugiat voluptas quidem illum
              nemo eum odit.
            </p>
          </article>
          <article className="flex flex-col gap-6 bg-slate-200 p-8">
            <h3 className="text-4xl">What is useRef?</h3>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              iusto aperiam amet molestiae quasi obcaecati enim distinctio.
              Animi non at voluptates ea! Veniam fugiat voluptas quidem illum
              nemo eum odit.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;

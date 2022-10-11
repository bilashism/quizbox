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
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
              <br />
              <br />
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information.
            </p>
          </article>
          <article className="flex flex-col gap-6 bg-slate-200 p-8">
            <h3 className="text-4xl">What is context API? How does it work?</h3>
            <p className="text-lg">
              <strong> What is Context API?</strong> <br /> The React Context
              API is a way for a React app to effectively produce global
              variables that can be passed around. This is the alternative to
              "prop drilling" or moving props from grandparent to child to
              parent, and so on. Context is also touted as an easier, lighter
              approach to state management using Redux. Context API is a (kind
              of) new feature added in version 16.3 of React that allows one to
              share state across the entire app (or part of it) lightly and with
              ease.
              <br />
              <br />
              <br />
              <strong>React context API: How it works?</strong> <br />{" "}
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state
            </p>
          </article>
          <article className="flex flex-col gap-6 bg-slate-200 p-8">
            <h3 className="text-4xl">What is useRef?</h3>
            <p className="text-lg">
              useRef hook is part of the React Hooks API. It is a function which
              takes a maximum of one argument and returns an Object. The
              returned object has a property called current whose value is the
              argument passed to useRef. If you invoke it without an argument,
              the returned object's current property is set to undefined.
              <br />
              <br />
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;

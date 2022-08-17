import Head from "next/head";
import Image from "next/image";

function Blog({ data, uwu }) {
  return (
    <div>
      <Head>
        <title>My blog</title>
        <meta name="description" content="My first Next.js Project" />
      </Head>
      <h1>blog page</h1>
      <p>{ uwu }</p>
      <p>{JSON.stringify(data)}</p>

      {/* 4.7mb 700ms -> 245b 79ms */}
      {/* <img src="/bg.jpg" alt="" /> */}

      {/* 1mb 35ms -> 230b 13ms */}
      <Image
        src="/bg.jpg"
        alt=""
        height="5568"
        width="3712"
        layout="responsive"
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      data,
      uwu: "owo",
    },
  };
}

// this will make this to compile this component into an html file,
// so, when it runs on production, this will be static.

// export async function getStaticProps(context) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//       uwu: "owo",
//     },
//   };
// }

export default Blog;

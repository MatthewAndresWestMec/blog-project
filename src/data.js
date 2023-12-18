// let BLOG = require('../server/models/blog');
// const express = require('express');

// require('dotenv').config();
// const connectDB = require('../server/db/connect');

// const blogData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     blogTitle: 'Exploring React Hooks',
//     picture: 'https://example.com/react-hooks.jpg',
//     shortDescription:
//       'Learn how to use React Hooks to manage state and side effects.',
//     blogContent: `
//       <p>In this comprehensive exploration, we will dive deep into the fascinating world of React Hooks and unravel the intricacies of state management and handling side effects in React applications.</p>
//       <p>Our journey begins with a thorough understanding of the useState and useEffect hooks, laying the foundation for effective state management and the seamless handling of asynchronous operations. As we progress, we'll venture into the realm of more advanced hooks, including useContext and useReducer, empowering you to wield the full power of React Hooks in your projects.</p>
//       <p>By the conclusion of this enlightening blog, you will possess the knowledge and skills needed to employ React Hooks confidently, transforming your approach to React development and paving the way for cleaner, more maintainable code.</p>
//     `,
//     userEmail: 'john.doe@example.com',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     blogTitle: 'Mastering Responsive Web Design',
//     picture: 'https://example.com/responsive-design.jpg',
//     shortDescription:
//       'Unlock the secrets of creating responsive and visually appealing web designs.',
//     blogContent: `
//       <p>Embark on a journey to mastery as we unravel the secrets of crafting responsive web designs that captivate and engage users across diverse devices and screen sizes.</p>
//       <p>We'll delve into the principles of responsive design, exploring flexible grids, media queries, and other essential techniques that form the backbone of modern web development. Practical examples and real-world scenarios will guide you through the intricacies of creating layouts that seamlessly adapt to various devices, providing a stellar user experience.</p>
//       <p>Whether you're a seasoned developer or just starting, this blog is your compass for navigating the dynamic landscape of responsive web design, ensuring your websites stand out in today's multi-device digital ecosystem.</p>
//     `,
//     userEmail: 'jane.smith@example.com',
//   },
//   {
//     id: 3,
//     name: 'Matthew A',
//     blogTitle: 'Getting Started with GraphQL',
//     picture: 'https://example.com/graphql.jpg',
//     shortDescription:
//       'Introduction to GraphQL and how to use it in your web applications.',
//     blogContent: `
//       <p>Embark on a journey to mastery as we unravel the secrets of crafting responsive web designs that captivate and engage users across diverse devices and screen sizes.</p>
//       <p>We'll delve into the principles of responsive design, exploring flexible grids, media queries, and other essential techniques that form the backbone of modern web development. Practical examples and real-world scenarios will guide you through the intricacies of creating layouts that seamlessly adapt to various devices, providing a stellar user experience.</p>
//       <p>Whether you're a seasoned developer or just starting, this blog is your compass for navigating the dynamic landscape of responsive web design, ensuring your websites stand out in today's multi-device digital ecosystem.</p>
//     `,
//     userEmail: 'matthew.a@example.com',
//   },
//   {
//     id: 4,
//     name: 'Alice Johnson',
//     blogTitle: 'Deep Dive into Node.js',
//     picture: 'https://example.com/nodejs.jpg',
//     shortDescription:
//       'Explore the capabilities and nuances of Node.js for building scalable and efficient server-side applications.',
//     blogContent: `
//       <p>Embark on a captivating journey into the heart of Node.js, the runtime that has revolutionized server-side JavaScript development. This blog provides an in-depth exploration of Node.js, covering its architecture, event-driven nature, and asynchronous capabilities.</p>
//       <p>We'll guide you through practical examples, demonstrating how to build scalable and efficient server-side applications using Node.js. From handling HTTP requests to working with databases, you'll gain the skills needed to leverage Node.js effectively in your projects.</p>
//       <p>Whether you're a backend developer or curious about server-side JavaScript, this blog is your gateway to unlocking the full potential of Node.js in the ever-evolving landscape of web development.</p>
//     `,
//     userEmail: 'alice.johnson@example.com',
//   },
//   {
//     id: 5,
//     name: 'Matthew A',
//     blogTitle: 'Securing Your Web Applications',
//     picture: 'https://example.com/security.jpg',
//     shortDescription:
//       'Learn essential strategies and best practices for enhancing the security of your web applications.',
//     blogContent: `
//       <p>Dive into the world of web application security as we explore essential strategies and best practices to safeguard your applications against evolving threats and vulnerabilities. Security is a paramount concern in today's digital landscape, and this blog equips you with the knowledge to implement robust security measures.</p>
//       <p>We'll cover topics such as secure authentication, authorization mechanisms, and protection against common web vulnerabilities. Practical examples and case studies will guide you in implementing security best practices, ensuring the resilience of your web applications in the face of potential threats.</p>
//       <p>Whether you're a seasoned developer or just starting to focus on security, this blog serves as your comprehensive guide to fortifying your web applications and building a secure digital environment.</p>
//     `,
//     userEmail: 'matthew.a@example.com',
//   },
// ];

// async function pushData() {
//   await connectDB(
//     'mongodb+srv://mandre361:1234@matthewcluster.chtewfp.mongodb.net/Blog-Project'
//   );
//   for (let i = 0; i < blogData.length; i++) {
//     const data = new BLOG(blogData[i]);
//     await data.validate();
//     await data.save();
//   }
// }

// pushData();

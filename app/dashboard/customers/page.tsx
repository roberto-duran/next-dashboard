// 'use client'
//@ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
export default async function Customers() {

  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // const users = await fetch(`https://jsonplaceholder.typicode.com/users`,
  //   {cache: 'force-cache'}
  // )

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  // const users = await fetch(
  //   `https://jsonplaceholder.typicode.com/users`,
  //   { cache: 'no-store' }
  // )

  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    next: { revalidate: 3600 },
  })

  const usersJson = await users.json()

  return (
    <div>
      <h1>Customers</h1>
      <table className="min-w-full mb-10">
        <thead className="bg-white border-b">
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Name
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              email
            </th>
          </tr>
        </thead>
        <tbody>
          {usersJson.map((user:any) => (
            <tr key={user.id} className="bg-gray-100 border-b">
              <td className="px-6 py-4">
                {user.name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SyntaxHighlighter>
        {`function Customers() {
  return "COMO ESTAMOS"
}`}
      </SyntaxHighlighter>

    </div>
  );
};

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="p-8">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Endpoint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="font-mono">GET /</span>
            </td>
            <td>Home:</td>
          </tr>
          <tr>
            <td>
              <span className="font-mono">GET /api</span>
            </td>
            <td>Get all records:</td>
          </tr>
          <tr>
            <td>
              <span className="font-mono">POST /api</span>
            </td>
            <td>Add new records:</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home

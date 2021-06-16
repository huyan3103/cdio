const Table = (props) => {
  const { employers } = props
  return (
    <>
      <div className="mb-3">
        <h2>List Employee want to hire you</h2>
      </div>
      <table className="table table-striped table-bordered border-dark">
        <thead>
          <tr>
            <th className="col-3">Name</th>
            <th className="col-2">Salary</th>
            <th className="col-3">Address</th>
            <th className="col-1">Time</th>
            <th className="col-3"></th>
          </tr>
        </thead>
        {employers.map((employer) => {
          return (
            <tbody>
              <tr>
                <td>{employer.employerName}</td>
                <td>9</td>
                <td>{employer.employerAdd}</td>
                <td>tiadaasasd</td>

                <td>
                  <button type="button" className="btn-primary">
                    Accept
                  </button>
                  <button type="button" className="ms-2 btn-danger">
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </>
  )
}

export default Table

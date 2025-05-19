function Table () {
    return (
        <>
        <h1>REACT TABLE</h1>
      <table border={1}>
        <thead>
          <th>S/N</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Career</th>
          <th>Phone</th>
        </thead>

        <tr>
          <td>1.</td>
          <td>Enyim</td>
          <td>Chinonso</td>
          <td>Software Engineer</td>
          <td>08108111761</td>
        </tr>

        <tr>
          <td>2.</td>
          <td>Yamine</td>
          <td>Lamal</td>
          <td>Footballer</td>
          <td>08108111761</td>
        </tr>

        <tr>
          <td>3.</td>
          <td>Vinicius</td>
          <td>Junior</td>
          <td>Football</td>
          <td>08108111761</td>
        </tr>

        <tr>
          <td>4.</td>
          <td>Bellingham</td>
          <td>Jude</td>
          <td>Football</td>
          <td>08108111761</td>
        </tr>
      </table>
      </>
    )
}

export default Table;
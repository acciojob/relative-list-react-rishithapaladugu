import React from 'react'

const App = () => {
  const relatives = ["Uncle", "Aunt", "Cousin", "Grandparents", "Brother"]
  return (
    <div id="main">
          <h1>My Relatives List for Diwali 🎆</h1>
      <ol key="relativeList">
        {relatives.map((name, index) => (
          <li key={`relativeListItem${index + 1}`}>{name}</li>
        ))}
      </ol>
    </div>
  )
}

export default App

import {useState} from 'react'

const Table = ()=>{
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [rows, setRows] = useState([
    {
      name: 'name',
      age: 56
    },
    {
      name: 'name',
      age: 56
    },
    {
      name: 'name',
      age: 56
    },
    {
      name: 'name',
      age: 56
    },
    {
      name: 'name',
      age: 56
    },
  ])
  const [selectedRows, setSelectedRows] = useState([])

  const addToRow = ()=>{
    if (name && age) {
      setRows(rows=>
        [...rows, {
          name: name,
          age: age
        }]
      )
      setName('')
      setAge('')
    } else {
      alert('Please fill all fields')
    }
  }

  const deleteRow = (i)=>{
    let temp = [...rows]
    temp.splice(i, 1)
    setRows(temp)
  }

  const selectRow = (e, row) =>{
    if (e.target.checked) {
      setSelectedRows(selectedRows=>
        [...selectedRows, row]
      )
    } else {
      const temp = [...selectedRows]
      const index = temp.indexOf(row)
      temp.splice(index, 1)
      setSelectedRows(selectedRows=>temp)
    }
  }

  const selectAll = (e)=>{
    if (e.target.checked) {
      setSelectedRows(rows)
    } else {
      setSelectedRows([])
    }
  }

  const deleteSelectedRows = ()=>{
    let allRows = [...rows]
    for (let i = 0; i < selectedRows.length; i++) {
      const index = allRows.indexOf(selectedRows[i])
      allRows.splice(index, i)
    }
    setRows(allRows)
    setSelectedRows([])
  }

  return (
    <div className='container'>
     <div className="card">
     <div className="card-body">
      <table className='table'>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={(el)=>selectAll(el)} checked={selectedRows.length > 0 && selectedRows.length === rows.length} />  
            </th>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows && rows.length > 0?
            rows.map((e, i)=>(
              <tr key={i}>
                <td>
                  <input type="checkbox" onChange={(el)=>selectRow(el, e)} checked={selectedRows.includes(e)} />  
                </td>
                <td>{i + 1}.</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>deleteRow(i)}>Delete</button>
                </td>
              </tr>
            ))
          :null}
          
          <tr>
            <td></td>
            <td>{rows.length + 1}.</td>
            <td>
              <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className="form-control" placeholder="Enter name" />
            </td>
            <td>
              <input type="number" onChange={(e)=>{setAge(e.target.value)}} value={age} className="form-control" placeholder="Enter age" />
            </td>
            <td>
              <button type="button" className="btn btn-primary" onClick={addToRow}>Add To Row</button>
              <br/>
              {selectedRows && selectedRows.length > 0 ?
              <button type="button" className="btn btn-danger" onClick={deleteSelectedRows}>Delete Selected Rows</button>
              :null}
            </td>
          </tr>
        </tbody>
      </table>
     </div>
     </div>
    </div>
  )
}

export default Table
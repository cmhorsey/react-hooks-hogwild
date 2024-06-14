import React from 'react'

function PigForm({ hogs, allHogs, setAllHogs }) {

  return (
    <ul>
      <form>
        <li>
        <label>
          Name
          <input
            type="text"
            name="text"
          />
        </label>
        <label>
          Specialty
          <input
            type="text"
            name="text"
          />
        </label>
        <label>
          Weight
          <input
            placeholder='Please enter a number'
            type="text"
            name="text"
          />
        </label>
      </li>
      <li>
        <label>
          Greased?
          <input
            type="checkbox"
            // onChange={(e) => console.log(todo.id, e.target.checked)}
            // checked={todo.completed}
          />
        </label>
      </li>
      <label>
        Highest Medal Achieved
        <select name="category">
          <option value=""disabled selected>Select Medal</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
      </label>
      <li>
        <input type="submit" value="Add Hog" />
      </li>
      </form>
    </ul>
  )
}

export default PigForm

import './formCreateEmployee.scss'

export const FormCreateEmployee = () => {
  return (
    <div className='container'>
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" name="date-of-birth" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" name="start-date" />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="street"/>

                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" />

                <label htmlFor="state">State</label>
                <select name="state" id="state"></select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" name="zip-code" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
        </form>

        <button>Save</button>
    </div>
  )
}
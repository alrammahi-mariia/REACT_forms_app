import React from "react";

const Form = (props) => {
  return (
    <div className="form">
      <form onChange={props.change} onSubmit={props.submit}>
        <label htmlFor="First name"> First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          defaultValue={props.firstname}
        />
        <label htmlFor="Last name">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          defaultValue={props.lastname}
        />
        <label htmlFor="Phonenumber">Phone number</label>
        <input type="number" name="phone" required defaultValue={props.phone} />
        <label htmlFor="Role">Role</label>
        <select name="role" id="role" required defaultValue={props.role}>
          <option value="" invalid="true">
            Please choose a role
          </option>
          <option value="CEO">CEO</option>
          <option value="Frontend developer">Frontend developer</option>
          <option value="Backend developer">Backend developer</option>
          <option value="Designer">Designer</option>
          <option value="Marketing manager">Marketing manager</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="Message">Message</label>
        <textarea
          id="message"
          type="textarea"
          name="message"
          placeholder="Message"
          required
          defaultValue={props.message}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

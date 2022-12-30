import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        console.log('name', name);
    }}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

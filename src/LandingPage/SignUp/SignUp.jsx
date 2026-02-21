export default function SignUp() {
  return (
    <form action="http://localhost:3000/signup" method="post">
      <label htmlFor="">Username</label>
      <input type="text" name="username"/><br />
      <label htmlFor="">Email</label>
      <input type="email" name="email"/><br />
      <button className="btn btn-success">Submit</button>
    </form>
  );
}

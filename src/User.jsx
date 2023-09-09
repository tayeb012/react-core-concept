export default function User({ user }) {
  // distracture
  const { name, email } = user;
  console.log(user);
  return (
    <>
      <div
        style={{
          border: "5px solid red",
          borderRadius: "20px",
          padding: "10px",
          margin: "20px",
        }}
      >
        <h2>User Name: {name}</h2>
        <h2>User email: {user.email}</h2>
      </div>
    </>
  );
}

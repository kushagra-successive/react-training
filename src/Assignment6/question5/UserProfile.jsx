const UserProfile = ({ name, email, phoneNo }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Email:{email}</h1>
      <h1>PhoneNo:{phoneNo}</h1>
    </div>
  );
};

export default UserProfile;

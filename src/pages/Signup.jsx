import Tamplate from "../components/Tamplate";

const Signup = ({ setIsLoggedIn}) => {

  return (
    <div>
      <Tamplate
        title={"Join the millions learn to code with Code-Hex for free"}
        desc1={"Build Skills for today, tomorrow, and beyond."}
        desc2={"Education to fitire=proof your career."}
        image={"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        formtype={"Signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;

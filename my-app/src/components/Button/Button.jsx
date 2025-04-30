export default function Button({children}) {
  return <button
    style={{
      fontFamily: "Poppins",
      fontSize:"18px",
      fontWeight:"600",
      backgroundColor: "black",
      borderRadius: "5px",
      color: "#34C94B",
      height:"47px",
      width:"170px"
     }}
  >
   {children}
  </button>;
}

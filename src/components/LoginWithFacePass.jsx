// import React, { useState } from 'react';
// import { ScanFace } from 'lucide-react';

// const be_endpoint = ""

// const createChallenge = async ({ email }) => {
//   const response = await fetch(be_endpoint + "/Public/login", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       "email": email
//     })
//   });

//   const data = await response.json();
//   return data;
// };

// const challengeApproval = async ({challengeId}) => {
//     //prompt every 500 ms
//     const response = await fetch(be_endpoint + "/Public/checkChallengeStatus", {
//         method: "GET",
//         headers: {
//         "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "challengeId": challengeId
//         })

//     })

//     const data = await response.json();
//     return data;

// };


// const LoginWithFacePass = ({ setJwt, setStatus }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [email, setEmail] = useState("");

//   const handleSubmit = () => {
//     setShowPopup(false);

//     console.log("Email:", email);

//     setJwt("jwt: dsfaiohsd");
//     setStatus("approved");
//   };

//   const styles = {
//     overlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: "transparent",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 1000

//     },
//     modal: {
//       background: "#18181b",
//       padding: "24px",
//       borderRadius: "10px",
//       width: "320px",
//       border: "1px solid #27272a",
//       boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
//       color: "white"
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       marginTop: "10px",
//       marginBottom: "16px",
//       borderRadius: "6px",
//       border: "1px solid #3f3f46",
//       background: "#09090b",
//       color: "white"
//     },
//     buttonRow: {
//     display: "flex",
//     gap: "10px",
//     justifyContent: "flex-end",
//     marginTop: "10px"
//   },

//   cancelButton: {
//     padding: "10px 16px",
//     borderRadius: "6px",
//     border: "1px solid #3f3f46",
//     background: "#18181b",
//     color: "#e4e4e7",
//     fontWeight: "500",
//     cursor: "pointer",
//     transition: "all 0.2s ease"
//   },

//   continueButton: {
//     padding: "10px 16px",
//     borderRadius: "6px",
//     border: "none",
//     background: "#22c55e",
//     color: "white",
//     fontWeight: "600",
//     cursor: "pointer",
//     transition: "all 0.2s ease"
//   }
//   };

//   return (
//     <>
//       <button
//         className="demo-btn standard-btn"
//         onClick={() => setShowPopup(true)}
//       >
//         <ScanFace size={24} strokeWidth={3} />
//         Login with FacePass
//       </button>

//       {showPopup && (
//         <div style={styles.overlay}>
//           <div style={styles.modal}>
//             <h3>Enter your email</h3>

//             <input
//               style={styles.input}
//               type="email"
//               placeholder="your@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <div style={styles.buttonRow}>
//                 <button
//                     style={styles.cancelButton}
//                     onMouseEnter={(e) => (e.target.style.background = "#27272a")}
//                     onMouseLeave={(e) => (e.target.style.background = "#18181b")}
//                     onClick={() => setShowPopup(false)}
//                 >
//                     Cancel
//                 </button>

//                 <button
//                     style={styles.continueButton}
//                     onMouseEnter={(e) => (e.target.style.background = "#16a34a")}
//                     onMouseLeave={(e) => (e.target.style.background = "#22c55e")}
//                     onClick={handleSubmit}
//                 >
//                     Continue
//                 </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };


// export default LoginWithFacePass;
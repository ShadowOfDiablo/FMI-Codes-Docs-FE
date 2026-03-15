// import React, { useState } from 'react';
// import { ScanFace } from 'lucide-react';

// const be_endpoint = "https://facepass-be-ecd6bfesh4f0b5hs.belgiumcentral-01.azurewebsites.net";

// const createChallenge = async ({ email }) => {
//   const params = new URLSearchParams({ Email: email });

//   const response = await fetch(
//     `${be_endpoint}/Public/login?${params.toString()}`,
//     {
//       method: "GET",
//     }
//   );

//   const text = await response.text();
//   let data 
//   try {
//     data = text? JSON.parse(text) : {};
//   } catch (error) {
//     data = {"message":text}
//   }
//   return data;
// };

// const challengeApproval = async ({challengeId}) => {
//     const params = new URLSearchParams({ id: challengeId });
//     const response = await fetch(be_endpoint + `/Public/checkChallengeStatus?${params}`, {
//         method: "GET",
//         headers: {
//         "Content-Type": "application/json"
//         }
//     })

//     const data = await response.json();
//     return data;

// };


// const LoginWithFacePass = ({ setJwt, setStatus }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [email, setEmail] = useState("");

//   const handleSubmit = async () => {
//     setShowPopup(false);

//     const data = await createChallenge({email});

//     console.log("HELLO")
//     console.log(data)
//     const challengeId = data.challengeId;

//     const MAX_TIME = 300000; // 5 minutes

//     const pollChallenge = async (challengeId, startTime = Date.now()) => {
//       const result = await challengeApproval({ challengeId });

//       console.log(result);

//       // stop if approved
//       if (result.status === "approved") {
//         setJwt(result.jwt);
//         setStatus(result.status);
//         return result;
//       }

//       if (result.status === "rejected"){
//         return null;
//       }

//       // stop if timeout reached
//       if (Date.now() - startTime > MAX_TIME) {
//         console.log("Polling timeout");
//         return null;
//       }

//       // poll again after 500 ms
//       setTimeout(() => pollChallenge(challengeId, startTime), 500);
//     };
    
//     pollChallenge(challengeId);
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
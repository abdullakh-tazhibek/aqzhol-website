// import { useContext, useRef } from "react";
// import { useForm } from "react-hook-form";
// import ReactInputMask from "react-input-mask";
// import { Link } from "react-router-dom";

// export function Login() {
//   const {
//     loginUser,
//     country,
//     setCountry,
//     phoneNumber,
//     setPhoneNumber,
//     eye,
//     setEye,
//     showMenu,
//     setShowMenu,
//   } = useContext(CustomContext);

//   const password = useRef({});

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm({
//     mode: "onBlur",
//   });

//   const submitForm = (data) => {
//     let { confirmPwd, ...user } = data;
//     loginUser(user);
//   };

//   password.current = watch("password", "");

//   return (
//     <div className={"registration-form"}>
//       <h2>Тіркелу</h2>

//       <form noValidate onSubmit={handleSubmit(submitForm)}>
//         {/* phone number with country choice */}
//         <div className="phone_container">
//           {/* choose country */}
//           <div onClick={() => setShowMenu((prev) => !prev)}>
//             {country === "KZ" && (
//               <img
//                 alt="kaz-flag"
//                 src={require("../assets/img/kazakhstan-32.png")}
//                 width="40px"
//               />
//             )}
//             {country === "MN" && (
//               <img
//                 alt="mgl-flag"
//                 width="40px"
//                 src={require("../assets/img/mongolia-32.png")}
//               />
//             )}
//             {country === "RU" && (
//               <img
//                 alt="rus-flag"
//                 width="40px"
//                 src={require("../assets/img/russia-32.png")}
//               />
//             )}
//           </div>
//           {/* dropdown menu with countries list */}
//           {showMenu && (
//             <div className="menu">
//               <ul className="menu__list">
//                 <li className="menu__item" onClick={() => setCountry("KZ")}>
//                   <img
//                     alt="kaz-flag"
//                     src={require("../assets/img/kazakhstan-32.png")}
//                   />{" "}
//                   Қазақстан
//                 </li>
//                 <li className="menu__item" onClick={() => setCountry("MN")}>
//                   <img
//                     alt="mgl-flag"
//                     src={require("../assets/img/mongolia-32.png")}
//                   />
//                   Моңғолия
//                 </li>
//                 <li className="menu__item" onClick={() => setCountry("RU")}>
//                   <img
//                     alt="rus-flag"
//                     src={require("../assets/img/russia-32.png")}
//                   />{" "}
//                   Ресей
//                 </li>
//               </ul>
//             </div>
//           )}

//           {/* Phone number */}
//           <div className={"phone_container__phone"}>
//             {country === "KZ" && (
//               <ReactInputMask
//                 mask={`+7(799)-999-99-99`}
//                 {...register("phone", {
//                   required: {
//                     value: true,
//                     message: "Нөміріңіз жазылған жоқ",
//                   },
//                 })}
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             )}
//             {country === "MN" && (
//               <ReactInputMask
//                 mask={`+\\976-99-99-99-99`}
//                 {...register("phone", {
//                   required: {
//                     value: true,
//                     message: "Нөміріңіз жазылған жоқ",
//                   },
//                 })}
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             )}
//             {country === "RU" && (
//               <ReactInputMask
//                 mask={`+7(999)-999-99-99`}
//                 {...register("phone", {
//                   required: {
//                     value: true,
//                     message: "Нөміріңіз жазылған жоқ",
//                   },
//                 })}
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             )}
//           </div>
//           <span>{errors?.phoneNumber?.message}</span>
//         </div>

//         {/* Password */}
//         <div className={"form-group"}>
//           <input
//             {...register("password", {
//               required: {
//                 value: true,
//                 message: "Құпиясөз жазылған жоқ",
//               },
//               pattern: {
//                 message:
//                   "Кем дегенде 6 символды саннан, үлкен әріптен тұру керек",
//                 value: /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/,
//               },
//             })}
//             type={eye ? "text" : "password"}
//             id="4"
//             placeholder="Құпиясөз"
//             className={"form-control"}
//           />
//           <span className="form_eye" onClick={() => setEye((prev) => !prev)}>
//             {eye ? (
//               <img src={require("../assets/img/eye_fill.png")} alt="eye_fill" />
//             ) : (
//               <img
//                 src={require("../assets/img/eye_off_fill.png")}
//                 alt="eye_off_fill"
//               />
//             )}
//           </span>
//           <p>{errors.password && errors?.password?.message}</p>
//         </div>

//         {/* Login btn */}
//         <button type="submit" className={"btn btn-primary"}>
//           Кіру
//         </button>

//         {/* Link to Register */}
//         <Link href="/register" className={"login-link"}>
//           Жүйеге тіркелу
//         </Link>
//       </form>
//     </div>
//   );
// }

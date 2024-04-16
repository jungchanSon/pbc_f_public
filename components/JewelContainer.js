// import ItemBox from "./ItemBox";
// import JewelStore from "../store/Jewel";
// import {CardGroup, Col, Row} from "react-bootstrap";
// import {useEffect, useRef, useState} from "react";
// import ApiCntStore from "../store/ApiCntStore";
// import BuildStore from "../store/BuildStore";
//
// const JewelContainer = () => {
//
//     const [cur, setCur] = useState(0)
//     const {Jewel} = JewelStore();
//     const {Jewels, testOptionClick} = BuildStore();
//     const {CurrentCnt, MaxCnt, setCnt, upCnt} = ApiCntStore();
//     const test = (key) => {
//         // console.log(MaxCnt, CurrentCnt)
//         // upCnt()
//         // setCnt(Jewel.length)
//         console.log(Jewels[key])
//         testOptionClick(key)
//         console.log(Jewels[key])
//     }
//
//     if (Jewels.length > 0)
//     return (
//         <>
//             <h1> Jewels </h1>
//             <button onClick={test}> Jewel 전체 계산 </button>
//             <Row xs={2} md={4} className="g-4">
//                 {Jewels ? Jewels.map((item, key) => (
//                     <Col key={key} onClick={ () => test(key)}>
//                         <ItemBox
//                             key={key}
//                             info={item}
//                             id={key}
//                             seleted={item.selectedOpts[key]}
//                         />
//                     </Col>
//                 )) : null }
//             </Row>
//         </>
//     )
// }
//
// export default JewelContainer
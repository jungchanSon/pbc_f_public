import styles from '../../styles/Home.module.css'
import PobCode from "../../components/PobCode";
import PobUrl from "../../components/PobUrl";
import JewelContainer from "../../components/JewelContainer";
import EquipContainer from "../../components/EquipContainer";
import FlaskContainer from "../../components/FlaskContainer";
import TotalCostContainer from "../../components/TotalCostContainer";
import OptionContainer from "../../components/TradeConditionContainer";
import Head from "next/head"
import TradeConditionContainer from "../../components/TradeConditionContainer";
import HeaderContainer from "../../components/Header/HeaderContainer";

export default function Home() {

  return (
      <div className={styles.container}>
          <Head>
              <meta name="google-adsense-account" content="ca-pub-7467904148363413" />
          </Head>
          <br/>
        <PobCode></PobCode>
          {/*<hr/>*/}
        {/*<PobUrl></PobUrl>*/}
        {/*  <hr/>*/}
        {/*<TradeConditionContainer/>*/}
        <EquipContainer/>
        <TotalCostContainer/>
          {/*<JewelContainer/>*/}
          {/*<FlaskContainer/>*/}
      {/*    할 일 */}
      {/*    1. max로 설정해야하는 옵션 체크 ( 특히 주얼 )*/}
      {/*    2. 선택 안되는 옵션도 체크*/}
      {/*    3. 유니크 + 고정옵(타락) 2개 이상 -> 기본 옵 x 고정옵만 우선적으로*/}
      </div>
  );
}

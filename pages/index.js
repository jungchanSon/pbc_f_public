import styles from '../styles/Home.module.css'
import PobCode from "../components/PobCode";
import TotalCostContainer from "../components/TotalCostContainer";
import Head from "next/head"
import {Badge, Button, Card, Col, Row, Spinner, Stack} from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Home() {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
    return (
        <div className={styles.container}>
            <Head>
                <meta name="google-adsense-account" content="ca-pub-7467904148363413"/>
            </Head>
            <h1> Welcome To Poe Build Cost!</h1>
            <br/>
            <h2>
                This Web Service helps you calculate POE(Path of Exile) build&rsquo;s cost. <br/>
                Click the button below to use the service.
            </h2>
            <br/>
            <h2>
                <Button> <Link href={"/calc"}> Getting start </Link></Button>

            </h2>
            <br/>
            <hr/>
            <div style={{border: "solid 2px red", borderRadius: "10px"}} className={"p-3 my-3"}>
                <h2 className={"text-warning"}>Precautions</h2>
                <ol style={{fontSize:"1.3em"}}>
                    <li>Search for items at approximately 10-second intervals. (If shorter, the Poe trading site may
                        impose a penalty.)
                    </li>
                    <li>When reusing features, please refresh by pressing the &quot;F5&quot; button before use.</li>
                    <li>Depending on the options, there may be no listings available, making it impossible to check the
                        market price.
                    </li>
                    <li>Prices may not be accurate.</li>
                    <li>Please use this only as a light reference for minimum costs.</li>
                    <li>Resistances have been combined into total resistances for search purposes.</li>
                    <li>The number of sockets in items is not included in the search.</li>
                </ol>
            </div>
            <div style={{border: "solid 2px #00FF80", borderRadius: "10px"}} className={"p-3 my-3"}>
                <h2 className={"text-warning"}>Tips</h2>
                <ol style={{fontSize:"1.3em"}}>
                    <li>Check the fixed options first and, if there are more than two fixed options, please check the non-fixed options loosely.</li>
                </ol>
            </div>
            <h2 className={"text-white mt-5"}>
                Example
            </h2>
            <div style={{border: "solid 2px grey", borderRadius: "10px"}} className={"p-3 my-3"}>

                <h3 style={{color: "white"}} className={"mb-3"}>
                    1. Input PoB Code(in poe.ninja) and Submit.
                </h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h2>PobCode</h2></Form.Label>
                        <Form.Control as="textarea" rows={3}
                                      className={styles.textarea}
                                      placeholder={"Input Pob Code"}
                                      defaultValue={"eNrtPWtz2ziSn8e_guWqvS9xHOJFgLlkr-S3M3bisZ3XfEmBJGhxQpEKSfmRrf3v1wApiqRFWbLl2b29ma11RKK7AXQ3Gt2NB9_8z-0otq5Vlkdp8nYTbdublkr8NIiSq7ebHy8PXorN__n7xpszWQw_hDuTKNYlf9_45Y35bcXqWsWAZwNeIbMrVXya0iLf4N1YJsVQpcmp_CPNDtPg7eb7NFGblieTICqmT34s8_y9HKm3m5dqNI5ltmnJ3FdJsDsrOU5-TKI8KlIo9Icyk36hshNd_2BSpKdpADChjHOgN5JRcpH631VxmKWT8dtNZ9O6jtRNCXR5vr_faFmUNFsGXfvlzVks71R2UcjCyuHP280BcEheqaOoAEIyngAVl1IhyDbCLnI3Xy1E25lkebEnR_BzJfSLsVJBjUG2ncZ_vA8J2tjG49uI9QGfZWo_DJVfRNdqN4uK3aFM_FkjtVh7MFeHPp3ERTSOI5XVGGyb4AX9WJ7-ZVrIeO_sooZ1OGMuotuEE24LthgvnUm1t4bPUTHciYGvj6hF4x5fJVGhHol8lkZ5mjyhf03UfiFN4hgG91Kw5ypX2bUsonaz-mmnIy9KHsW9Qabkh7BU03MZRJP8VBWZyms6eJv04e5kYGcGRSH94UglgJ5cKYPdUEG-EPky8r83quqt6VQmcjfNZ5qEEF0Ee6YysG9FC8V-AOFC-SmYxFVQdB0rYp5EoVoecqV-VAirtuZx_di_WBZuPmGKxEKURzTpHGaA5SAv0km8JGQxs6eIkP4B-6MN2UtwT93OwJhYQLAN2TuAj5MGUwlaQLAJiSnrb-F1qi3Pw8wx9m__6Gw2GQqXbVMbYeo4jPSO0LPhXR75Mj6Vt9FoMoK56FJ-V7MKids_cZ1EV8MiAUPah4xsRp0-7IMoU49C3E3j4HGIQ5nmfZh4gQbooTkDFEIs8GP81xr6OPFnDhBeRPdjkpkZpuHHINshi1DOYSBqf8uL1dI4s2qqAT2TsLMtbE65izElnC-u-EolVe13M00j9jZahHailD88BE_1XBZqOYM-6xd28EJua-gmt4mziO4cbhPbXg6jyzhMtjlH3LWFLTBFi4j0MW5bLMJakW_7icqu7i6GkYpnvXMZXQZ-2rZdOV4G1XC-id-UAObL1dirS3gZ_BWZ81lmwXLT1vyGPeCQa5waViBnmy_2VN-r4ryFA4q03c84AK_HX2PesLdttgCl1rylNA4Q7slnNpvZZJv2y-Va5s1Zij5gISv4ptL0j0EFsQggBKoTJNn9oV76hw704tXQBtkoncz8BghXnYWdKOGX6sN0ki0j43MVTPzWrN7vzOzEENx3etDvmkO74ngeSn-ndcTwfS8Nrpbmk6lkJYw68DaoF5PxGEyqVoBlCWhXAeKwqOEl9o-vGfAHGMFNg9afStAuxdIVzIC7FfCHXaWla-lgdKvq9xmNl9Ophi4B3K3hYXGegonUwabJwpymQSNOtXs5cQCx91KBtAFcMqA_S2-g8UOdlssbLtEy4OAPLoFxkKnk593yNbTgl6tiPwkmmR4P3VrIshjNeqZIl9EIDGie78lCWkEVTnySWSSTAkNzNq1cycwfnoAGHMg49sAcvN1svtVPHUSkETX9N69MclT_Oh6N06yw1K3-50xmxd00SWkAzRugkxdRYpIpYHvieNO6GKY3g-Ba9-IyTeO8zmzK8VglQYvGZaaUJaeWxNeNMH3UD9ZI5gVM2KVyApl_IIow3mLEps4_t_7BCBJiy6GCM3iiUMi2CMUUwxNGiJItDB60rSEZddEWFg4R8OQgAmUQQ3ENCe8cKHMFhwdCOYYim9j6CWGE2RbljiFJOXL5loNsl_-zleE9DgzTkxRYoaMrQYGeDQS3MLEx_EXwaotw13W3MEacbkFAQ6GtmOi_hCB7yyGUcmiToHiLQCHWLYJ2URczwEXcJlu6gwga4Aq0BU2DPiAMr8t2MQeCna2SQUhwx91iCLw9IGMTslUywLEphaooYQzec4S3HMaIs0WJw21oDoeGgG8Ovx1dSIBN0H39jBERLlTHBTAVwA0mNNLlIAHEXE62ICTlzlYpk1IWwDYgWLIUuy6ipiJoBbAI2AF1bDHwq8RWKSxOKTRXCAZN5_AMreUgbMxsqIfaIGmol2jpI2EabuoBEIiToNPQTgcaXsoW67_MheYjHdttVZJ0HVuzHeJf01xds6u55jIb2kIRcfV74QB5jQWVQN9BWC40HSQEfODModAQ12HQMtfZwowzkBvE-4YjVP91SkwBvaPQdugH1MpAS7coRUYTqKmClWwEshARIaIrBcY48BZRF8SChA09QhDMuIAJ6gNCtoGKgyD6B0EhqJ-Bx8i3iAshC-iNgM7AM8gBxAtaggEIKCJgIvwVwHDosNY_aB7a4sAOEA8C4VEB-rSFHK0x1YBggmhwoz1EQLMxpabBwlTlaO5xLWZsMwzyBCZpDUFaTzgHzrtQORAzwqYwHLSciGY_yBzaDT0HOWM9nqFyofuGXdMcY8B0Xkpmd4P2MCObVgEWo7FMA55TuQKji5kxHr-8-Xh-Yn78MiyKcf761aubm5vtsSyGaahuwYnc9tPRqzEggdl5mX-P4vilJvtqAP_tXH18H76bDD-Gxe8CfbmKD93PSfEJhfFo9-g6_FJc__jw-9FFfHP4O0c_gyMxtK-9m4ufkwPiffnD_3Hx6ehXkRyM8elZfnhW_BHs7P6Ik2-Hv4-p_HD8q7f_K7v84_Lo-stdOjrbY_FPcTG8_ZZdDJ33Nh7unzkvnct3L0_px7EfHBzt8oPRt_zDqf353ekeHQoh06vdZPfDy3D82f9y8vPd1xNEdm6_7n7_5P9-ehK850hKtHM4yV8G9sf88CLYf_fl-_HkGh1cf8hH795NTj9-3I3_GH89T2_ubMm_4ZvrG_T5948_T5Tnpd-cxB7anz4N5afA-33_VnwdfsHi0_dj5-WXT98ZOh7byW34R-oeytvgt9N3O59OGDo4v_utcB15cBqNTq729t5n7stDijNJvn7iezeaqYP9_cFgd2fneP_w6uBqsHs82L8awL_p4PBqsD_4nO58vcomP7xh8PPnV_Lr6JsC_rlSfNsf-r8Obxn6Cfz5LY5__VLEe9cJT-UJsk9-fIuREfirqcTflCtneSn-6smYZq0f2oxsWlGhRvoJV_H9fTgzHhuApA_QWM4GIO4D1GOtAUf74MyongFO45U5gNqgNgDdfkCw5Q1A3guop6kGoOjljrZLjc5U7g9Iocn8N9r5zCKYE0uv5ZWe0o1_oed8_eN9WigDq19OH95c6OGYWzm4HIdqlO_cgbd4oKPXzjpM5TRo6AtVlG5PE-ftZpFNlPZzQjmJ9fvfJjKOtA9jN9-elIvASZqN6pQpkAIfRkc1JcXLu7Ge2gcnJ2XJIC4qYrq6qUNTOi5Vg6womDoz1UuzsDuYtXpXxn5u2h0lfjwB3iaVIw2tiWK9lK3TgcG0I3mc6ugxTYt8s0urruqXN9CiCvMwTj0Z4xpfA55GCRjOTv2NkurlxWQ0SoHTdcRymMYK2FKtmIPIratS-qeqkAE4oq-OQR3yV5ofrwx5-FVS6dK4Lh1OjTwfwDTngeJGP0wXfkxlq5tWPWgSe6WcN1ssQVOWdDjsp5Ok1KREjip_tGyDVTfCut-KXna9ekgkq7ET-hJpp3pHJkm5Dl0zsltUs7Bb8Gx8mlZkVTWtue_nmrMqneQ6FdDqeqek7nnn_Y_G4F9nv-tqLFPPmrt9EENFezIftrrceFt3t_Hu2WRs6rBMJbXF1_Wv3ch9VnIMgw49ys6txuFPUWEY1GLw7GXN39mr59KkuoZ16VA9fe1F1zBt7uicAdimtuFoFVUoLRNs3gwmmdyD_5cpzuczIqY1Vt3SNY-mI51PaHW_elN3t3p-LhGX5J937BypeKSK5xw5tV7txGkanMqryG8xdfa6V5-amM-mTYMsS69MNvrV432jFTVMZTIOPoRnk6xrU7pFM52bV9Dr36xbI03lVhpac6oHFt5G-T5Upi7SOIhUNm2rcXTWPTz3Y5N6ljGY_-8JmIAW_-aU1iycU_ZcDKursuq61syGs0z50XTtre5-423d7YHvg0327wZJoPco5tpKP1_PZy14XgMGLbtW-VMMmA6Ml2G0KrIojFRgrFGb252imuXdgmczXnVFVlnT0kqGlur7Z5jL205l9abuafX8XNpUkl9zr8p1TLMiW46FZqzZLZvNSd2S5-rz70qChmfLe3hkyYl4EASRds1k_OWs1elmQb9z18J-No3eT2ITKyV_TvCA_4Tg4VxGueld0Q1KWwWzmLT1-tk4baqxpvWsPZw4nMgsgJ7mcyOKe6W9ejeHzrOxZFrXf4Fu5P-dPyLEQEuGGMDyoBNjlK8aQUb54vmiDEP_eUfZThrcWdP9NY_NRuoV5Me62mdAVie29D73ztw9KxjExZcG5yHiGMmL6CqKy4KWutUtajrca5rLkzI1ppukfe29CJRvXEbTzzcXmMx2z3RgypaYESoaM0aRNU8Ko7HeuLF-I7WbJnpnJ3gZKig3ELQ4cb-4lxnzKD2bnWpWZlW1rZ03FzdRWHj3Bs7sdS8vzuU4CsxIf-5UUKONa-__ceJnSubKRE2zTXwtZvTA9HKml-azcaiu0ZpWaVV1rp1hjc1VHxJdW9vgdkt7mTSHzvMFULouq6zM-pDUTLo_L1Y_L1RhlifLBUj900xNBuI4GU8KQ_zt5ijK_W_eJAz1gUzoI8Rp-rjp_sHB_u7l8af9apdWE8Xw4VsyGXl6Dab8V5_rLCEvlNk6auUTLy9_6mSwujEN2QPBRHGu-xjHcpyrev-UWWGsWh7XdmIuNQN1FNXHOOfTmgH0U9q_VVkB_f0sMz-LVG-76vIHGlVWqPdl611tfdT0Icd-QuWG112ZF-W-8R5OmXOl_VRMBqUP2ehqP-7xaCzj3pqr0gc4Ueg1ZtBcCPp9vSFwscj1inQJtYAvVXpogbyr3br9NMyp0T4CZWE_cnnysw-7Kl3AVXPqtJerZWk_-p7yZW_fy8J-5PooQpqYc9PzqdRQCyi9TxOj5DBoBlGsc4e9kt2PVQ3ST_BDMVRZtSeyj9Ip2KgpyMKBk0XepOgfxg2IBbwyR6l6OKTL-lHLc0E9fdBlCyxR62hMD0ObMP2kyoMkvYZsEWq5z7qXf9We7QUiqCKoHvaXpQuYMD2l0dP_qnjBICnTXtdpFJT79nuGSwdskcFI_e9PJ2MOIzydTPd0wtMpHsQy_94r76q0H_1jEWkPZw6V0pNZiogeVE-joMfW0yicdx2JGe75Yhei3gs_F3laumjgV1vkH02h3Mn_aHTjWT4a25hv8G4V9GCh_a5hFqh3MUlmy_JPImWaNd8OzHq3Eq1yJpvb05UpluOzOt27aAiXIA8Qgqn4aIGztxyl-sjMkZKxvuUijZ9G8N4p5if1My1yiJ3NIcYndlSfm5yMgdi0ZR_meeszkXapvnk1jaPMaQ8d2VRHUS6KTJ9E-Zmmo68mC6p_ndTpLrMHE3zcvQhYnRkVmdajAb9MDw-9MTFrtSFU_57uB53kqrzgoFwSMK8bWzU1aHOb5rnUK-CvrY_vj3_7uL9xLmPoQz6cpoy1G19Euhkb51CRTtCYzZgb5Sz92hKs-rkDUXl1sjiK1WsLbZSOiFV6IvBCbDRdk_vwH5Pox0RZx3uvLSwd6gdIEAcx13UchxLs8VDv1vWwCB1EBaHKZ06gGBGMUy6lL3whsIt9xvCG6abh6muLOxvVxlUgbG9U-3VfWzsvz1_uvNzZMGDn6sdrizgb0OE48iNdbm-8wORvVpFa-qScVbo12lDAe1S-16fOmgXE_ptOKFcpium5MsuEYRu7OmC3ZG4N5bXeVDkqdb8KjXWKtLbyVQifL4FT2vUVEJo5gtxkBSCmN_esWJn-Cxq2zTYrHanyBr0Q-EEI8iAEfRCCPQgxTSuYVE5b0fFcRf8ERt_akYU-a7VxlqXjofLvrM8w4pt66Dh-6DDFke8Th3vYCz3fY24ouMt9HHjMxq7j0zD0XU44Y5KGWEmbKQcpEhDV0kMYKnP18Bz08LChhY5oaiHaoC2lMt5dlfTaEFCU6WO43QIkmjg6TVApIWsVlBmmWS4NjFP03WifUXNmay2fqpD2nzZeIP2qMtsdXcKsr6HWGMCawP9hercAgvdrJpmrmTBxxHqcgj9h7WSpdiuGaRpsXN6kLy-KNFHWOQzsppZ6VIV-yDwPI4IJFjhgDobpI6A0dG0UOlgwEiDiSiwRxtJG2PNooK_KYFxy0bWWM1UENW2p4gvkzAyiXteZbRGfWcEc7KNRnOOkABWIrsz00VaOGV6lsIS3LCeommVO7qvS0bN0lmuDgvICZ7rI0JwEpmc9OU3bVlH9ChOTlWtFNAZRWciGEeMb9dawF0MYhJa8klECI-QgS3-qBKywGkX_x0zjPPWibfU6H5zvb5xGWmjG8mxcFHdXkUysT1GuWkbPVjZykG-HnpIwwfq-ALPmSkkEUoLargxk6CpPeZhR4XJHCgdLHip4GYIuto2eMzN0g6aR423NOoIpC1kD7y7PtR0qW1hrAAgOs21s6SDQ2JLyrBzoI7tvobSWwEu9Nb01adNSd-ep7MY__EyGoED_fMFQk6Ku8P_BHMnmWqIdGQCZeaZokv2YpHq_xWA0iUFQDe3xFYK5EFGqkOchrrivKBGB5xMhmeODebLdwOOMSEq4zQMZEBsUy3Vd5fqY-v3GCLW8MzyT2SCOUx-UBNzVJAT_F_QCCy3FPXUL8zt0ydiqljkylmE6jbV9KCvKLaVXZTSJuyZce7pDrXl5F2KhIL0BS1VduWJMlubeZQaWB3S6POOltbdV34bbJFNGWMYZjCf6qKYFxg8acX8GxS1LFqcgDdmmbN0MVYk8MYXNhmxoF_Yeemv9qMbW5nHanL8mboM8b7hATFzkQ-BRBkor9WCxjvRoqRKSoLKcTx8WRj_MJnYYEsJssLQQAGHfw6Gi4FKGLlYKUc9HrseYB8aZSkEE8Rw75BxeK6psf6no59xEP4cLJ_t-V89tuZFVp7TGa9fEsZeYy19oh2CemcbO3JhLrzhYyMz_jRleRzr7t0UmSzoNbxNAd4d65890RJUT-11JSAdqy1DqcQ120yybjMH2_DUcTNF9R2N_NL4DBUis3VjegNaBqmcglXKfczc14KyQGnAhDlMikC4VHnV8FjJBbIV5SJgHg4EhHsLYcbCNJPUZ9h2sOA0DRTzia1-m6530DI6dTmqA4_bkg0oFmt6INNcTvefkIta0uR_1mUEw8JVSWWGaWbTybHKtr0dRsTEI4LeZzJBoaSa8KdeA86abRNl9H6nye-77Q_OTGzNXyHH_w12hx6m7mGv9T2UsQbbRNHN2kqZj8GqzUZpEPgTDEUBXCt9Vf4zxCqkxX0CMF-prNvR9IJwTrpwQIexw23YJdVwfeYHrhYq7YRAELOQwe3ge_CAQJ5L25CD6U2OtlARrTw2oN9IHv6IVybW6CsZ9Qfag5c8Yn6PjkFRDAuHl0wwnxq8BgFZdmhKg-0M9Nue3xkSGuXF_aj_IoPTA_xsMjAWhoLumTIPre7aH3cDFGGxwGLjgfPgkJL6tiCMZRUx5ggsndLntcMdzQTPdwA6UBIcfPJi_Mg3_kZkGZM_Vr70IFExODSIYSBVKs76ycQEsm74_Tz11b63AXsEjCEgAusi4krYS3JMCHsFHQK7AgScVpb6U4BlILHEYYOwEIfjTLAwD4XjKZZ18Bel3l8Em6v81Fwx4e8FAbyG0fPB6PFXlMEBTwJAVQ4gpS3ZdJaneO1cVax0CzSkRmxjn2rSVlZf6VJpOU_V96MNMgTq14bWLCxhVb-7j7MQTVaMYc2tUtmG6b8Gclms_OjuTGIej3BkDzfsxAX_CbNv5l1o21FnHOh0cHu9u6N2QoHxgJqZaNhipAnw1GHp6kX9q9Y7SLFdhfNdUJ7BdEoEj6TFKlW8LITzuEOESgTh1beQ7AeaeEzqEI0587CDEfTf0he2Bu2kHi9Spf0atva6PmvVmyplOVuW0E0500C7mzJFlj7pBO9jcGAo7qf0NbVbnLQxYwcSoZRktrcmazBUYniswf5jGMptK67eJvsQ_iq91smQqMH1pn7oyRrqVrvRQgD3CAtfnQkqsnRzXYQGTnsJSuC4SPkjNQ9ijtg1RA4OwWUkXexKFnHUCAtojLyoeIy_tC03XZ6bF2keZ5DAP0b9Zsj5zYM3O2Dbmtz9PKmSeVN5HZlO-VV1RYCKLWhwDsO13Hf-Auh6SyvdcnzpUEmqHto9tHNogIhcx4vBAKuQwBxNEwtAOPM_GfqDAXYBS3Mlc2H1jx25bXdxyCLt81mu4s9LByCyQVkk6COAPgUuFXugeTRKdKYRxZbZ4arbriAzNQrIo1AS1tGESqqHmUajzA-VB1sWEpBEuPHp3XcQ_zTOYqxN0nk6A_K_Ay4EuTwer7n9UqLZlvUyzIu0sLFAhYBhS3wtD7lAfEwbKgBAL3VAEFMYr97lLwLQqLm3CbY9LqZjnMnAzpYf4ciPVoY8ZqWVWqC6pzaiEoBmCDi0bOc0g0Vbyq9z-8OeNVDZPKpdAIb_SG_7S2oiC-wXBZ9CWy8ldctuUCUF2YPs0oPrWfOAxkZyEmBDB3BB7jk7Q--BFCeJRHBCHOjBMIcwkwiMicBBeTiYMP1om6N7MNk8kCPVvvPjzROPMSYRBfFBeFGt9Bsujd4F4Mi6sd-oGHLmGIARTnCHBpO_7nnJ8V2e4Qs-RoaeUL2DIUA4-LufSlUrB4PAgBNPbXcCaknurbqidrcKNfQKzFYbdCXg_ebXAsNG1WeDGJmmhPdkoCYGULqlAXyDcWl5ZkA-obNwwNZ8hA4ekygSQnv0JraF1qmedy2GW3hiPudpFs6bU67980Q3Ny5t-8GKYbIHPIJwo3TiFKWYysnbjib4V-L7WOJ5Hue9AoEOQHwYIc-2OMil9xyN2CHOsB4UwakMlPQLxF4zo0CUwol1hi47WcNocsi0zShqrbTojyayz8ibRallrVowsAADZtcr1kposWz9d223S0zozMlmaFlHrSs-sYC9a83t5oLQKuxcgyzhPpxRedPR1abT-FePefh6W7QPIq6Qf6lyNZPZdH-j6K6daXrx5fyzsykL68V0-0kYjURsnZh7oHQt6pxZMTYhj1xccIV8GWPqKSQfcUgc5NoOwLWDgYVBCELIxxYp4DEI6WzFfyvZYQE3n3140FkTvWMDzpJ-bCaw5FvLHD4ZmCuqRY6FXRc-yKB_B1OVbR0pmRT_gRZLe5EWajfpBPus7UcfQaDMyiqz8cMRfql_eYjvHoRvkueZhfXcDTHsmBtPO0Kip9YqrUGs35iF2lcRg1D0svZAiESLiQ-hLEVdCEpgMICIGTw6CZcKFEChQCnf8Bjxz4DpB1gvoC0Sz87cKTiOZol4tWj07Pnfvpv003jjYc8MAnKlQYOYzL5Q2C7gfOKFLZQAMsB3B_DCkXogd5Pk4CLBQYEaQMRW92zfv84a6fzpv0LxlV3kFde1Oigc9h4CGevOfHXoSvAKPc8chMnBRCH6DYrbtaJNIecgDpLdXM58TD2MiaBjo5SXRTXP9p3oO5C_P4d_afGK8jIk4mYxrCzENhff07sa7VobCdp0QhkOApA32wvYEQZJgGB7gOvscgcsM2k8JpVKFLvxwHHA4QsykQCwI3LYxdRYaDJc-1mCYsNidrfPX6SoTCpsl0vUoxlx2k3kxbiav9OJsOlYb5dDoNTs28nho0n8OkhxTiW0HzK1khDqEgEsGBluAFRI-gfA34K7vuL4iPnMYwgGzu2FuI--D-7YHarNDes3Ow1bEmbNgWH9MV8fTUKdK_DutWBX1Zc0Espc2L2ZVp722WWU0-k1FfU-z_hr4__llRjxvR_NBCs50evdQcGDbHiJMuSFyfaz3pHoBClHIqFIup-BCuR5mTBLFQoiMuY9DIcADQC73icDK65_u_n2Dg3tL34-c8_6KEP7FUxybo_eDRBudwhpkXgRy2ji6GyepFsX-nZqTJ_KFZyvJOYJYgUIgEPp6zVzYYFgFp0wFkhj3GIcE-wTjEKZA3yYS-UqE9w8y9S_GvCC4uWuss_8HsUV-EZQQUilImUS8twGjJ534L1on0d-86D9w2f4cRpwW5vMhZ97H8xN9BLS8Jmd27Xv9bZFpY_pQdlRcdI5KWI2vndgP4U-r7NJgq9PAa6CBrIsbOe4SctbQIWcNHVqFhjka2yVAViBQ3mPepYBWacIc3XgUG-bJhK1BJmgNNOiKDJmB0yfp5DoG2XI0ynPd05PfJcVyHa8hA4QfpZD4iepEntiD5veWHpRHuWH8KUo0f0w5K1OYITiP6XWjyYg8rterDL_yYNYMgT1WX8kabOhcGqboOAAC3a9xlcRKJ7jxga5pZYsIlN_9ahGYfQqsS2Al5tMnan3zc2TooSbofbdNDHcls72CxKb3zk8R-KMsCnsibxr6gdgi-VZfYWvKt_FhtiUUpPp2XZNA43N2S2mY-QRdW8Pqr9ItqWHzTRJ-slF7uqtBn-rt0HX5f2SlltT3Mq9_pmDr8p7Qklaw_GBjU8Nmn3BcUsEWMAQ_VcIrO8SNwf040-usRxXYynbxKTppTHhD5ORRzEZrmH3XNiTZeuTgPNH_pE-W41M94Gawzp7ACbIu07I2Qo8JFWcoYgVeNKzC07QSrUcr6ZLWufpMbssFmX05d0n73OrQss5x-ZXclucx-3DuEq5L-TneJv7sA73LzitzBsPa5ke8Blu3DhpoXR1am-G9T6jMQ5a3d-sr5mSgLsz1cp-Vzpjm5R105o44c6l3moTR1b0rupVeMDzOd1LzYbHqTu-zKEmkX9_d3ITXWU5zXsGsNE7XHTctL01jJZPKtX8I70MCzcmVb-77P8z0rtgVSDwN2zTA3AugVkHTC7XnSh8_i-8eRjM3-JvD2UMVXKamzoexJrlqXBWfr9qp8mronk6dxdJXOmmusqboy-vB67vZuW0vhjf33VXX-9ZY5AGkOoU_vYh9iogxRQ_Ul9W3dddYbDGKPuXebSF7qFvwZvXG6ZpWx6q-LTJFELQXfDSJi2gcRyr7HOmjuSq4MFe-6_MrFyoOZ0QQe7h_q_KkltqZvpWzlvWSSCtLQCtWl5nCdR6WwCrN03xYBb5s0Hkax2ZNqDlQFiNOPZz6owdYuEuoepcBD42s6eUTq2thfYV2rUI2ov3cyPXXgz6ExjyBEhrrVGNO7zutppg3r_Regw_hziQya3R_3_hfPhIiVQ=="}
                        >

                        </Form.Control>
                        <Button type={"submit"} disabled>Submit</Button>
                    </Form.Group>
                </Form>
                <hr/>
            </div>
            <div style={{border: "solid 2px grey", borderRadius: "10px"}} className={"p-3 my-3"}>
                <h3 style={{color: "white"}} className={"mb-4"}>
                    2. Check the search options. And click the Button &quot;Calculate Cost&quot;
                </h3>
                <Row>
                    <Col className={""}>
                        <Row className={"px-4  justify-content-center"}>
                            Date Condition
                        </Row>
                        <Row className={"text-center"}>
                            <Col className={"align-text"}>
                                <Button className={"mx-2"}> All </Button>
                                <Button className={"mx-2"}> ~ 2 Weeks </Button>
                                <Button className={"mx-2"}> ~ 1 Month </Button>
                            </Col>
                        </Row>
                    </Col>

                    <Col className={"justify-content-center"}>
                        <Row className={"px-4  justify-content-center"}>
                            Online Condition
                        </Row>
                        <Row>
                            <Col className={"text-center"}>
                                <Button className={"mx-2"}> All </Button>
                                <Button> Online</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={"align-self-center text-center"}>
                        <Button className={"py-3 m-1"}> Calculate Cost</Button>
                        {/*{*/}
                        {/*    stopCalc ?*/}
                        {/*        <Button className={"py-3 m-1"} onClick={stopCalcCost}> Stop Calculate</Button>*/}
                        {/*        :*/}
                        {/*        <Button className={"py-3 m-1"} onClick={calcBuildCost}> Calculate Cost</Button>*/}
                        {/*}*/}
                    </Col>
                </Row>
                <br/>
            </div>

            <div style={{border: "solid 2px grey", borderRadius: "10px"}} className={"p-3 my-3"}>
                <h3 style={{color: "white"}} className={"mb-4"}>
                    3. Then, the search results will be displayed as cards below with prices..
                </h3>
                <h4 style={{color: "white"}}>Before pressing the  &quot;Calculate Cost &quot; button, you can click on
                    options to include or exclude them in the search.</h4>
                {/*<Button onClick={testHBtn}> Calc All </Button>*/}
                <hr/>
                <br/>
                <h1> Equipments</h1>

                <hr/>
                <h2> Helmet </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Heatshiver"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}> +1 to Maximum Power Charges </span>
                                <hr/>
                            </div>
                            <div>
                                <div><span className={"bg-success"}> 60% increased Mana Regeneration Rate </span></div>
                                <div><span> +25% to Fire Resistance </span></div>
                                <div><span> +26% to Cold Resistance </span></div>
                                <div><span className={"bg-success"}> Gain 1% of Cold Damage as Extra Fire Damage per 1% Chill Effect on Enemy </span>
                                </div>
                                <div><span className={"bg-success"}> Gain 30% of Cold Damage as Extra Fire Damage against Frozen Enemies </span>
                                </div>

                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Body </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Dialla's Malefaction"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}> +1 to Maximum Power Charges </span>
                                <hr/>
                            </div>
                            <div>
                                <div><span className={"bg-success"}>   Gems can be Socketed in this Item ignoring Socket Colour</span>
                                </div>
                                <div><span
                                    className={"bg-success"}>   Gems Socketed in Red Sockets have +2 to Level</span>
                                </div>
                                <div><span className={"bg-success"}>   Gems Socketed in Green Sockets have +30% to Quality</span>
                                </div>
                                <div><span className={"bg-success"}>   Gems Socketed in Blue Sockets gain 100% increased Experience</span>
                                </div>
                                <div><span className={"bg-success"}>   Has no Attribute Requirements</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ divine
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>


                </Row>
                <hr/>
                <h2> Belt </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Heatshiver"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}>Has 1 Abyssal Socket</span>
                                <hr/>
                            </div>
                            <div>
                                <div><span className={"bg-secondary"}>  Regenerate 125.2 Life per second</span></div>
                                <div><span className={"bg-success"}>  +15 to maximum Mana</span></div>
                                <div><span>  +48% to Fire Resistance</span></div>
                                <div><span>  +46% to Lightning Resistance</span></div>
                                <div><span className={"bg-success"}>  (crafted) +51 to maximum Life</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Glove </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.rare}> {"Empyrean Claw"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span
                                    className={"bg-success"}>10% of Physical Damage Converted to Lightning Damage</span>
                                <span className={"bg-success"}>15% chance to Unnerve Enemies for 4 seconds on Hit</span>

                                <hr/>
                            </div>
                            <div>

                                <div><span>Adds 8 to 18 Fire Damage to Attacks</span></div>
                                <div><span>Regenerate 45 Life per second</span></div>
                                <div><span>+46% to Fire Resistance</span></div>
                                <div><span>+43% to Cold Resistance</span></div>
                                <div><span>(crafted)+69 to maximum Life</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Boots </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Ralakesh's Impatience"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span
                                    className={"bg-success"}>10% of Physical Damage Converted to Lightning Damage</span>
                                <span className={"bg-success"}>15% chance to Unnerve Enemies for 4 seconds on Hit</span>

                                <hr/>
                            </div>
                            <div>

                                <div><span>+23% to Cold Resistance</span></div>
                                <div><span>+21% to Chaos Resistance</span></div>
                                <div><span>30% increased Movement Speed </span></div>
                                <div><span>Count as having maximum number of Endurance Charges </span></div>
                                <div><span>Count as having maximum number of Frenzy Charges</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Weapon </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Void Battery"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}>40% increased Spell Damage</span>
                                <hr/>
                            </div>
                            <div>

                                <div><span>80% reduced Spell Damage</span></div>
                                <div><span>18% increased Cast Speed</span></div>
                                <div><span>58% increased Global Critical Strike Chance</span></div>
                                <div><span>+50 to maximum Mana</span></div>
                                <div><span>+1 to Maximum Power Charges</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Malachai's Loop"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}>15% increased Spell Damage</span>
                                <hr/>
                            </div>
                            <div>

                                <div><span>217% increased Energy Shield</span></div>
                                <div><span>+2 to Maximum Power Charges</span></div>
                                <div><span>20% chance to gain a Power Charge on Hit</span></div>
                                <div><span>12% increased Spell Damage per Power Charge</span></div>
                                <div><span>Lose all Power Charges on reaching Maximum Power Charges</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Ring </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Call of the Brotherhood"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}>+16% to Cold and Lightning Resistances</span>
                                <hr/>
                            </div>
                            <div>

                                <div><span>+20 to Intelligence</span></div>
                                <div><span>25% increased Lightning Damage</span></div>
                                <div><span>37% increased Mana Regeneration Rate</span></div>
                                <div><span>48% of Lightning Damage Converted to Cold Damage</span></div>
                                <div><span>Your spells have 100% chance to Shock against Frozen Enemies</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.unique}> {"Call of the Brotherhood"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}>+16% to Cold and Lightning Resistances</span>
                                <hr/>
                            </div>
                            <div>

                                <div><span>+20 to Intelligence</span></div>
                                <div><span>25% increased Lightning Damage</span></div>
                                <div><span>37% increased Mana Regeneration Rate</span></div>
                                <div><span>48% of Lightning Damage Converted to Cold Damage</span></div>
                                <div><span>Your spells have 100% chance to Shock against Frozen Enemies</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Amulet </h2>
                <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                    <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        <Card.Body>
                            <Card.Title className={styles.rare}> {"Badge of the Brotherhood"}</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <div>
                                <span className={"bg-success"}>+28 to Dexterity and Intelligence</span>

                                <hr/>
                            </div>
                            <div>

                                <div><span>Your Maximum Frenzy Charges is equal to your Maximum Power Charges</span>
                                </div>
                                <div>
                                    <span>10% increased Cooldown Recovery Rate of Travel Skills per Frenzy Charge</span>
                                </div>
                                <div><span>9% increased Effect of Elusive on you per Power Charge</span></div>
                                <div><span>20% chance to lose a Frenzy Charge when you use a Travel Skill</span></div>
                                <div><span>21% chance to lose a Power Charge when you gain Elusive</span></div>
                                <hr/>
                            </div>
                        </Stack>
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                              <span className={"px-2 align-content-center mx-auto bg-info"}>
                                                All Resistance : 18
                                            </span>
                        </Stack>
                        <hr/>
                        {/*cost*/}
                        <Card.Body>
                            Cost: ~ div
                        </Card.Body>
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>
                </Row>
                <hr/>
                <h2> Jewels </h2>
                etc ...
                <hr/>
                <h2> Flask </h2>
                etc ...
                <hr/>
            </div>
            <div style={{border: "solid 2px grey", borderRadius: "10px"}} className={"p-3 my-3"}>
                <h3 style={{color: "white"}} className={"mb-4"}>
                    4. The total cost appears here.
                </h3>
                <h1> total cost </h1>
                <div>
                    <div>
                        mirror : 1 <hr/>
                        divine : 18 <hr/>
                        chaos : 10 <hr/>
                    </div>
                </div>
            </div>

            {/*<JewelContainer/>*/}
            {/*<FlaskContainer/>*/}
            {/*    할 일 */}
            {/*    1. max로 설정해야하는 옵션 체크 ( 특히 주얼 )*/}
            {/*    2. 선택 안되는 옵션도 체크*/}
            {/*    3. 유니크 + 고정옵(타락) 2개 이상 -> 기본 옵 x 고정옵만 우선적으로*/}
        </div>
    );
}

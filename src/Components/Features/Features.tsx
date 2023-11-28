import React from 'react'
import styled from 'styled-components'
import line from "../../Assets/line.png"
import Card from './Card'
// import icon from "../Assets/icon.png"
// import icon1 from "../Assets/icon2.png"
// import icon3 from "../Assets/icon05.png"
// import icon4 from "../Assets/icon06.png"
import img from "../Assets/circle7.svg"
import img1 from "../Assets/circle8.svg"
import img2 from "../Assets/circle6.svg"
import img3 from "../Assets/circle5.svg"
import img4 from "../Assets/circle4.svg"
import img5 from "../Assets/circle3.svg"
import nice from "../Assets/phoneimgrmbg.png"
// import line1 from "../Assets/line1.png"


const Feature = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                  <Title>
                    FEATURED
                  </Title>
                  <Sub>
                  Was designed with inputs from bulk payment users that gave their <br /> takes all the way.
                     </Sub>
                </First>
                <Second>
                    <Third>
                      <Card title='Transaction History'  sub='All payments ever made on the paydem platform are recorded and stored in our database. Users can always make reference to every transaction he/she has ever completed on paydem.' img={img1 }/>
                      <Card title='Transaction Detail'  sub='In instances for the need for conflict resolution, details of individual transactions could be obtained to view to trash out all resolutions involved with the transaction' img={img}/>
                      <Card title='Realtime UI' sub='A realtime data proccessed to create a user dashboard to provide you with insight on all activities occuring on your account to ensure you are on top of every activity terminated on your account' img={img2}/>
                    </Third>
                    <Pic src={nice}/>
                    <Third>
                    <Card title='Easy Reading'  sub='Easy to comprehend transaction details, in a list of transactions or where a particuar transaction detail.' img={img5}/>
                    <Card title='Mobile Friendly'  sub='PayDem was made with you in mind to be perfectly responsive for all devices and your prefered browser.' img={img4}/>
                    <Card title='Reporting Features'  sub='Paydem gives thorough reports of all activities on the platform Some of these reports include but not limited to:   
                    * Every Login Details * All Successful transactions 
                     * All Failed transactions' img={img3}/>
                    </Third>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Feature


const Third = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: column;
margin-top: 50px;
margin-right: 40px;
margin-left: 40px;
margin: 30px;
`

const Pic = styled.img`
border-bottom:2px solid grey;

@media screen and (max-width: 500px) {
  width: 290px;
 border-bottom: none;
  margin-left: 55px;
}

@media screen and (max-width:768px) {
  display: none;
}
`

const Second = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 40px;

@media screen and (max-width: 500px) {
  margin-top:-10px;
}

@media screen and (max-width:768px) {
  grid-template-columns: repeat(3fr ,3);
  width: 80%;
}
`

const Sub = styled.div`
margin: 10px;
text-align: center;
color: gray;
font-size: 32px;
font-weight:500;
 @media screen and (max-width: 500px) {
  font-size: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  width: 80%;
  /* margin: 5px; */
  margin-top: 15px;
 }
`



const Title = styled.div`
font-weight: 800;
font-size: 45px;
display: flex;
flex-direction: column;
border-bottom: 4px solid blue;
 
 @media screen and (max-width: 500px) {
  font-weight: 800;
  font-size: 33px;
  text-align: center;
 }
`

const First = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const Wrapper = styled.div`
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 70px;
margin-bottom: 30px;
overflow: hidden;


`
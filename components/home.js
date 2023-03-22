import Card from '../../card';
export default function Home() {

  return (
    <Card
    bgcolor="secondary"
    header="Welcome to the bank"
    body={
      <>
        <p>We are here for your financial future and banking neesds</p>
        <div>
          <img src='./bankicon.png' alt="wat" width="100%"/>
        </div>
      </>
    }
    />
  )
}
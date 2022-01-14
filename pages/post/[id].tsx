import Head from "next/head";
import { GetServerSideProps } from 'next'
import { app } from "../../libs/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function Page({ data }: { data: any }) {
  return (
    <>
      <Head>
        <title>{"id1"}</title>
        <meta
          property="og:image"
          content={`https://i.imgur.com/s123HpM.png`}
        />
        <meta name="og:title" content={data} />
        <meta name="twitter:card" content="summary" />
      </Head>
      {data}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "users"));
  let data;
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    data = doc.data().name
  });
  
  // Pass data to the page via props
  return { props: { data } }
}

export default Page
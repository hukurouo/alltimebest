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
          content={`https://vercel-og-image.hukurouo.com/**${data}**%E3%81%95%E3%82%93%E3%81%AE%3Cbr%3E%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%99%E3%82%B9%E3%83%88%E6%BC%AB%E7%94%BB.png?pattern=none&md=1&fontSize=70px&textColor=%23404040&textStrongColor=%238340BB`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" content={data} />
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
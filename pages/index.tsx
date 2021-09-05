import Head from 'next/head';
import HomeLayout from 'components/HomeLayout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='Allan Tran' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section>Home</section>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;

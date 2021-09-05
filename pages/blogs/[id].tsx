import { useRouter } from 'next/dist/client/router';
import React from 'react';

type DetailProps = {
  id?: string;
};

function DetailBlog({ id }: DetailProps) {
  const router = useRouter();
  return <div>{id}</div>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default DetailBlog;

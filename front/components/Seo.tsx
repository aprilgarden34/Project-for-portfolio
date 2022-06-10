import Head from "next/head";
import { ComponentType, ReactElement } from "react";
type seo = (object: { title: string }) => ReactElement;

const Seo: seo = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} | 회원가입</title>
      </Head>
    </>
  );
};

export default Seo;

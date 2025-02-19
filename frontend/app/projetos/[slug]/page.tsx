import React from "react";

export async function generateStaticParams() {
  const slugs = ["finans", "ion-imoveis"];
  return slugs.map((slug) => ({ slug }));
}

const Projeto = ({ params }: { params: { slug: string } }) => {
  return <div>Projeto: {params.slug}</div>;
};

export default Projeto;

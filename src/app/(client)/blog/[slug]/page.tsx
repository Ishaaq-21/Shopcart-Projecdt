import Title from "@/components/atoms/Title";
import Container from "@/components/common/Container";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="pt-6">
      <Container>
        <Title>Blog Title</Title>
        <p>{slug}</p>
      </Container>
    </div>
  );
};

export default page;

import React from 'react';

interface IProps {
  params: {
    categorySlug?: string;
  };
}

const Templates: React.FC<IProps> = () => {
  return <>Hello World!</>;
};

// @ts-ignore
Templates.getInitialProps = async (context: NextPageContext) => {
  return {};
};

export default Templates;

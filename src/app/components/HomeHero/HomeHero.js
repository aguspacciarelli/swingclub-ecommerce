import Image from 'next/image';

const HomeHero = () => {
  return (
    <Image
      src={`/imgs/hero.jpg`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '100vw', height: '100vh' }} // optional
      alt='hero'
    />
  );
};

export default HomeHero;

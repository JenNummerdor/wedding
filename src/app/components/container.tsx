import Image from 'next/image';
import hero from 'public/floral-divider.png';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Container({ title, children }: Props) {
  return (
    <>
      <hr className='w-full border-8 border-primary-200' />
      <div className='container mx-auto max-w-5xl mb-8'>
        <div className='flex flex-col items-center'>
          <div className='my-8' id='page-title'>
            <h1 className='text-3xl md:text-5xl md:my-6 uppercase flex justify-center'>
              {title}
            </h1>
            <Image
              src={hero}
              alt='Jen and Oscar in Florence'
              className='w-1/2 md:w-1/4 m-auto'
            />
          </div>
          {children}
        </div>
      </div>
      <hr className='w-full border-8 border-primary-200' />
    </>
  );
}

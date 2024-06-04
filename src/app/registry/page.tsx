import {Container} from '@/app/components/container';
import Link from 'next/link';

export default function Page() {
  return (
    <Container title='Registry'>
      <div className="flex flex-col text-justify items-center font-serif">
        <p className="text-base sm:text-md md:text-lg lg:text-xl max-w-2xl">
          We would like to ask that none of our guests feel any sense of obligation toward participating in a registry.
          For those of you who are able to attend we are excited to share this event, and to those who could not make it
          we will miss you whole-heartedly.
        </p>
        <br />
        <p className="text-base sm:text-md md:text-lg lg:text-xl max-w-2xl">
          Despite our best efforts, we have received several inquiries regarding the registry and it is now available
          through WithJoy! Contributions will go toward our honeymoon and can be made in any denomination you are
          comfortable with.
        </p>
        <Link href="https://withjoy.com/oscar-and-jen/registry">
          <button className='m-6 text-white rounded p-4 bg-accent-800'>Registry</button>
        </Link>
      </div>
    </Container>
  );
}

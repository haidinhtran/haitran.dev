import avatar from './avatar.jpg';
export default function About() {
  return (
    <div className='flex flex-col space-y-4'>
      <img
        className='size-44 rounded-full blur-sm hover:blur-none cursor-pointer'
        src={avatar}
        alt='Hai Tran'
      />
      <h1 className='text-2xl font-bold'>Hai Tran</h1>
      <p>Professional Software Engineer</p>
    </div>
  );
}

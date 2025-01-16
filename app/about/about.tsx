import avatar from './avatar.jpg';
export default function About() {
  return (
    <div className='flex flex-col space-y-4'>
      <img
        className='size-32 rounded-full blur-sm hover:blur-none cursor-pointer'
        src={avatar}
        alt='Your Name'
      />
      <h1 className='text-2xl font-bold'>Your Name</h1>
      <p>Your Title / Position</p>
    </div>
  );
}

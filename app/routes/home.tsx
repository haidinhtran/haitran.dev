import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Hai Tran - Professional Software Engineer | haitran.dev' },
    {
      name: 'description',
      content:
        'haitran.dev - a professional software engineer specializing in web development',
    },
  ];
}

export default function Home() {
  return <Welcome />;
}

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState('');

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get('email') as string);
    alert("本站不支持注册");
  };

  return (
    <div className="flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background">
      <div className="w-full max-w-md overflow-hidden rounded-2xl gap-12 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h2>本站不支持注册</h2>
        </div>
      </div>
    </div>
  );
}

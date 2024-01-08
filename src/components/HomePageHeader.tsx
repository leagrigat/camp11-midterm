import React from 'react';

type Props = {
  name: string;
  avatarImg?: string;
};

function HomePageHeader({ name, avatarImg }: Props) {
  return (
    <div className="font-bold mx-5 w-full h-[44px] flex justify-between mt[32px] ml-[20px]">
      <div>
        <h1 className="text-xs text-white-dimmed">Welcome {name} 👋</h1>
        <h2 className="text-sm text-white">Let’s relax and watch a movie!</h2>
      </div>
      <div className="w-[40px] h-[40px] rounded-full">{avatarImg}</div>
    </div>
  );
}

export default HomePageHeader;

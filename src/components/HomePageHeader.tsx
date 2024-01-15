type Props = {
  name: string;
  avatarImg?: string;
};

function HomePageHeader({ name, avatarImg }: Props) {
  return (
    <div className="font-bold w-full h-[44px] flex justify-between items-center">
      <div>
        <h1 className="text-xs text-white-dimmed">Welcome {name} 👋</h1>
        <h2 className="text-sm text-white">Let’s relax and watch a movie!</h2>
      </div>
      <img
        alt={name}
        src={avatarImg}
        className="w-[40px] h-[40px] rounded-full "
      />
    </div>
  );
}

export default HomePageHeader;

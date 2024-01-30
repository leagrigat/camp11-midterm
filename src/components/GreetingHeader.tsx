type Props = {
  title: string;
  description: string;
};

function GreetingHeader({ title, description }: Props) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-base font-bold">{title}</h2>
        <p className="text-white-dimmed text-sm text-medium mb-8">
          {description}
        </p>
      </div>
    </>
  );
}

export default GreetingHeader;

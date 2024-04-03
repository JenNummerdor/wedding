type Props = {
  title: string;
  children: React.ReactNode;
};

export function Container({ title, children }: Props) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <div className="my-8" id="page-title">
          <h1 className="text-3xl uppercase">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </div>
  )
}
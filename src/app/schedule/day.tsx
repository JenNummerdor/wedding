type Props = {
  children?: React.ReactNode;
  day: string;
  date: number;
  month?: string;
  year?: number;
};

export function Day({children, day, date, month = 'Aug', year = 2024}: Props) {
  return (
    <div className="flex-auto">
      <h2 className="text-2xl italic">{day}, {date} {month} {year}</h2>
      {children}
    </div>
  )
}
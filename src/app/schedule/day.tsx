type Props = {
  children?: React.ReactNode;
  day: string;
  date: number;
  month?: string;
  year?: number;
};

export function Day({children, day, date, month = 'Aug', year = 2024}: Props) {
  return (
    <div className="flex flex-col items-center w-1/2 mx-auto mb-8 space-y-4" id="day-card">
      <h2 className="text-2xl">{day}, {date} {month} {year}</h2>
      {children}
    </div>
  )
}
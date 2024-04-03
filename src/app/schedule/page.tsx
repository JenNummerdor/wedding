import {Day} from "@/app/schedule/day";
import {Event} from "@/app/schedule/event";

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl uppercase">Schedule</h1>
        <Day day="Friday" date={16}>
          <Event name="Rehearsal Dinner" start="18:00" end="19:30"/>
        </Day>

        <Day day="Saturday" date={17}>
          <Event name="Wedding Ceremony" start="14:00" end="15:00"/>
          <Event name="Reception" start="16:00" end="00:00"/>
          <Event name="Dinner" start="18:00" end="19:00"/>
        </Day>

       <Day day="Sunday" date={18}>
         <Event name="Checkout" start="11:00" end="--:--"/>
       </Day>
      </div>
    </div>
  )
}

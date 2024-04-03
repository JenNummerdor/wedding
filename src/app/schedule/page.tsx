import{Container} from "@/app/components/container";
import {Day} from "@/app/schedule/day";
import {Event} from "@/app/schedule/event";

export default function Page() {
  return (
    <Container title="Schedule">
      <Day day="Friday" date={16}>
        <Event name="Rehearsal Dinner" start="6 PM" end="7:30 PM"/>
      </Day>

      <Day day="Saturday" date={17}>
        <Event name="Wedding Ceremony" start="2 PM" end="3 PM"/>
        <Event name="Reception" start="4 PM" end="12 AM"/>
        <Event name="Dinner" start="6 PM" end="7 PM"/>
      </Day>

      <Day day="Sunday" date={18}>
        <Event name="Checkout" start="11 AM" end=""/>
      </Day>
    </Container>
  )
}

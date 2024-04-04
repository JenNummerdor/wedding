import{Container} from "@/app/components/container";
import {Day} from "@/app/schedule/day";
import {Event} from "@/app/schedule/event";

export default function Page() {
  return (
    <Container title="Schedule">
      <Day day="Friday" date={16}>
        <Event name="Rehearsal Dinner" location="Cedar Bend Cabin" start="6 PM" end="7:30 PM"/>
      </Day>

      <Day day="Saturday" date={17}>
        <Event name="Wedding Ceremony" location="Pavilion" start="2 PM" end="3 PM"/>
        <Event name="Reception" location="Pavilion" start="4 PM" end="12 AM"/>
        <Event name="Dinner" location="Pavilion" start="6 PM" end="7 PM"/>
      </Day>

      <Day day="Sunday" date={18}>
        <Event name="Checkout" start="11 AM" end=""/>
      </Day>
    </Container>
  )
}

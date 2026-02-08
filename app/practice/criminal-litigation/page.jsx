import PracticeBanner from "../../component/PracticeBanner/PracticeBanner";
import PracticeLanding from "../../component/PracticeLanding/PracticeLanding";
import { criminalPracticeData } from "@/app/data/practice/criminal";

export default function CriminalPage() {
  return (
    <div>
  <PracticeBanner {...criminalPracticeData.banner}/>
  <PracticeLanding {...criminalPracticeData} />
  </div>
);
}

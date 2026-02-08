import PracticeBanner from "../../component/PracticeBanner/PracticeBanner";
import PracticeLanding from "../../component/PracticeLanding/PracticeLanding";
import { familyPracticeData } from "@/app/data/practice/family";

export default function CriminalPage() {
  return (
    <div>
      <PracticeBanner {...familyPracticeData.banner}/>
      <PracticeLanding {...familyPracticeData} />
    </div>
  );
}

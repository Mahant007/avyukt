import PracticeBanner from "../../component/PracticeBanner/PracticeBanner";
import PracticeLanding from "../../component/PracticeLanding/PracticeLanding";
import { propertyPracticeData } from "@/app/data/practice/property";

export default function CriminalPage() {
  return (
    <div>
      <PracticeBanner {...propertyPracticeData.banner}/>
      <PracticeLanding {...propertyPracticeData} />
    </div>
  );
}

import PracticeBanner from "../../component/PracticeBanner/PracticeBanner";
import PracticeLanding from "../../component/PracticeLanding/PracticeLanding";
import legalDraftingData from "../../data/practice/drafting";
// import { legalDraftingData } from "@/app/data/practice/drafting";

export default function CriminalPage() {
  return (
    <div>
  <PracticeBanner {...legalDraftingData.banner}/>
  <PracticeLanding {...legalDraftingData} />
  </div>
);
}

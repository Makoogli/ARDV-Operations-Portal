import {OperationsShortcut} from "../components/operationsShortcut";

export default async function Operations() {
  return (
    <div className="outer">
      <div className="flexBoxParent">
        <OperationsShortcut name="Host New AD" src="/operations/forms/host-ad-creation"/>
        <OperationsShortcut name="Advertiser New AD" src="/operations/forms/advertiser-ad-creation"/>
        <OperationsShortcut name="AD Revision" src="/operations/forms/ad-revision"/>
      </div>
    </div>
  );
}
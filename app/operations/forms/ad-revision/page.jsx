export default async function AdRevision() {
    return (
        <div className="fullSize overlapParent">
            <iframe
                src={`https://form.123formbuilder.com/${process.env.REVISION_FORM_ID}?control117455718=${process.env.BUSINESS_ID}&control117455719=${process.env.BUSINESS_EMAIL}`}
                className="fullSize"
            ></iframe>
        </div>
    );
}
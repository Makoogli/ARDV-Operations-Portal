export default async function AdRevision() {
    return (
        <div className="fullSize overlapParent">
            <iframe
                src={`https://form.123formbuilder.com/${process.env.NEW_ADVERTISER_FORM_ID}?control117099868=${process.env.BUSINESS_ID}&control117099869=${process.env.BUSINESS_EMAIL}`}
                className="fullSize"
            ></iframe>
        </div>
    );
}
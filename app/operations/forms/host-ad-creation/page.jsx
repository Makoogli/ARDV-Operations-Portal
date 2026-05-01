export default async function HostAdCreation() {
    return (
        <div className="fullSize">
            <iframe
                src={`https://form.123formbuilder.com/${process.env.NEW_HOST_FORM_ID}?control117112523=${process.env.BUSINESS_ID}&control117112524=${process.env.BUSINESS_EMAIL}`}
                className="fullSize"
            ></iframe>
        </div>
    );
}
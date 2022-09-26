export default function AccommodationDetailBookingPopUp(props) {
    return (props.trigger) ? (
        <div className="accommodationDetail__popup">
            <button className="button-exit" onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    ) : "";  
}
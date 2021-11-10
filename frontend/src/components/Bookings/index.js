import './bookings.css'

function Bookings() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <div>
                    <span>Effective Date</span>
                </div>
                <div>
                    <input
                        id="effective-date"
                        type="date"
                        name="effective-date"
                        minlength="1"
                        maxlength="64"
                        placeholder=" "
                        autocomplete="nope"
                        required="required"></input>
                </div>
            </div>
        </div>
    )
}

export default Bookings

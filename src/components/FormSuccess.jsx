import Circle from "./svgs/Circle"
import Check from "./svgs/Check"

export default function FormSuccess() {
    return (
        <div className="flex gap-x-10 items-center">
            <div className="relative inline-block">
                <Circle className=" top-0" />
                <Check className="absolute left-12 top-0" />
            </div>
            <div>
                <p className="form-text max-w-xl">
                Thanks, your submission has been received! We will get back to you within 2-3 business days.
                </p>
            </div>
        </div>
    )
}
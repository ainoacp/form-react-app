import { useForm } from "react-hook-form";

export default function ContactPage() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const submit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="text" {...register("name" , {required: true})} />
            </label>
            <span>
                {errors.name && errors.name.type === "required" && "This field required"}
            </span>
            <label>
                <input type="email" {...register("email", {required: true, minLenght: 9})} />
                <span>
                {errors.email && errors.email.type === "required" && "This field required"}
                {errors.email && errors.email.type === "minLenght" && "This field must be more than nine characters"}
                </span>
            </label>
            <label>
                <select {...register("favoriteLenguage", {required: true})}>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Phyton">Phyton</option>
                </select>
                <span>
                {errors.favoriteLenguage && errors.favoriteLenguage.type === "required" && "This field required"}
                {errors.favoriteLenguage && errors.favoriteLenguage.type === "value" && "You must choose between Java, JavaScript, Phyton"}
                </span>
            </label>
            <button>Send</button>
        </form>
    )
}
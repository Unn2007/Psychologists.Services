import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/filters/slice.js";

export const FiltersForm = () => {
    const dispatch = useDispatch();
    const { register, watch, setValue } = useForm();
    const selectedOption = watch("option");

    useEffect(() => {
        if (selectedOption) {
            dispatch(setSelectedOption(selectedOption));
        }
    }, [selectedOption, dispatch]);



    return (
        <form>
            <label htmlFor="option">Select an option:</label>
            <select
                id="option"
                {...register("option")}
                onChange={(e) => setValue("option", e.target.value)}
            >
                <option value="option1">Show all</option>
                <option value="option2">A to Z</option>
                <option value="option3">Z to A</option>
                <option value="option4">Less than 10$</option>
                <option value="option5">Greater than 10$</option>
                <option value="option6">Popular</option>
                <option value="option7">Not popular</option>
            </select>
        </form>

    );
};



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
                <option value="Show all">Show all</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Less than 10$">Less than 10$</option>
                <option value="Greater than 10$">Greater than 10$</option>
                <option value="Popular">Popular</option>
                <option value="Not popular">Not popular</option>
            </select>
        </form>

    );
};



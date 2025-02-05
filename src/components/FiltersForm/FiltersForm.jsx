import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/filters/slice.js";
import css from './FiltersForm.module.css';

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
        <form className={css.form}>
            <label htmlFor="option" className={css.label}>Filters</label>
            <select
            className={css.select}
                id="option"
                {...register("option")}
                onChange={(e) => setValue("option", e.target.value)}
            >
                <option className={css.option} value="Show all">Show all</option>
                <option className={css.option} value="A to Z">A to Z</option>
                <option className={css.option} value="Z to A">Z to A</option>
                <option className={css.option} value="Less than 10$">Less than 10$</option>
                <option className={css.option} value="Greater than 10$">Greater than 10$</option>
                <option className={css.option} value="Popular">Popular</option>
                <option className={css.option} value="Not popular">Not popular</option>
            </select>
        </form>

    );
};



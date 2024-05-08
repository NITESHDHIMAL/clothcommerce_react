import { useForm } from "react-hook-form";
import { useProductpostMutation } from "../services/productApi";

export default function Addproduct() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [ productpost,  {isLoading, isError} ] = useProductpostMutation()

    // const onSubmit = data => console.log(data);


    const onSubmit = async (formData) => {
        console.log(formData)
        try {
            await productpost(formData).unwrap() 
            // reset()

        } catch (err) {
            console.log(err) 
        }
    } 


    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>
            <h3>Add Product</h3> 
            <form onSubmit={handleSubmit(onSubmit)} className="mx-4 my-4 px-4 py-4 border-2">
               
                <input {...register("title")} placeholder="title" className="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {errors.price && <span>This field is required</span>}

                <input {...register("price", { required: true })} placeholder="price" className="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {errors.price && <span>This field is required</span>}
                
                <input {...register("description", { required: true })} placeholder="description" className="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {errors.description && <span>This field is required</span>}
               
                <input {...register("category", { required: true })} placeholder="category" className="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                {errors.categtory && <span>This field is required</span>}

                <input type="submit" />
               
            </form >
        </>
    );
}
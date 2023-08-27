import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const MainButton = ({ text, route, variant, header }) => {

    const var1 = "text-white hover:bg-primaryColor hover:border-primaryColor"
    const var2 = "text-lightGreen hover:bg-lightGreen hover:text-white border-lightGreen"
    const var3 = "text-white bg-primaryColor hover:bg-offWhite hover:text-primaryColor"

    return (
        header ?
            <Link href={route} className={` px-3 lg:px-5 py-1.5 border-white border rounded-full text-2xl lg:text-3xl flex gap-4 cursor-pointer transition-all ${variant == 1 ? var1 : variant == 2 ? var2 : var3}`}> {text}
                <AiOutlineArrowRight className={`mt-1 ${variant == 1 ? 'text-white' : variant == 'text-lightGreen hover:text-white' ? var2 : " hover:text-primaryColor"}`} />
            </Link> :
            <Link href={route} className={` px-3 lg:px-5 py-1.5 border-white border rounded-full text-2xl lg:text-3xl flex gap-4 cursor-pointer transition-all ${variant == 1 ? var1 : variant == 2 ? var2 : var3}`}> {text}
                <AiOutlineArrowRight className={`mt-1 ${variant == 1 ? 'text-white' : variant == 'text-lightGreen hover:text-white' ? var2 : " hover:text-primaryColor"}`} />
            </Link>
    )
}

export default MainButton
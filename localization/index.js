import en from "./en.json"
import nl from "./nl.json"

import {useRouter} from "next/router";

export const getLocale = () => {

    const languages = {en, nl}

    const router = useRouter()

    return languages[router.locale] || languages['nl']

}
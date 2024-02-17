import {useMutation} from "@tanstack/react-query";
import {RegRequest} from "../../../../data/user";
import Cookies from "js-cookie";
import ECookieValues from "../../../common/enum";
import {useNavigate} from "react-router-dom";

const useRegLogic = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: RegRequest,
        onSuccess: (data) => {
            Cookies.set(ECookieValues.ACCESS_TOKEN, data.token, {expires: 1})
            navigate('/disk')
        }
    })
}

export {useRegLogic}